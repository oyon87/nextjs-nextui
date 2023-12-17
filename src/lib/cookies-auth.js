'use server';

import { cookies } from 'next/headers';

const setAuthCookies = async (auth) => {
  await cookies().set('auth', JSON.stringify(auth), {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });
};

export { setAuthCookies };
