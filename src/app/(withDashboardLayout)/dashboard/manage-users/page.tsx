/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import Swal from "sweetalert2";
import { useBlockUser, useDeleteUser, useGetAllUser, useUnblockUser } from "@/src/hooks/user.hook";
import Loading from "@/src/components/shared/Loading/Loading";


const ManageUsers = () => {
  const { data: userInfo, isLoading } = useGetAllUser();
  console.log(userInfo?.data)
  const { mutate: unblockUser } = useUnblockUser();
  const { mutate: blockUser } = useBlockUser();
  const { mutate: deleteUser } = useDeleteUser();

  const [loadingBlockStatus, setLoadingBlockStatus] = useState<string | null>(
    null
  );

  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const handleAction = async (id: string, status: boolean) => {
    setLoadingBlockStatus(id);

    if (status === true) {
      Swal.fire({
        title: "Are you sure you want to lift the block on this user?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F78014",
        cancelButtonColor: "#F23F7F",
        confirmButtonText: "Yes, restore access for the user!",
      }).then((result) => {
        if (result.isConfirmed) {
          unblockUser(id, {
            onSuccess: () => setLoadingBlockStatus(null),
            onError: () => setLoadingBlockStatus(null),
          });
        } else {
          setLoadingBlockStatus(null);
        }
      });
    } else if (status === false) {
      Swal.fire({
        title: "Are you sure you want to block this user? They won’t be able to engage anymore.",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F78014",
        cancelButtonColor: "#F23F7F",
        confirmButtonText: "es, block them! Restrict their access now.",
      }).then((result) => {
        if (result.isConfirmed) {
          blockUser(id, {
            onSuccess: () => setLoadingBlockStatus(null),
            onError: () => setLoadingBlockStatus(null),
          });
        } else {
          setLoadingBlockStatus(null);
        }
      });
    }
  };

  const handleDeleteRecipe = async (id: string) => {
    setUserToDelete(id);
    Swal.fire({
      title: "Are you certain you want to remove this user from the community?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F78014",
      cancelButtonColor: "#F23F7F",
      confirmButtonText: "Yes, permanently remove this user!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id, {
          onSuccess: () => setUserToDelete(null),
          onError: () => setUserToDelete(null),
        });
      } else {
        setUserToDelete(null);
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Manage <span className="text-[#CDC2A5]">Users</span>
      </h1>

      <div className="hidden md:block">
        {" "}
        <table className="min-w-full bg-slate-100 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="text-xl bg-slate-200 text-[#F78014]">
              <th className="text-left p-4">Profile Picture</th>
              <th className="text-left p-4">User Name</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {userInfo?.data?.map((user: any, index: number) => (
              <tr
                key={index}
                className="border-b border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <td className="p-4">
                  <img
                    alt={user?.name}
                   className=" border-2 border-[#F78014] w-16 h-16 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3"
                    src={user?.profilePicture}
                  />
                </td>
                <td className="p-4 text-lg font-bold text-default-900">
                  {user?.name}
                </td>
                <td className="p-4">
                  <span
                    className={`py-1 px-3 rounded-full text-sm ${
                      user?.isBlocked === true
                       ? "bg-slate-200 text-[#F78014]"
                      : "bg-danger text-white"
                    }`}
                  >
                    {user?.isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>
                <td className="p-4">
                  <Button
                    className="bg-[#F78014] text-white  ml-4 font-bold text-lg"
                    isDisabled={loadingBlockStatus === user?._id}
                    isLoading={loadingBlockStatus === user?._id}
                    onClick={() => handleAction(user?._id, user?.isBlocked)}
                  >
                    {user?.isBlocked ? "Unblock" : "Block"}
                  </Button>

                  <Button
                    className="bg-danger text-white  ml-4 font-bold text-lg"
                    isDisabled={userToDelete === user?._id}
                    isLoading={userToDelete === user?._id}
                    onClick={() => handleDeleteRecipe(user?._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View: Stack Layout */}
      <div className="block md:hidden">
        {" "}
        {/* Show on small screens */}
        {userInfo?.data?.map((user: any, index: number) => (
          <div
            key={index}
            className="bg-slate-200 shadow-md rounded-lg p-4 mb-4 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <img
                alt={user?.name}
               className="border-2 border-[#F78014] w-16 h-16 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3"
                src={user?.profilePicture}
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold text-gray-900">
                  {user?.name}
                </h2>
                <span
                  className={`py-1 px-2 rounded-full text-sm ${
                    user?.isBlocked
                       ? "bg-white text-[#F78014]"
                      : "bg-danger text-white"
                  }`}
                >
                  {user?.isBlocked ? "Blocked" : "Active"}
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                className="bg-[#F78014] text-white  font-bold text-lg"
                isDisabled={loadingBlockStatus === user?._id}
                isLoading={loadingBlockStatus === user?._id}
                onClick={() => handleAction(user?._id, user?.isBlocked)}
              >
                {user?.isBlocked ? "Unblock" : "Block"}
              </Button>
              <Button
                className="bg-danger text-white font-bold text-lg"
                isDisabled={userToDelete === user?._id}
                isLoading={userToDelete === user?._id}
                onClick={() => handleDeleteRecipe(user?._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;