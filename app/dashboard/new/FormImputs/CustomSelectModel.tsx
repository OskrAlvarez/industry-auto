import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, Controller, FieldError } from "react-hook-form";
import { FormProductData } from "../../FormSchema/FormSchema";
import { Label } from "@/components/ui/label";


interface ModelSelectProps {
  name: keyof FormProductData;
  control: Control<FormProductData>;
  models: string[];
  error?: FieldError;
  make: string;
  label: string;
}

export function CustomSelectModel({ name, control, models, make, error, label }: ModelSelectProps) {
  return (
    <div>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
          >
            <SelectTrigger disabled={!make && !field.value}>
              <SelectValue placeholder="Select Model">
                {field.value || "Select Model"}
              </SelectValue>
            </SelectTrigger >
            <SelectContent>
              {models.map((model, index) => (
                <SelectItem key={index} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <span className="text-red-600 text-sm py-2">{error.message}</span>
      )}
    </div>
  );
}
