import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { auth } from "@services/clerk/server";

/**
 * Creates a Supabase client configured for server-side use with Clerk authentication.
 * This function should be called from Server Components, Server Actions, or Route Handlers.
 * 
 * @returns A Supabase client instance configured with Clerk session tokens when available
 * 
 * @example
 * ```tsx
 * // In a Server Component
 * export default async function MyServerComponent() {
 *   const supabase = await createClient();
 *   const { data } = await supabase.from('table').select('*');
 * }
 * ```
 */
export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                }
            },
            // Include Clerk token for Supabase RLS policies when available
            accessToken: async () => {
                try {
                    const clerkAuth = await auth();
                    return await clerkAuth.getToken() ?? null;
                } catch {
                    // Clerk auth may not be available (e.g., unauthenticated requests)
                    // Return null to allow anonymous access
                    return null;
                }
            }
        }
    );
}