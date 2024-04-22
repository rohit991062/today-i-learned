import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wfjriffkckjfnfycetil.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmanJpZmZrY2tqZm5meWNldGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzcwNTYsImV4cCI6MjAyODU1MzA1Nn0.7NZTRv1xHJZ7PA_Fn-SG9bzLhVFM1-MLDMK4ES323Fs';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;