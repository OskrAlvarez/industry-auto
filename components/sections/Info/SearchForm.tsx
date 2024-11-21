"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cars } from "@/lib/cars";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchForm() {
  const router = useRouter();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [models, setModels] = useState<string[]>([]);

  const handleMakeChange = (selectedMake: string) => {
    setMake(selectedMake);
    const selectedCar = cars.find((car) => car.make === selectedMake);
    setModels(selectedCar ? selectedCar.models : []);
    setModel("");
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      make,
      model,
      minPrice,
      maxPrice,
    }).toString();
    router.push(`/inventory?${params}`);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">SEARCH OUR INVENTORY</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Select onValueChange={handleMakeChange}>
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
        </div>
        <div className="space-y-2">
          <Select onValueChange={setModel} disabled={!make}>
            <SelectTrigger>
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              {models.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              type="number"
              placeholder="Min. Price"
              min={0}
              step={1000}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="number"
              placeholder="Max. Price"
              min={0}
              step={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <Button
          className="w-full bg-primary text-primary-foreground"
          onClick={handleSearch}
        >
          Search
        </Button>
      </CardContent>
    </Card>
  );
}
