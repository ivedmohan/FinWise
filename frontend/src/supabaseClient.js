// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hxyaerrjrchbyzyantsw.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eWFlcnJqcmNoYnl6eWFudHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MTA0NDAsImV4cCI6MjA0NTA4NjQ0MH0.ZMc40hqMhMRLKk53mvwwY8azPlYB3x2QyhML9MHWcM0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
