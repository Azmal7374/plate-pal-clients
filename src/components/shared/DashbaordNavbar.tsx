/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import NavbarDropdown from "./DropDown";

const DashboardNavbar = () => {
  return (
    <Navbar isBordered className="bg-slate-400">
     
      <NavbarContent>
        
        <NavbarDropdown /> {/* User Dropdown */}
      </NavbarContent>

      <NavbarBrand>
        <h1 className="text-white text-lg font-bold">Recipe Sharing Community</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default DashboardNavbar;