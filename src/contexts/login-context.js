"use client";

import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [login, setLogin] = useState({
    name: "test",
    token: "asdasdasd",
    isLogin: true
  });

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContent must be used within a LoginContentProvider");
  }

  return context;
}

export default LoginContextProvider;
