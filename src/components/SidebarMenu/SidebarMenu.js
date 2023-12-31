"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
// import { Link } from "@nextui-org/react";
import Link from "next/link";
import { listMenu } from "@/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars, faHouse, faList, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { SCREEN } from "@/constant/deault";

export default function SidebarMenu() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const checkScreen = () => {
    if (window.innerWidth >= SCREEN.TABLET) {
      setIsMobile(false);
      setIsMobileOpen(true);
    } else {
      setIsMobile(true);
      setIsMobileOpen(false);
      setIsDesktopOpen(true);
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "home":
        return <FontAwesomeIcon icon={faHouse} />;
      case "list":
        return <FontAwesomeIcon icon={faList} />;
      default:
        return icon;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      checkScreen();
    });
    checkScreen();
  }, []);

  return (
    <div className={"bg-background/70 md:min-h-full " + (isDesktopOpen ? "md:w-52" : "md:w-fit")}>
      <div className="h-10 md:h-16 flex items-center justify-end pr-4">
        {isMobile ? (
          <div className="cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
          </div>
        ) : (
          <div
            className="cursor-pointer p-2 hover:text-amber-500 hover:transition-all"
            onClick={() => setIsDesktopOpen(!isDesktopOpen)}
          >
            {isDesktopOpen ? <FontAwesomeIcon icon={faAnglesLeft} /> : <FontAwesomeIcon icon={faAnglesRight} />}
          </div>
        )}
      </div>
      <ul className={"mt-1 " + (isMobileOpen ? "h-fit" : "h-0")}>
        {listMenu.map((list, index) => {
          return (
            <li className={"px-4 py-2 " + (isMobileOpen ? "" : "hidden")} key={index}>
              <Link
                href={list.path}
                className="flex items-center hover:text-amber-500 hover:transition-all"
                // color={`${pathname === list.path ? "warning" : "foreground"}`}
                // isBlock={true}
                // onClick={() => router.push(list.path)}
              >
                <span>{renderIcon(list.icon)}</span>
                <span className={"pl-2 " + (isDesktopOpen ? "" : "hidden")}>{list.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
