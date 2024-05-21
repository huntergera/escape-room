import { z } from "zod";
import validator from 'validator';

export const validationSchema = z.object({
  email: z.string().min(1, 'Email is required').refine((value) => validator.isEmail(value), 'Enter valid email'),
  password: z.string({
    invalid_type_error: "Password is required",
  }).min(6, { message: "Minimum number of characters 6" }),
});