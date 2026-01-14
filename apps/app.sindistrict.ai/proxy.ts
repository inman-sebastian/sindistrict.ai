import { clerkProxy } from "@services/clerk/proxy";
import { supabaseProxy } from "@services/supabase/proxy";

export default clerkProxy(async (auth, req) => {
    const { isAuthenticated, redirectToSignIn } = await auth()
    if (!isAuthenticated) {
        return redirectToSignIn();
    }
    return await supabaseProxy(req);
}, {
    authorizedParties:[
        "http://localhost:3001",
        "https://app.sindistrict.ai"
    ]
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)'
    ]
};