import { getCookie, setCookie } from "cookies-next";

const setAuthCookies = (auth) => {
  setCookie("auth", JSON.stringify(auth), { secure: true });

  return true;
};

const getBarerAuthorization = () => {
  const auth = getCookie("auth");
  const dataAuth = JSON.parse(auth);

  return dataAuth.token;
};

export { setAuthCookies, getBarerAuthorization };
