import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const waitlistSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  source: z.string().optional().default('landing_page'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    const { email, source } = result.data;

    // 1. Check if email already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // PGRST116 is Supabase error for "No rows found"
      console.error('Waitlist check error:', fetchError);
      return NextResponse.json(
        { error: 'An error occurred while checking the waitlist.' },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 409 }
      );
    }

    // 2. Insert into database
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          source,
          status: 'pending',
        }
      ]);

    if (insertError) {
      console.error('Waitlist insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to join the waitlist. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
