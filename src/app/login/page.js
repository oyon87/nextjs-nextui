"use client";

import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Login() {
  const size = "sm";
  const [userName, setUserName] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  const handleSubmit = () => {
    console.log(userName, password);
  };

  return (
    <Card className="p-5 bg-background/70 w-1/4">
      <form action={handleSubmit}>
        <CardBody className="gap-y-2">
          <h1 className="text-xl">Yon Store Sign in</h1>
          <Input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" label="User Name" placeholder="Enter your user name" size={size} />
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" placeholder="Enter your password" size={size} />
          <Button type="submit" color="primary" className="mt-2">Sign in</Button>
        </CardBody>
      </form>
    </Card>
  );
}