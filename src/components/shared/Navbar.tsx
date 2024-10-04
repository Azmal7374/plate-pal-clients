/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Cog } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@nextui-org/react"; // Button component from @nextui-org
import { useUser } from "@/src/utlis/useruser";
import React from "react";

export default function NavBar() {
  const { user, loading } = useUser(); 
  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Recipe", href: "/recipe" },
  ];

  return (
    <Navbar maxWidth="2xl"   onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link className="flex" href="/">
          <Cog />
          <p className="font-bold text-inherit px-4">Plate Pal</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/cars">Recipe</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#">Customers</Link>
        </NavbarItem>
        <NavbarItem>
          {!loading && user ? (
            <Link href={routeMap[user?.role]}>Dashboard</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
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
