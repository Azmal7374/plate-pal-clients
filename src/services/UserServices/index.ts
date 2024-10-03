/* eslint-disable prettier/prettier */
 
"use server"
import { axiosInstance } from "@/src/lib/AxiosInstance"


// get User info functionalties
export const getUserInfo =async(id:string) =>{
  try {
    const res = await  axiosInstance.get(`/user/get-single-user/${id}`);

    return res.data.data;

  }catch(error){
    throw new Error("Failed to get user info")
  }
}

// Update user Info functionalities
export const updateUserInfo = async(id:string, payload:any) =>{
  try{
    const res = await axiosInstance.put(`user/update-user-info/${id}`, payload)

    return res.data.data;
  }catch(error:any){
    throw new Error(error.response.data.message);
  }
}


//create follow user functionalities
export const followUser = async(id:string) =>{
 try{
   const res = await axiosInstance.post(`/user/follow-user/${id}`);

   return res.data.data;
 }catch(error:any){
    throw new Error(error.response.data.message);
 }
}

//create unfollow user functionalities
export const unfollowUser = async (id: string) => {
    try {
      const res = await axiosInstance.post(`/user/unfollow-user/${id}`);
  
      return res.data.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
}


// Get  user information
export const getUserInformation = async (id: string) => {
    try {
      const res = await axiosInstance.get(`/user/get-user-info/${id}`);
  
      return res.data.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

 
// Create becomePremiumMember functionalities
export const becomePremiumMember = async (payload: any) => {
    try {
      const res = await axiosInstance.post(
        `/user/become-premium-member`,
        payload
      );
  
      return res.data.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

//Get All user  functionalities
export const getAllUser = async () => {
    try {
      const res = await axiosInstance.get(`/user/get-all-user`);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  
// Create  Block functionalities
export const blockUser = async (id: string) => {
    try {
      const res = await axiosInstance.post(`/user/block-user/${id}`);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

// Create UnBlockUser functionalities
  export const unblockUser = async (id: string) => {
    try {
      const res = await axiosInstance.post(`/user/unblock-user/${id}`);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

// Create User functionalities

  export const deleteUser = async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/user/delete-user/${id}`);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

// get Admin functionalities

  export const getAllAdmin = async () => {
    try {
      const res = await axiosInstance.get(`/user/get-all-admin`);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

// Create Admin functionalities
  export const createAdmin = async (payload: any) => {
    try {
      const res = await axiosInstance.post(`/user/create-admin`, payload);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

// Create Update Admin functionalities

  export const updateAdmin = async (id: string, payload: any) => {
    try {
      const res = await axiosInstance.post(`/user/update-admin/${id}`, payload);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

// Delte Admin functionalities
export const deleteAdmin = async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/user/delete-admin/${id}`);
  
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };