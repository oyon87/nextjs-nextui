"use client";

import { Card, CardBody, Input, Button, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const size = "sm";
  const router = useRouter();
  const [userName, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something Wrong...!");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    console.log(response.headers);
    const data = await response.json();

    if (response.ok) {
      setIsError(false);
      setIsLoading(true);
      router.push("/dashboard");
    } else {
      setIsError(true);
      setErrorMessage(data.message);
    }
  };

  return (
    <Card className="p-5 bg-background/70 w-1/4">
      <form action={handleSubmit}>
        <CardHeader>
          <h1 className="text-xl">Yon Store | Sign in</h1>
        </CardHeader>
        <CardBody className="gap-y-2">
          <span className={`text-red-400 italic text-xs ${isError ? "" : "hidden"}`}>{errorMessage}</span>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            label="User Name"
            placeholder="Enter your user name"
            size={size}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            placeholder="Enter your password"
            size={size}
          />
          <Button type="submit" color="primary" className="mt-2" size={size} isLoading={isLoading ? true : false}>
            Sign in
          </Button>
        </CardBody>
      </form>
    </Card>
  );
}
