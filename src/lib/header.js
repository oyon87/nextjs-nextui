import { getBarerAuthorization } from "@/lib/cookies-next";

const getHeader = () => {
  const header = {
    Authorization: getBarerAuthorization(),
    "Content-Type": "application/json",
  };

  return header;
};

export { getHeader };
