import { createClient } from '@supabase/supabase-js';

// URL do seu projeto Supabase
const supabaseUrl = 'https://nfiyjubkhqwpdyunngnp.supabase.co';

// Chave pública (anon key) com permissões de leitura/escrita limitadas
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5maXlqdWJraHF3cGR5dW5uZ25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODkwNDYsImV4cCI6MjA2Njg2NTA0Nn0.2mImuJ2NaFLRQ3X9THdX2OAaWOhznwEa-XrwG1yAxX0';

// Instância do cliente Supabase exportada para ser reutilizada em todo o app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
