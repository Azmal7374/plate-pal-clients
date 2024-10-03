
import { FieldValues } from "react-hook-form";
import { axiosInstance } from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";


export const registerUser = async(userData: FieldValues) =>{
    try{
    const { data } = await axiosInstance.post("/user/create-user", userData);
      return data
    }catch(error:any){
        throw new Error(error.response.data.message);
    }
}


export const loginUser = async (userData:FieldValues) =>{
    try{
        const { data } = await axiosInstance.post("/auth/login", userData);

        if(data.success){
            cookies().set("accessToken", data.accessToken)
        }
        return data;


    }catch(error:any){
        throw new Error(error.response.data.message);
    }
}

export const logout =() =>{
    cookies().delete("accessToken")
    cookies().delete("refreshToekn")
}

export const getCurrentUser = async () =>{
    const accessToken = cookies().get("accessToken")?.value;

    let decodedToken = null;

    if(accessToken){
        decodedToken = await jwtDecode(accessToken)

        return {
            _id:decodedToken.userId,
            name:decodedToken.name,
            email:decodedToken.email,
            role:decodedToken.role,
            profilePicture:decodedToken.profilePicture
        }
    }
    return decodedToken;
}

export const getAccessToken = async () =>{
    try{
        const refreshToken = cookies().get("refreshToken")?.value;
        const res = await axiosInstance({
            url:"auth/refresh-token",
            method:"POST",
            withCredentials:true,
            headers:{
                cookies:`refreshToken=${refreshToken}`
            },
        })
    }catch(error){
        throw new Error("Failed To Get New Access Token")
    }
}


export const changePassword = async(payload:any)=>{
try{
    const {data} = await axiosInstance.post(`/auth/change-password`, payload)
    return data 
}catch(error:any){
    throw new Error("Failed To Change Password")
}
}