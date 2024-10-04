/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form";
import { changePassword, loginUser, registerUser } from "../services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";




export const useUserRegistration = () =>{
    return useMutation<any, Error, FieldValues>({
        mutationKey:["USER_REGISTRATION"],
        mutationFn:async(userData)=>await registerUser(userData),
        onSuccess:()=>{
            toast.success("User Successufully Registration");
        },
        onError:(error)=>{
            toast.error(error.message);
        }
    })
}


export const useUserLogin=() => {
    const router = useRouter()

    return useMutation<any,Error, FieldValues>({
       mutationKey:["USER_LOGIN"],
       mutationFn:async(userData) => await loginUser(userData),
       onSuccess:()=>{
        toast.success("User Successfully Logged in!");
        router.push('/')
       },
       onError:(error)=>{
         toast.error(error.message);
       }
    })
}


export const useChangePassword = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["CHANGE_PASSWORD"],
      mutationFn: async (payload) => await changePassword(payload),
      onSuccess: () => {
        toast.success("Password changed successfully.");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };