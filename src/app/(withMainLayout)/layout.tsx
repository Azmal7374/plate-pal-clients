import NavigationBar from "@/src/components/Navabr/Navbar";
import { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default layout;