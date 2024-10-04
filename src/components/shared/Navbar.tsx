/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Cog } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@nextui-org/react";
import { useUser } from "@/src/utlis/useruser";
import React from "react";
import { useRouter } from "next/navigation";
import NavbarDropdown from "../Navabr/NavbarDropDown";

export default function NavBar() {
  const { user } = useUser();
  const router = useRouter();


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Recipe", href: "/recipe" },
    { name: "About US", href: "/about" },
    { name: "Contact US", href: "/contact" },
  ];


  return (
    <Navbar maxWidth="2xl"   onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
aria-label={isMenuOpen ? "Close menu" : "Open menu"}
className="sm:hidden"
/>
      <NavbarBrand>
        <Link className="flex" href="/">
          <Cog />
          <p className="font-bold text-inherit px-4">Plate Pal</p>
        </Link>
      </NavbarBrand>

  

<NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              // className={`text-gray-800 font-bold text-lg px-2 py-1 hover:bg-[#FEFAE0] rounded-lg transition duration-300 ease-in-out`}
              color="foreground"
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {user?.email ? (
          <NavbarItem className=" sm:flex gap-2">
            <NavbarDropdown />
          </NavbarItem>
        ) : (
          <NavbarItem className=" sm:flex gap-2">
            <Button
              className="bg-[#FEFAE0] text-lg text-gray-800 font-bold"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link className="w-full" href={item.href}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>


  );
}
