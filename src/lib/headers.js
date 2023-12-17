'use server';

import { headers } from 'next/headers';

const getAuthorizationHeader = () => {
  const headersList = headers();
  const authorization = headersList.get('Authorization') || '';
  const header = {
    'Authorization': authorization,
    'Content-Type': 'application/json'
  };

  return header;
};

export { getAuthorizationHeader };
