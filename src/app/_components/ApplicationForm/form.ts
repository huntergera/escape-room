import {z} from "zod";

export const validationSchema = z.object({
  userName: z.string(),
  tel: z.number(),
  participantsNumber: z.number(),
});