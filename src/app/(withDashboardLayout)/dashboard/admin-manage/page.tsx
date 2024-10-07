/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDeleteAdmin, useGetAllAdmin, useUpdateAdmin } from "@/src/hooks/user.hook";
import { useUser } from "@/src/utlis/useruser";
import Loading from "@/src/components/shared/Loading/Loading";
import CreateAdmin from "@/src/components/shared/CreateAdmin/CreateAdmin";


const ManageAdmins = () => {
  const { data: adminData, isLoading } = useGetAllAdmin();

  const { mutate: updateAdmin, isPending } = useUpdateAdmin();

  const { mutate: deleteAdmin } = useDeleteAdmin();

  const { user } = useUser();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [adminInfo, setAdminInfo] = useState<any>("");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: adminInfo?.name,
      profilePicture: adminInfo?.profilePicture,
      bio: adminInfo?.bio,
    },
  });

  const handleOpenUpdateModal = (adminData: any) => {
    setAdminInfo(adminData);
    onOpen();
    reset({
      name: adminData?.name,
      profilePicture: adminData?.profilePicture,
      bio: adminData?.bio,
    });
  };

  // Function to handle form submission
  const onSubmit = async (formData: any) => {
    updateAdmin(
      { id: adminInfo?._id, payload: formData },

      {
        onSuccess: () => {
          onOpenChange();
        },
      }
    );
  };

  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const handleDeleteAdmin = (id: string) => {
    setUserToDelete(id);
    Swal.fire({
      title: "Are you certain you want to remove this user from the community?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F78014",
      cancelButtonColor: "#F23F7F",
      confirmButtonText: "Yes, permanently remove this admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAdmin(id, {
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
    <div>
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-3xl font-bold mb-6 t[#F78014]ext-gray-900 text-center">
          Manage <span className="text-[#CDC2A5]">Admins</span>
        </h1>

        <CreateAdmin />

        <div className="hidden md:block">
          {" "}
          <table className="min-w-full bg-slate-100  shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-200 text-xl text-[#F78014]">
                <th className="text-left p-4">Profile Picture</th>
                <th className="text-left p-4">Admin Name</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {adminData?.map((admin: any, index: number) => (
                <tr
                  key={index}
                  className="border-b border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <td className="p-4">
                    <img
                      alt={admin?.name}
                       className="border-2 border-[#F78014] p-1 w-16 h-16 object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3"
                      src={admin?.profilePicture}
                    />
                  </td>
                  <td className="p-4 text-lg font-bold text-default-900">
                    {admin?.name}
                  </td>

                  {user?._id === admin?._id ? (
                    ""
                  ) : (
                    <td className="p-4">
                      <Button
                        className="text-lg  text-white font-bold bg-[#F78014] mr-5"
                        onClick={() => handleOpenUpdateModal(admin)}
                      >
                        Update
                      </Button>

                      <Button
                        className="text-lg font-bold bg-danger text-white"
                        isDisabled={userToDelete === admin?._id}
                        isLoading={userToDelete === admin?._id}
                        onClick={() => handleDeleteAdmin(admin?._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Stack Layout */}
        <div className="block md:hidden">
          {" "}
          {/* Show on small screens */}
          {adminData?.map((admin: any, index: number) => (
            <div
              key={index}
              className="bg-slate-200 shadow-md rounded-lg p-4 mb-4 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  alt={admin?.name}
                  className="border-2 border-[#F78014] p-1 w-16 h-16 object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3"
                  src={admin?.profilePicture}
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-default-900">
                    {admin?.name}
                  </h2>
                </div>
              </div>
              <div className="flex justify-between">
                {user?._id === admin?._id ? null : (
                  <>
                    <Button
                      className="bg-[#F78014] text-white font-bold text-lg"
                      onClick={() => handleOpenUpdateModal(admin)}
                    >
                      Update
                    </Button>

                    <Button
                      className="bg-danger text-white font-bold text-lg"
                      isDisabled={userToDelete === admin?._id}
                      isLoading={userToDelete === admin?._id}
                      onClick={() => handleDeleteAdmin(admin?._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            <div className="p-4 text-lg font-bold text-[#F78014]">Update Profile Info</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-4 pb-4 flex flex-col gap-3">
                <Input label="Name" type="text" {...register("name")} />

                <Input
                  label="Profile Picture"
                  type="text"
                  {...register("profilePicture")}
                />

                <Input label="Bio" type="text" {...register("bio")} />
              </div>

              <div className="flex justify-center pb-4 p-4">
                <Button
                  className="bg-[#F78014] text-xl font-bold text-white w-full"
                  isDisabled={isPending}
                  isLoading={isPending}
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ManageAdmins; 