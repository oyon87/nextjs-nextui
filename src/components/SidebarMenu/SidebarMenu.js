"use client";

import React from "react";
import { HomeIcon } from "@/icons/HomeIcon";
import { ListIcon } from "@/icons/ListIcon";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/react";
import { listMenu } from "@/data/data";

export default function SidebarMenu() {
  const pathname = usePathname();

  const renderIcon = React.useCallback((icon) => {
    switch (icon) {
      case "home":
        return <HomeIcon fill="grey" />;
      case "list":
        return <ListIcon fill="grey" />;
      default:
        return icon;
    }
  });

  return (
    <div className="bg-background/70" style={{ minHeight: "calc(100vh - 64px)" }}>
      <ul>
        {listMenu.map((list, index) => {
          return (
            <li className="px-6 py-2" key={index}>
              <Link
                href={list.path}
                className="flex items-center"
                color={`${pathname === list.path ? "warning" : "foreground"}`}
                isBlock
              >
                <span className="pr-2">{renderIcon(list.icon)}</span>
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
