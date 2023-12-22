"use server";

import { cookies } from "next/headers";

const setAuthCookies = async (auth) => {
  cookies().set("auth", JSON.stringify(auth), { maxAge: 60 * 60 });

  return true;
};

export { setAuthCookies };
