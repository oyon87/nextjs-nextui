import { getCookie, deleteCookie } from "cookies-next";

const getAuthCookies = () => {
  const auth = getCookie("auth");
  const dataAuth = JSON.parse(auth);

  return dataAuth;
};

const getBarerAuthorization = () => {
  const dataAuth = getAuthCookies();

  return dataAuth.token;
};

const removeAuthCookies = () => {
  deleteCookie("auth");
  return true;
};

export { getAuthCookies, getBarerAuthorization, removeAuthCookies };
