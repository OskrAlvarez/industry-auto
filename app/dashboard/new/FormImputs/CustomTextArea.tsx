import { Control, Controller, FieldError } from "react-hook-form";
import { FormProductData } from "@/app/dashboard/FormSchema/FormSchema";
import { Textarea } from "@/components/ui/textarea";

interface InputProps {
  name: keyof FormProductData;
  placeholder: string;
  control: Control<FormProductData>;
  error?: FieldError;
}

export function CustomTextArea({
  name,
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
          <Textarea id={name} placeholder={placeholder} {...field} />
        )}
      />
      {error && (
        <span className="text-red-600 text-sm py-2">{error.message}</span>
      )}
    </div>
  );
}
