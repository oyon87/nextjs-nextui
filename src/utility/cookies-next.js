import { getCookie } from "cookies-next";

const getAuthCookies = () => {
  const auth = getCookie("auth");
  const dataAuth = JSON.parse(auth);

  return dataAuth;
};

const getBarerAuthorization = () => {
  const dataAuth = getAuthCookies();

  return dataAuth.token;
};

export { getAuthCookies, getBarerAuthorization };
