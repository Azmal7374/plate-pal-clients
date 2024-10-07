/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { toast } from "sonner";
import { useCreateAdmin } from "@/src/hooks/user.hook";


const CreateAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const { mutate: createAdmin, isPending, data } = useCreateAdmin();

  useEffect(() => {
    if (data && !data.success) {
      toast.error(data.message);
    } else if (data && data.success) {
      toast.success("Admin created successfully!");
    }
  }, [data]);

  const onSubmit = async (data: any) => {
    if (!data.profilePicture) {
      data.profilePicture = "https://i.ibb.co/HN9NtYY/user.png";
    }

    createAdmin(data);

    reset();
  };

  return (
    <div className="flex items-center justify-center p-6 mb-5">
      <div className="w-full max-w-md bg-slate-100 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#F78014] text-center mb-6">
          Create Admin
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-default-700 font-semibold mb-2">
              Name
            </label>
            <input
              required
              className="w-full  px-4 py-2 border rounded-lg text-default-900 outline-none"
              type="text"
              {...register("name")}
            />
          </div>

          <div>
            <label className="block text-default-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              required
              className="w-full   px-4 py-2 border rounded-lg text-default-900 outline-none"
              type="email"
              {...register("email")}
            />
          </div>

          <div>
            <label className="block text-default-700 font-semibold mb-2">
              Password
            </label>
            <input
              required
              className="w-full   px-4 py-2 border rounded-lg text-default-900 outline-none"
              type="password"
              {...register("password")}
            />
          </div>

          <div>
            <label className="block text-default-700 font-semibold mb-2">
              Profile Picture 
            </label>
            <input
              className="w-full  px-4 py-2 border rounded-lg text-bg-gray-300-900 outline-none"
              type="text"
              {...register("profilePicture")}
            />
          </div>

          <Button
            className="w-full bg-[#F78014] text-white font-bold text-xl py-2 px-4 rounded-lg transition duration-300"
            isDisabled={isPending}
            isLoading={isPending}
            type="submit"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;