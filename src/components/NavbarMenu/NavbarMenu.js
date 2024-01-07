"use client";

import { useLoginContext } from "@/contexts/login-context";
import { logout } from "@/services/auth/auth";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  User,
} from "@nextui-org/react";
import { useEffect } from "react";

export default function NavbarMenu() {
  const router = useRouter();
  const { login } = useLoginContext();

  const handleLogout = () => {
    try {
      logout();
    } finally {
      router.push("/login");
    }
  };

  useEffect(() => {
    // console.log("REDNDER");
  }, []);

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <p className="font-bold text-inherit">YON STORE</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <User
              name={login.email}
              description={<span className="text-lime-200">{login.username}</span>}
              avatarProps={{
                src: login.image,
              }}
              className="cursor-pointer"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2" textValue="Full Name" isDisabled>
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold" key="name">
                {login.firstName + " " + login.lastName}
              </p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
