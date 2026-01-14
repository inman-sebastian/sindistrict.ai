import { z } from "zod";
import { CharacterSchema, ScenarioSchema, UserPersonaSchema } from ".";

export const UserProfileSchema = z.object({
    user_id: z.uuid(),
    username: z.string(),
    avatar: z.base64().optional(),
    premium_user: z.boolean().default(false),
    featured_characters: z.array(CharacterSchema).default([]),
    featured_scenarios: z.array(ScenarioSchema).default([]),
    featured_user_personas: z.array(UserPersonaSchema).default([]),
    total_characters: z.number().default(0),
    total_scenarios: z.number().default(0),
    total_user_personas: z.number().default(0),
    created_at: z.date().default(new Date()),
    updated_at: z.date().default(new Date())
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
