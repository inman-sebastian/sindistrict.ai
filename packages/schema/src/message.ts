import { z } from "zod";
import { SenderSchema } from ".";

export const MessageSchema = z.object({
    id: z.uuid(),
    content: z.string(),
    sent_by: SenderSchema,
    created_at: z.date().default(new Date()),
    updated_at: z.date().default(new Date())
});

export type Message = z.infer<typeof MessageSchema>;