import { z } from "zod";
import validator from 'validator';

export const validationSchema = z.object({
  userName: z.string().min(1, { message: "Must be 1 or more characters long" }),
  tel: z.string().min(1, 'Phone is required').refine((value) => validator.isMobilePhone(value, 'uk-UA'), 'Enter number of phone'),
  participantsNumber: z.number({
    invalid_type_error: "Number of participants is required",
  }).min(2, { message: "Minimum number of participants 2" })
    .max(10, "Maximum number of participants 10"),
  privateDataAgreement: z.boolean().refine(value => value, {
    message: "You must agree to the privacy policy"
  }),
});