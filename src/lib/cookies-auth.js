"use server";

import { cookies } from "next/headers";
// import { getCookie, setCookie } from "cookies-next";

const setAuthCookies = (auth) => {
  cookies().set("auth", JSON.stringify(auth), { httpOnly: true });

  return true;
};

// const setAuthCookies = (auth) => {
//   setCookie("auth", JSON.stringify(auth), { secure: true, sameSite: "lax" });

//   return true;
// };

// const getAuthCookies = () => {
//   const auth = getCookie("auth");
//   const dataAuth = JSON.parse(auth);

//   return dataAuth;
// };

// const getBarerAuthorization = () => {
//   const dataAuth = getAuthCookies();

//   return dataAuth.token;
// };

export { setAuthCookies };
