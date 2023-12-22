import { NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/cookies-auth";

export async function POST(request) {
  const AUTH_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_LOGIN_PATH;
  const { userName, password } = await request.json();

  const data = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName,
      password: password,
      expiresInMins: 60,
    }),
  }).then((res) => res);

  const auth = await data.json();

  if (data.ok) {
    setAuthCookies(auth);
  }

  return NextResponse.json(auth, { status: data.status });
}
