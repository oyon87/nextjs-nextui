import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-sky-400 text-2xl">HOMEPAGE</h1>
      <Link href={"/products"}>DASHBOARD</Link>
    </div>
  );
}
