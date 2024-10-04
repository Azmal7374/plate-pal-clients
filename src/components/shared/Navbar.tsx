/* eslint-disable import/order */
"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Cog } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@nextui-org/react"; // Button component from @nextui-org
import { useUser } from "@/src/utlis/useruser";

export default function NavBar() {
  const { user, loading } = useUser(); // Use custom hook to get user and loading state

  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
  };

  return (
    <Navbar maxWidth="2xl">
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

        {!loading && user ? (
          <NavbarItem>
            <Button onClick={() => console.log("Logout")} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
