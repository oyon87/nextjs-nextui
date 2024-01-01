"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function HeaderLayout({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center mb-3 justify-between">
      <h1 className="text-xl mb-3">{title}</h1>
      <button className="mr-3" onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default HeaderLayout;
