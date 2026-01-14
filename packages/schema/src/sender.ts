import { z } from "zod";

export const SenderSchema = z.enum(["character", "user"]);
export type Sender = z.infer<typeof SenderSchema>;
