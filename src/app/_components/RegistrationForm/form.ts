import { z } from "zod";
import validator from 'validator';

export const registrationValidationSchema = z.object({
  userName: z.string().min(1, { message: "Must be 1 or more characters long" }),
  email: z.string().min(1, 'Email is required').refine((value) => validator.isEmail(value), 'Enter valid email'),
  password: z.string({
    invalid_type_error: "Password is required",
  }).min(6, { message: "Minimum number of characters 6" }),
  privateDataAgreement: z.boolean().refine(value => value, {
    message: "You must agree to the privacy policy"
  }),
});