/* eslint-disable react/jsx-sort-props */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { CookingPot } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useUser } from "@/src/utlis/useruser";
import React from "react";
import { useRouter } from "next/navigation";
import NavbarDropdown from "./DropDown";
import { motion } from "framer-motion";

export default function NavBar() {
  const { user } = useUser();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Recipe", href: "/recipe" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <Navbar className="bg-slate-300" maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isMenuOpen ? 90 : 0 }} // Animate the toggle icon
        transition={{ type: "spring", stiffness: 300 }}
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </motion.div>

      <NavbarBrand>
        <Link className="flex" href="/">
          <CookingPot />
          <p className="font-bold text-inherit px-4 text-xl md:text-2xl">Plate Pal</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <motion.div
              whileHover={{ scale: 1.05, color: "#F78014" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                className={`font-bold text-lg px-2 py-1 transition duration-300 ease-in-out hover:border-b-2 hover:border-[#F78014]`}
                href={item.href}
              >
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {user?.email ? (
          <NavbarItem className="sm:flex gap-2">
            <NavbarDropdown />
          </NavbarItem>
        ) : (
          <NavbarItem className="sm:flex gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }} // Slight scale on hover for login button
              whileTap={{ scale: 0.95 }} // Tap effect for button click
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button
                className="bg-[#F78014] text-white font-bold rounded-md text-xl"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            </motion.div>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }} // Start off hidden
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }} // Animate in/out on menu open/close
            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay
          >
            <NavbarMenuItem>
              <Link
                className={`font-bold text-lg px-2 py-1 transition duration-300 ease-in-out hover:border-b-2 hover:border-[#F78014]`}
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          </motion.div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
