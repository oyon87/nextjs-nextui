'use server';

import { cookies } from 'next/headers';

const setAuthCookies = (auth) => {
  cookies().set('auth', JSON.stringify(auth));
};

export { setAuthCookies };
