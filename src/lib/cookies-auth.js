// import { cookies } from 'next/headers';
import { setCookie } from 'cookies-next';

const setAuthCookies = (auth) => {
  setCookie('auth', JSON.stringify(auth));
};

export { setAuthCookies };
