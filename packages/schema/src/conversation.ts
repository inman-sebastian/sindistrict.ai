import { z } from "zod";
import { MessageSchema } from ".";

export const ConversationSchema = z.object({
    id: z.uuid(),
    messages: z.array(MessageSchema),
    created_by: z.uuid(),
    created_at: z.date().default(new Date()),
    updated_at: z.date().default(new Date())
});

export type Conversation = z.infer<typeof ConversationSchema>;
