"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PLUMBING_QUANTITY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
export const Plumbing = () => {
  const [selectedPVC, setSelectedPVC] = useState("");
  const [selectedCPVC, setSelectedCPVC] = useState("");
  const [selectedVitreous, setSelectedVitreous] = useState("");
  const { nextStep, prevStep } = useStepStore();

  const calculatePVC = () => {
    const per_sqft_rate = 35;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateCPVC = () => {
    const per_sqft_rate = 30;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateCPVitreous = () => {
    const per_unit_rate = 35000;
    const standard_quantity = 2;
    const no_of_floors = 5;
    const total_quantity = standard_quantity * no_of_floors;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Plumbing
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">
              PVC (Internal & External)
            </h3>
            <RadioGroup value={selectedPVC} onValueChange={setSelectedPVC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["PVC-(INTERNAL & EXTERNAL)"].map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.NAME} id={`pvc-${index}`} />
                      <Label
                        htmlFor={`pvc-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              CPVC (Internal & External)
            </h3>
            <RadioGroup value={selectedCPVC} onValueChange={setSelectedCPVC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["CPVC-(INTERNAL & EXTERNAL)"].map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.NAME} id={`cpvc-${index}`} />
                      <Label
                        htmlFor={`cpvc-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">CP-Vitreous</h3>
            <RadioGroup
              value={selectedVitreous}
              onValueChange={setSelectedVitreous}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PLUMBING_QUANTITY["CP-VITREOUS"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`vitreous-${index}`}
                    />
                    <Label
                      htmlFor={`vitreous-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_UNIT_RATE.toLocaleString()}/
                      {item.PER_UNIT}
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
