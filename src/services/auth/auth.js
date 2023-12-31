"use client";

import { removeAuthCookies } from "@/lib/cookies-next";

const authLogin = async (userName, password) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json().then((error) => error.message);
    }
    return await res.json().then((response) => response);
  });

  return response;
};

const logout = () => {
  removeAuthCookies();
};

export { authLogin, logout };
