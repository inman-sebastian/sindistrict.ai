import { z } from "zod";

export const VisibilitySchema = z.enum(["public", "private", "unlisted"]).default("public");
export type Visibility = z.infer<typeof VisibilitySchema>;
