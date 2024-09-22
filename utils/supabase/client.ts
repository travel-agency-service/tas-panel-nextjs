import { createBrowserClient } from '@supabase/ssr';

export function createClient(supabase_schema: string | null = null) {
  if (supabase_schema)
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { db: { schema: supabase_schema } }
    );
  else
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
