import { Control, Controller, FieldError } from "react-hook-form";
import { FormProductData } from "@/app/dashboard/FormSchema/FormSchema";
import { Input } from "@/components/ui/input";

interface InputProps {
  name: keyof FormProductData;
  type?: string;
  placeholder: string;
  control: Control<FormProductData>;
  error?: FieldError;
}

export function CustomInput({
  name,
  type,
  placeholder,
  control,
  error,
}: InputProps) {
  return (
    <div className="form-group">
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
