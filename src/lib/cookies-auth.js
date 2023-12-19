import { getCookie, setCookie } from "cookies-next";

const setAuthCookies = (auth) => {
  setCookie("auth", JSON.stringify(auth), { secure: true, sameSite: "lax" });

  return true;
};

const getAuthCookies = () => {
  const auth = getCookie("auth");
  const dataAuth = JSON.parse(auth);

  return dataAuth;
};

const getBarerAuthorization = () => {
  const dataAuth = getAuthCookies();

  return dataAuth.token;
};

export { setAuthCookies, getBarerAuthorization, getAuthCookies };
