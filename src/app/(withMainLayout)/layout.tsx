/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
// import NavigationBar from "@/src/components/Navabr/Navbar";
import NavigationBar from "@/src/components/Navabr/Navbar";
import Footer from "@/src/components/shared/Footer";
import NavBar from "@/src/components/shared/Navbar";
import { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;