import { createBrowserClient } from "@supabase/ssr";
import { useSession } from "@services/clerk";

/**
 * Creates a Supabase client configured for browser use with Clerk authentication.
 * This hook must be called from within a React component.
 * 
 * @returns A Supabase client instance configured with Clerk session tokens
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const supabase = useSupabaseClient();
 *   // Use supabase client...
 * }
 * ```
 */
export function useSupabaseClient() {
    const { session } = useSession();
    
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            accessToken: async () => {
                const token = await session?.getToken();
                return token ?? null;
            }
        }
    );
}

/**
 * Creates a Supabase client for browser use without Clerk authentication.
 * Use this when Clerk authentication is not required or handled separately.
 * 
 * @returns A basic Supabase client instance
 */
export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );
}