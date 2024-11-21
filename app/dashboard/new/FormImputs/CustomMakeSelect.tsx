"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cars } from "@/lib/cars";
import { Control, Controller, FieldError } from "react-hook-form";
import { FormProductData } from "@/app/dashboard/FormSchema/FormSchema";
import { useState } from "react";
import { CustomSelectModel } from "./CustomSelectModel";

interface SelectProps {
  name: keyof FormProductData;
  control: Control<FormProductData>;
  error?: FieldError;
}

export function CustomMakeSelect({ name, control, error }: SelectProps) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<string[]>([]);
  const handleMakeChange = (selectedMake: string) => {
    setMake(selectedMake);
    const selectedCar = cars.find((car) => car.make === selectedMake);
    setModels(selectedCar ? selectedCar.models : []);
    setModel("");
  };
  return (
    <div className="flex gap-3">
      <div className="w-2/4">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                handleMakeChange(value);
                field.onChange(value);
              }}
              defaultValue={field.value}
              value={field.value}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent>
                {cars.map((car) => (
                  <SelectItem key={car.id} value={car.make}>
                    {car.make}
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
      <div className="w-2/4">
        <CustomSelectModel
          control={control}
          name="model"
          models={models}
          make={make}
        />
      </div>
    </div>
  );
}
