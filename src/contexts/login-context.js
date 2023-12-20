"use client";

import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [login, setLogin] = useState({
    email: "test@gmail.com",
    firstName: "Yon",
    lastName: "Andreas",
    username: "oyon87",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  });

  return <LoginContext.Provider value={{ login, setLogin }}>{children}</LoginContext.Provider>;
}

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContent must be used within a LoginContentProvider");
  }

  return context;
}

export default LoginContextProvider;
