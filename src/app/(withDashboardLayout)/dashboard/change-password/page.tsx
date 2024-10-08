"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/utlis/useruser";
import { useChangePassword } from "@/src/hooks/auth.hook";

const ChangePassword = () => {
  const { user, setIsLoading } = useUser();

  const router = useRouter();

  const { mutate: changePassword, isPending, data } = useChangePassword();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (data && !data.success) {
      toast.error(data.message);
    } else if (data && data.success) {
      toast.success("Password changed successfully");
      logout();
      setIsLoading(true);
      router.push("/login");
    }
  }, [data]);

  const onSubmit = async (data: any) => {
    const payload = {
      email: user?.email,
      password: data.password,
      newPassword: data.newPassword,
    };

    changePassword(payload);
  };

  return (
    <div className="  min-h-screen flex items-center justify-center py-12">
      <div className="p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-default-700 text-center mb-6">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-default-700 font-bold mb-2 text-lg"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              readOnly
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  hover:cursor-not-allowed font-bold text-lg`}
              id="email"
              type="email"
              value={user?.email}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-default-700 font-bold mb-2 text-lg"
              htmlFor="currentPassword"
            >
              Current Password
            </label>
            <input
              {...register("password")}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  font-bold text-lg`}
              id="password"
              type="password"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-default-700 font-bold mb-2 text-lg"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              {...register("newPassword")}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  font-bold text-lg`}
              id="newPassword"
              type="password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <Button
              className="bg-[#F78014] w-full hover:bg-button-dark text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              isDisabled={isPending}
              isLoading={isPending}
              type="submit"
            >
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;