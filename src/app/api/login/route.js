import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const AUTH_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_LOGIN_PATH;
  const { userName, password } = await request.json();

  const data = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName,
      password: password,
      // expiresInMins: 60, // optional
    }),
  }).then((res) => res);

  const auth = await data.json();

  if (data.ok) {
    cookies().set("auth", JSON.stringify(auth));
  }

  return NextResponse.json(auth, { status: data.status });
}
