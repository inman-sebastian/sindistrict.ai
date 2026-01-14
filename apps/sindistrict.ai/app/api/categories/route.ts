export async function GET(request: Request) {
    return new Response(JSON.stringify({
        "personality": [
            "🤪 Goofy",
            "🥰 Romantic",
            "🤔 Thoughtful",
            "🫣 Shy",
            "😬 Nervous",
            "🫩 Exhausted",
            "🥵 Nymphomaniac",
            "🤓 Nerdy",
            "🥹 Emotional",
            "😨 Fearful",
            "😊 Happy",
            "😔 Sad",
            "😇 Innocent",
            "🤑 Greedy",
            "😒 Unamused",
            "🤨 Suspicious",
            "😔 Pensive",
            "😟 Anxious",
            "😎 Popular"
        ]
    }), { status: 200 });
}