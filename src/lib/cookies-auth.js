'use server';

import { cookies } from 'next/headers';

const setAuthCookies = async (auth) => {
  await cookies().set('auth', JSON.stringify(auth), {
    httpOnly: true,
    secure: true,
    domain: '.netlify.app',
  });
};

export { setAuthCookies };
