"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { animals } from "@/data/data";

export default function formInput() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <h1>Form Input</h1>
      <form method="POST" className="mt-3">
        <div className="grid grid-cols-2 gap-4">
          <Input type="email" label="Email" placeholder="Enter your email" />

          <Input type="text" label="Name" placeholder="Enter your name" />

          <Input
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />

          <Input
            type="email"
            label="Email"
            defaultValue="junior2nextui.org"
            isInvalid={true}
            errorMessage="Please enter a valid email"
          />

          <Select label="Select an animal" placeholder="Select an animal">
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>

          <Select label="Favorite Animal" placeholder="Select an animal">
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>

          <CheckboxGroup label="Select cities" defaultValue={["buenos-aires", "london"]}>
            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox value="sydney">Sydney</Checkbox>
            <Checkbox value="san-francisco">San Francisco</Checkbox>
            <Checkbox value="london">London</Checkbox>
            <Checkbox value="tokyo">Tokyo</Checkbox>
          </CheckboxGroup>

          <RadioGroup label="Select your favorite city">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>

          <Textarea label="Description" placeholder="Enter your description" />
        </div>
      </form>
    </>
  );
}
