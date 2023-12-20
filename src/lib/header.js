import { headers } from "next/headers";

function getTokenAuthorization() {
  const headersList = headers();
  const authorization = headersList.get("authorization");

  return authorization;
}

export { getTokenAuthorization };
