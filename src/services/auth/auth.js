"use server";

import { setAuthCookies } from "@/lib/cookies-auth";

const AUTH_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_LOGIN_PATH;

const getUser = async (userName, password) => {
  const data = {
    auth: "",
    status: "",
  };

  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName,
      password: password,
      // expiresInMins: 60, // optional
    }),
  }).then((res) => res);

  data.status = response.status;
  data.auth = await response.json();

  if (response.status === 200) {
    setAuthCookies(data.auth);
  }

  return data;
};

export { getUser };
