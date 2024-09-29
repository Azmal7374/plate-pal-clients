import { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>This is Common Navbar</h1>
      {children}
    </div>
  );
};

export default layout;