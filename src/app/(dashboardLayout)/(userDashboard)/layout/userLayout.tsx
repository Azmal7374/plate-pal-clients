/* eslint-disable react/self-closing-comp */
"use client";

import { NavbarWrapper } from "../../components/dashboardNavbar/dashboardNavbar";
import { SidebarWrapper } from "../../components/sidebar/sidebar.styles";



interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>

      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};