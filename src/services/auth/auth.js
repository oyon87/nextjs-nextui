'use server';

import { cookies } from 'next/headers';

const AUTH_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_LOGIN_PATH;
const data = {
  status: ''
};

const getUser = async (userName, password) => {
  cookies().delete('auth');

  await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: userName,
      password: password,
      // expiresInMins: 60, // optional
    })
  })
    .then(res => {
      data.status = res.status;
      return res.json();
    })
    .then(response => {
      if (response.id) {
        cookies().set('auth', JSON.stringify(response));
      }
      data.auth = response;
    });

  return data;
};

export { getUser };
