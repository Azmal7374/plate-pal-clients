/* eslint-disable prettier/prettier */
"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/utlis/useruser";

export default function NavbarDropdown() {
  const router = useRouter();

  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    router.push("/");
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const dropdownItems = [
    {
      label: "Home",
      action: () => handleNavigation("/"),
      condition: true,
    },
    {
      label: "Profile",
      action: () => handleNavigation("/dashboard"),
      condition: true,
    },
    {
      label: "Manage Recipes",
      action: () => handleNavigation("/dashboard/recipe-manage"),
      condition: user?.role === "admin",
    },
    {
      label: "Manage Users",
      action: () => handleNavigation("/dashboard/manage-users"),
      condition: user?.role === "admin",
    },
    {
      label: "Manage Admins",
      action: () => handleNavigation("/dashboard/admin-manage"),
      condition: user?.role === "admin",
    },
    {
      label: "Create Recipe",
      action: () => handleNavigation("/dashboard/create-recipe"),
      condition: user?.role === "user",
    },
    {
      label: "Change Password",
      action: () => handleNavigation("/dashboard/change-password"),
      condition: true,
    },
    {
      label: "Logout",
      action: handleLogout,
      condition: true,
      isDanger: true,
    },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          className="cursor-pointer border-2 border-[#F78014]"
          src={user?.profilePicture}
        />
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        {dropdownItems
          .filter((item) => item.condition)
          .map((item, index) => (
            <DropdownItem
              key={index}
              className={`${item.isDanger ? "" : ""}border-[#F78014] hover:border-b-2`}
              color={item.isDanger ? "danger" : "default"}
              onClick={item.action}
            >
              {item.label}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}