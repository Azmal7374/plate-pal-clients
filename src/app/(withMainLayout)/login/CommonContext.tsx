/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import Link from "next/link";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/utlis/useruser";
import { useUserLogin } from "@/src/hooks/auth.hook";


const CommonContentLoginPage = () => {
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();

  const {
    mutate: handleUserLogin,
    isPending,
    data: userLoginResponse,
  } = useUserLogin();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (userLoginResponse && !userLoginResponse.success) {
      toast.error(userLoginResponse.message);
    } else if (userLoginResponse && userLoginResponse.success) {
      router.push("/");
      toast.success("Logged in successfully");
    }
  }, [userLoginResponse]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  return (
    <div>
      <div className="">
        <div className="py-16">
          <div className="flex  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <img
                alt=""
                src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
              />
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="w-full p-8 lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-default-700 text-center">
                Plate Pal
              </h2>
              <p className="text-xl text-default-600 text-center">
              Log in to curate and manage your favorite recipes!
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <label className="block text-default-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })} // Register with validation
                    className=" text-default-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })} 
                    className=" text-defult-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                  />
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-[#F78014] hover:bg-button-dark text-white font-bold py-2 px-4 w-full rounded text-lg"
                    isDisabled={isPending}
                    isLoading={isPending}
                    type="submit"
                  >
                    {isPending ? "Logging in..." : "Login"}
                  </Button>
                </div>
              </form>

              <div className="mt-4">
                <p className="text-xl text-default-900">
                 New around here?{" "}
                  <Link
                    className="hover:underline text-[#F78014]"
                    href="/register"
                  >
                    Create an account and join the culinary community!
                  </Link>
                </p>

                <p className="text-lg text-default-900 mt-3">
                Lost your password?{" "}
                  <Link
                    className="hover:underline text-[#F78014]"
                    href="/forgot-password"
                  >
                   No worries—reset it effortlessly here!
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonContentLoginPage;