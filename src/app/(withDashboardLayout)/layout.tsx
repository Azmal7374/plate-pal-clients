/* eslint-disable import/order */
import NavbarDropdown from "@/src/components/shared/DropDown";
import Footer from "@/src/components/shared/Footer";
import React, { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F5EDED]">
      <NavbarDropdown />
      {children}
      <Footer />
    </div>
  );
};

export default layout;