/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import DashboardNavbar from "@/src/components/shared/DashbaordNavbar";
import NavbarDropdown from "@/src/components/shared/DropDown";
import Footer from "@/src/components/shared/Footer";
import React, { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
     <DashboardNavbar/>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;