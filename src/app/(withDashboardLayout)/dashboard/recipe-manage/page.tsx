/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import Swal from "sweetalert2";
import { useDeleteRecipeFromAdmin, useGetAllRecipiesForAdmin, usePublishRecipe, useUnpublishRecipe } from "@/src/hooks/recipe.hook";
import Loading from "@/src/components/shared/Loading/Loading";



const ManageRecipies = () => {
  const { data: recepiesData, isLoading } = useGetAllRecipiesForAdmin();
  const { mutate: unpublishRecipe } = useUnpublishRecipe();
  const { mutate: publishRecipe } = usePublishRecipe();
  const { mutate: deleteRecipe } = useDeleteRecipeFromAdmin();

  const [loadingRecipeId, setLoadingRecipeId] = useState<string | null>(null);
  const [recipeToDelete, setRecipeToDelete] = useState<string | null>(null);

  const handleAction = async (id: string, status: boolean) => {
    setLoadingRecipeId(id); 

    if (status === true) {
      Swal.fire({
        title: "Are you sure you want to take this recipe off the spotlight?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F78014",
        cancelButtonColor: "#F23F7F",
        confirmButtonText: "Yes, hide it from the spotlight!",
      }).then((result) => {
        if (result.isConfirmed) {
          unpublishRecipe(id, {
            onSuccess: () => setLoadingRecipeId(null),
            onError: () => setLoadingRecipeId(null), 
          });
        } else {
          setLoadingRecipeId(null); 
        }
      });
    } else if (status === false) {
      Swal.fire({
        title: "Ready to share your masterpiece with the world?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F78014",
        cancelButtonColor: "#F23F7F",
        confirmButtonText: "Yes, publish it!",
      }).then((result) => {
        if (result.isConfirmed) {
          publishRecipe(id, {
            onSuccess: () => setLoadingRecipeId(null),
            onError: () => setLoadingRecipeId(null),
          });
        } else {
          setLoadingRecipeId(null);
        }
      });
    }
  };

  const handleDeleteRecipe = async (id: string) => {
    setRecipeToDelete(id);
    Swal.fire({
      title: "Wait! Are you sure you want to remove this recipe from your collection?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F78014",
      cancelButtonColor: "#F23F7F",
      confirmButtonText: "Yes, go ahead! Let’s clear it out!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id, {
          onSuccess: () => setRecipeToDelete(null),
          onError: () => setRecipeToDelete(null),
        });
      } else {
        setRecipeToDelete(null);
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    
    <div className="container mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Manage <span className="text-[#CDC2A5]">Recipes</span>
      </h1>

      <div className="hidden md:block">
      
      
        <table className="min-w-full bg-slate-100 shadow-md rounded-lg overflow-hidden text-xl">
          <thead>
            <tr className="bg-slate-200 text-[#F78014]">
              <th className="text-left p-4">Image</th>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {recepiesData?.map((recipe: any, index: number) => (
              <tr
                key={index}
                className="border-b border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <td className="p-4">
                <img
  alt={recipe?.title}
  className="w-16 h-16 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3"
  src={recipe?.image}
/>
                </td>
                <td className="p-4 text-lg font-bold text-gray-900">
                  {recipe?.title}
                </td>
                <td className="p-4">
                  <span
                    className={`py-1 px-3 rounded-full text-sm ${
                      recipe?.isPublished === true
                       ? "bg-slate-200 text-[#F78014]"
                      : "bg-danger text-white"
                    }`}
                  >
                    {recipe?.isPublished ? "Published" : "Unpublished"}
                  </span>
                </td>
                <td className="p-4">
                  <Button
                    className="bg-[#F78014] text-white ml-4 font-bold text-lg"
                    isDisabled={loadingRecipeId === recipe?._id}
                    isLoading={loadingRecipeId === recipe?._id}
                    onClick={() =>
                      handleAction(recipe?._id, recipe?.isPublished)
                    }
                  >
                    {recipe?.isPublished ? "Unpublish" : "Publish"}
                  </Button>

                  <Button
                    className="bg-danger text-white ml-4 font-bold text-lg"
                    isDisabled={recipeToDelete === recipe?._id}
                    isLoading={recipeToDelete === recipe?._id}
                    onClick={() => handleDeleteRecipe(recipe?._id)}
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
        {recepiesData?.map((recipe: any, index: number) => (
          <div
            key={index}
            className="bg-slate-200 shadow-md rounded-lg p-4 mb-4 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
            <img
  alt={recipe?.title}
  className="w-16 h-16 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3"
  src={recipe?.image}
/>

              <div className="ml-4">
                <h2 className="text-lg font-bold text-default-900">
                  {recipe?.title}
                </h2>
                <span
                  className={`py-1 px-2 rounded-full text-sm ${
                    recipe?.isPublished
                      ? "bg-white text-[#F78014]"
                      : "bg-danger text-white"
                  }`}
                >
                  {recipe?.isPublished ? "Published" : "Unpublished"}
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                className="bg-[#F78014] text-white font-bold text-lg"
                isDisabled={loadingRecipeId === recipe?._id}
                isLoading={loadingRecipeId === recipe?._id}
                onClick={() => handleAction(recipe?._id, recipe?.isPublished)}
              >
                {recipe?.isPublished ? "Unpublish" : "Publish"}
              </Button>
              <Button
                className="bg-danger text-white font-bold text-lg"
                isDisabled={recipeToDelete === recipe?._id}
                isLoading={recipeToDelete === recipe?._id}
                onClick={() => handleDeleteRecipe(recipe?._id)}
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

export default ManageRecipies;