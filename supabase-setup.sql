-- DEZAI Website — Supabase Table Setup
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/YOUR_PROJECT/sql/new)

-- Drop existing tables if they exist to prevent schema cache issues and ensure all columns are created correctly.
-- WARNING: This will delete any existing data in these tables.
DROP TABLE IF EXISTS business_leads CASCADE;
DROP TABLE IF EXISTS learner_applications CASCADE;

-- ============================================================
-- Table: business_leads
-- Stores inquiries from the Business Inquiry form on /contact
-- ============================================================
CREATE TABLE IF NOT EXISTS business_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT DEFAULT '',
  budget_range TEXT DEFAULT '',
  service_interest TEXT DEFAULT '',
  project_description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE business_leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon users (public form)
CREATE POLICY "Allow public inserts" ON business_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read
CREATE POLICY "Allow authenticated reads" ON business_leads
  FOR SELECT
  TO authenticated
  USING (true);


-- ============================================================
-- Table: learner_applications
-- Stores applications from the Learner Application form on /contact
-- ============================================================
CREATE TABLE IF NOT EXISTS learner_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  background TEXT NOT NULL,
  desired_path TEXT NOT NULL,
  portfolio_url TEXT DEFAULT '',
  motivation TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE learner_applications ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon users (public form)
CREATE POLICY "Allow public inserts" ON learner_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read
CREATE POLICY "Allow authenticated reads" ON learner_applications
  FOR SELECT
  TO authenticated
  USING (true);
