/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import Footer from "@/src/components/shared/Footer";
import NavBar from "@/src/components/shared/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div >
        <NavBar></NavBar>
        <div className="mx-auto container">{children}</div>
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </>
  );
};

export default layout;
