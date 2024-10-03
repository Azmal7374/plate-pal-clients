/* eslint-disable prettier/prettier */
import { axiosInstance } from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async(userData: FieldValues) =>{
    try{
    const { data } = await axiosInstance.post("/user/create-user", userData);
      return data
    }catch(error:any){
        throw new Error(error.response.data.message);
    }
}