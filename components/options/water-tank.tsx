"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { WATER_TANK_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
export const WaterTank = () => {
  const [selectedTank, setSelectedTank] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const calculateTankPrice = () => {
    // (rs.10/L)
    const tankList = ["500L*2", "1000L+500L", "5000L", "10000L", "50000L"];
    const priceList = ["10000", "15000", "50000", "100000", "500000"];
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Water Tank
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Tank Capacity</h3>
            <RadioGroup value={selectedTank} onValueChange={setSelectedTank}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {WATER_TANK_CATEGORY.BRANDS.map((item, index) => (
                  <div key={index} className="relative">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`tank-${index}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`tank-${index}`}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <div className="w-16 h-16 bg-blue-200 rounded-full mb-3 flex items-center justify-center">
                        <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">{item.NAME}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        ₹{item.PER_UNIT_RATE.toLocaleString()}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <button
            className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            onClick={nextStep}
          >
            nextStep
          </button>
          <button
            className="w-44 mt-6  bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            onClick={prevStep}
          >
            prevStep
          </button>
        </CardContent>
      </Card>
    </div>
  );
};
