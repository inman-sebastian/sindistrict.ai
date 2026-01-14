import { auth } from "@services/clerk/server";

export async function GET(request: Request) {
    const { isAuthenticated, userId } = await auth();
    if (!isAuthenticated) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    return new Response(JSON.stringify({ userId }), { status: 200 });
}