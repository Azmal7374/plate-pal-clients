/* eslint-disable import/order */
"use client";
import React, { useState } from "react";
import { SidebarContext } from "./layout-context";
// eslint-disable-next-line import/order
// import { SidebarContext } from "./layout-context";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default DashboardLayout;