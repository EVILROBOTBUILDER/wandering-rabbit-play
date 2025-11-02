import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase Client Initialization Debug:');
console.log('VITE_SUPABASE_URL:', supabaseUrl ? 'Loaded' : 'MISSING');
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Loaded' : 'MISSING');

if (!supabaseUrl) {
  console.error('ERROR: Supabase URL (VITE_SUPABASE_URL) is missing from environment variables. Please check your .env file.');
}
if (!supabaseAnonKey) {
  console.error('ERROR: Supabase Anon Key (VITE_SUPABASE_ANON_KEY) is missing from environment variables. Please check your .env file.');
}

// Only attempt to create client if both are present to avoid immediate crashes with undefined
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (console.error('Supabase client could not be initialized due to missing environment variables.'), {} as any); // Return a dummy object to satisfy type, but log error.