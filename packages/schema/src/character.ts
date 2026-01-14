import { z } from "zod";
import { GenderSchema, VisibilitySchema } from ".";

export const CharacterSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    age: z.number(),
    gender: GenderSchema,
    avatar: z.base64().optional(),
    visibility: VisibilitySchema,
    created_by: z.uuid(),
    created_at: z.date().default(new Date()),
    updated_at: z.date().default(new Date())
});

export type Character = z.infer<typeof CharacterSchema>;
