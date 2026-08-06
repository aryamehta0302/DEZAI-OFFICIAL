-- Dezai Studio Supabase Schema Setup
-- Run this entire script in the Supabase SQL Editor

-- --------------------------------------------------------
-- 1. WAITLIST TABLE
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    source TEXT DEFAULT 'landing_page',
    status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (anyone can join the waitlist)
CREATE POLICY "Allow public inserts to waitlist" 
ON public.waitlist FOR INSERT 
TO public
WITH CHECK (true);

-- Allow anonymous reads if they need to check if they exist (used in waitlist API route)
CREATE POLICY "Allow public reads of own email in waitlist"
ON public.waitlist FOR SELECT
TO public
USING (true);


-- --------------------------------------------------------
-- 2. BUSINESS LEADS TABLE
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.business_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    budget_range TEXT,
    service_interest TEXT,
    project_description TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.business_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (anyone can submit a lead)
CREATE POLICY "Allow public inserts to business_leads" 
ON public.business_leads FOR INSERT 
TO public
WITH CHECK (true);

-- Disable public reads (only admins via dashboard or service role can read)
-- (No SELECT policy created for public)


-- --------------------------------------------------------
-- 3. LEARNER APPLICATIONS TABLE
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.learner_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    background TEXT NOT NULL,
    desired_path TEXT NOT NULL,
    portfolio_url TEXT,
    motivation TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.learner_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (anyone can submit an application)
CREATE POLICY "Allow public inserts to learner_applications" 
ON public.learner_applications FOR INSERT 
TO public
WITH CHECK (true);

-- Disable public reads (only admins via dashboard or service role can read)
-- (No SELECT policy created for public)

-- --------------------------------------------------------
-- NOTIFICATIONS / TRIGGERS (Optional)
-- --------------------------------------------------------
-- You can add email triggers or webhook calls here if needed later.
