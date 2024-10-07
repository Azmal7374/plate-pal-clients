/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
"use server";

import { axiosInstance } from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";




//create Recipe functionalities
export const createRecipe = async (userData:FieldValues)=>{
    try{
        const {data} = await axiosInstance.post(
            "/recipe/create-recipe",
            userData
        )
        return data;

    }catch(error:any){
        throw new Error(error.response.data.message);
    }
}

//Delete Recipe functionalities
export const deleteRecipe = async (id: string) => {
    try {
      const { data } = await axiosInstance.delete(`/recipe/delete-recipe/${id}`);
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
  
//Get All Recipe functionalities
export const getAllRecipe = async () => {
    try {
      const { data } = await axiosInstance.get(`/recipe/get-all-recipe`);
    //  console.log("Get all Recipe", data);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

//Get Single Recipe functionalities
export const getSingleRecipe = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/recipe/get-single-recipe/${id}`);
    
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
//post upvote Recipe functionalities
export const upvoteRecipe = async (id: string) => {
    try {
      const { data } = await axiosInstance.post(`/recipe/upvote-recipe/${id}`);
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

//post downupvote Recipe functionalities 
export const downvoteRecipe = async (id: string) => {
    try {
      const { data } = await axiosInstance.post(`/recipe/downvote-recipe/${id}`);
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
  
//post rateing Recipe functionalities 
export const rateRecipe = async (id: string, payload: any) => {
    try {
      const { data } = await axiosInstance.post(
        `/recipe/rate-recipe/${id}`,
        payload
      );
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };


//post  Comment Recipe functionalities 
export const commentRecipe = async (id: string, payload: any) => {
    try {
      const { data } = await axiosInstance.post(
        `/recipe/comment-recipe/${id}`,
        payload
      );
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  
//Edit  Comment Recipe functionalities 
export const editCommentRecipe = async (
    recipeId: string,
    commentId: string,
    payload: any
  ) => {
    try {
      const { data } = await axiosInstance.post(
        `/recipe/update-comment-recipe/${recipeId}/${commentId}`,
        payload
      );
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
 
// Get All Recipe For Admin functionalities   
export const getAllRecipiesForAdmin = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/recipe/get-all-recipies-for-admin`
      );
  
      return data.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };



//post publish Recipe  functionalities    
export const publishRecipe = async (recipeId: string) => {
    try {
      const { data } = await axiosInstance.post(
        `/recipe/publish-recipe/${recipeId}`
      );
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

//post unpublish Recipe  functionalities   
export const unpublishRecipe = async (recipeId: string) => {
    try {
      const { data } = await axiosInstance.post(
        `/recipe/unpublish-recipe/${recipeId}`
      );
  
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };