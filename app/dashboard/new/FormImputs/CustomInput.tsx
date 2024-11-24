import { Control, Controller, FieldError } from "react-hook-form";
import { FormProductData } from "@/app/dashboard/FormSchema/FormSchema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps {
  name: keyof FormProductData;
  type?: string;
  placeholder: string;
  control: Control<FormProductData>;
  error?: FieldError;
  label: string;
}

export function CustomInput({
  name,
  type,
  placeholder,
  control,
  error,
  label
}: InputProps) {
  return (
    <div className="form-group">
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input id={name} type={type} placeholder={placeholder} {...field} />
        )}
      />
      {error && (
        <span className="text-red-600 text-sm py-2">{error.message}</span>
      )}
    </div>
  );
}
