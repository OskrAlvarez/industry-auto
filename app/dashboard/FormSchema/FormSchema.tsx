import { z } from "zod";
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const productSchema = z.object({
  price: z.string().min(1, {
    message: 'The price is required'
  }).max(10, {
    message: 'The price cant be longer than 10 characters'
  }),
  year: z.string().min(1, {
    message: 'The year is required'
  }).length(4, {
    message: "The year is only with 4 digits"
  }).regex(/^\d{4}$/, {
    message: 'The year cant be contain letters'
  })
  .refine((year) => parseInt(year, 10) >= 1900, 
  { message: "The year cant be less than 1900" }),
  description: z.string().min(1, {
    message: 'The Description is required'
  }).max(400, {
    message: 'description cant be longer than 400 characters'
  }),
  odometer: z.string().min(1,{
    message: 'The Odometer is required'
  }).max(8, {
    message: 'The odometer cant be longer than 8 characters'
  }),
  engine: z.string().min(1, {
    message: 'The Engine is Required'
  }).max(15, {
    message: 'The engine cant be longer than 15 characters'
  }).transform((drivetrain) => drivetrain.toUpperCase()),
  transmission: z.string().min(1, {
    message: 'The transmission is Required'
  }).max(20, {
     message: 'The engine cant be longer than 15 characters'
  }),
  drivetrain: z.string().min(1, {
    message: 'The drivetrain is required'
  }).max(3, {
    message: 'The drivetrain cant be longer than 3 characters'
  }).transform((drivetrain) => drivetrain.toUpperCase()),
  fuel: z.string().min(1, {
    message: 'The fuel is Required'
  }).max(15, {
    message: 'The fuel cant be longer than 15 characters'
  }).transform(fuel => capitalize(fuel)),
  VNI: z.string().min(1, {
    message: 'The VNI is required'
  }).max(17, {
    message: 'The VNI cant be longer than 17 characters'
  }).transform(VNI => VNI.toUpperCase()),
  make: z.string().min(1, {
    message: 'The make is required'
  }),
  model: z.string().min(1, {
    message: 'The model is required'
  }),
  version: z.string().max(50, {
    message: 'The version cant be longer than 50 character'
  })
})

export type FormProductData = z.infer<typeof productSchema>