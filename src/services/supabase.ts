import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qlexuncemojoapbkrvse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZXh1bmNlbW9qb2FwYmtydnNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMDAyMDUsImV4cCI6MjAyNTU3NjIwNX0.Wd0L6xN0FlYH5YnwIIQsSRaZF54ILgY4rGCdTWGMvaw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
