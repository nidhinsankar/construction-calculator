"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DOOR_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
export const Door = () => {
  const [selectedShutter, setSelectedShutter] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");
  const [selectedMainDoor, setSelectedMainDoor] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const calculateDoorShutter = () => {
    const per_sqft_rate = 45;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const amount = total_build_up_area * per_sqft_rate;
    return amount;
  };
  const calculateFrameSingleRebate = () => {
    const per_sqft_rate = 35;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const amount = total_build_up_area * per_sqft_rate;
    return amount;
  };
  const calculateMainDoor = () => {
    const unitDoorPrice = ["15000/door", "20000/door", "30000/door"];
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Doors
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Door Shutter</h3>
            <RadioGroup
              value={selectedShutter}
              onValueChange={setSelectedShutter}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DOOR_CATEGORY.DOOR_SHUTTER.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={`option-${index}`}
                      id={`shutter-${index}`}
                    />
                    <Label
                      htmlFor={`shutter-${index}`}
                      className="cursor-pointer"
                    >
                      ₹{item.PER_SQFT_RATE}/sqft
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              Door Frame (Single Rebate)
            </h3>
            <RadioGroup value={selectedFrame} onValueChange={setSelectedFrame}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DOOR_CATEGORY.DOOR_FRAME_SINGLE_REBATE_ELS0100.map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.NAME} id={`frame-${index}`} />
                      <Label
                        htmlFor={`frame-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Main Door</h3>
            <RadioGroup
              value={selectedMainDoor}
              onValueChange={setSelectedMainDoor}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DOOR_CATEGORY.MAIN_DOOR.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`main-${index}`} />
                    <Label htmlFor={`main-${index}`} className="cursor-pointer">
                      {item.NAME}
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
