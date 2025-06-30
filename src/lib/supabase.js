import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nfiyjubkhqwpdyunngnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // sua chave inteira

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
