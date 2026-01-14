import { z } from "zod";
import { CharacterSchema, UserPersonaSchema, VisibilitySchema } from ".";

export const ScenarioSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    description: z.string(),
    user_persona: UserPersonaSchema,
    characters: z.array(CharacterSchema),
    visibility: VisibilitySchema,
    created_by: z.uuid(),
    created_at: z.date(),
    updated_at: z.date()
});

export type Scenario = z.infer<typeof ScenarioSchema>;
