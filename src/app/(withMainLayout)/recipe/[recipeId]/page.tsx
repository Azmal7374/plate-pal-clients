/* eslint-disable prettier/prettier */
"use client";

import { useParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import {
  Avatar,
  Modal,
  ModalContent,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { FaCirclePlus } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUser } from "@/src/utlis/useruser";
import { useCommentRecipe, useDownvoteRecipe, useEditCommentRecipe, useGetSingleRecipe, useRateRecipe, useUpvoteRecipe } from "@/src/hooks/recipe.hook";
import { useFollowUser, useUnfollowUser } from "@/src/hooks/user.hook";
import Loading from "@/src/components/shared/Loading/Loading";



const RecipeDetails = () => {
  const params = useParams();
  const { recipeId } = params;

  const { user } = useUser();
  const { data, isLoading } = useGetSingleRecipe(recipeId as string);
  const {
    mutate: upvoteRecipe,
    isPending: isUpvotePending,
    data: upvoteRecipeData,
  } = useUpvoteRecipe();

  const {
    mutate: downvoteRecipe,
    isPending: isDownvotePending,
    data: downVoteRecipeData,
  } = useDownvoteRecipe();

  const { mutate: followUser, isPending: isFollowUserPending } =
    useFollowUser();

  const { mutate: unfollowUser, isPending: isUnfollowUserPending } =
    useUnfollowUser();

  const { mutate: rateRecipe, isPending: isRateRecipePending } =
    useRateRecipe();

  const { mutate: commentRecipe, isPending: isCommentRecipePending } =
    useCommentRecipe();

  const { mutate: editComment, isPending: isEditCommentPending } =
    useEditCommentRecipe();

  const recipe = data?.data?.result;
  const postOwner = data?.data?.postOwner;
  console.log(recipe)
  // Calculate average rating from the `rating` array
  const calculateAverageRating = (
    ratings: { id: string; rating: number }[]
  ) => {
    if (!ratings || ratings?.length === 0) return 0.0;

    const totalRating = ratings?.reduce((acc, curr) => acc + curr?.rating, 0);

    return totalRating / ratings?.length;
  };

  const averageRating = calculateAverageRating(recipe?.rating || []);

  const handleUpvote = async (id: string) => {
    upvoteRecipe(id);
  };

  const handleDownvote = async (id: string) => {
    downvoteRecipe(id);
  };

  const handleFollow = async () => {
    followUser(postOwner?._id);
  };

  const handleUnfollow = async () => {
    unfollowUser(postOwner?._id);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { register, handleSubmit } = useForm();

  // Handle rating form submission
  const onSubmit = async (data: any) => {
    const formattedData = {
      ...data,
      rating: Number(data.rating),
    };

    rateRecipe({ id: recipe?._id as string, payload: formattedData });
    onOpenChange();
  };

  // Handle Comment Submit
  const { control, handleSubmit: handleCommentSubmit, reset } = useForm();

  const onCommentSubmit = async (data: any) => {
    commentRecipe({ id: recipe?._id as string, payload: data });
    reset();
  };

  const {
    isOpen: isCommentModalOpen,
    onOpen: onCommentModalOpen,
    onOpenChange: onCommentModalOpenChange,
  } = useDisclosure();

  const [commentToEdit, setCommnetToEdit] = useState("");
  const [commentId, setCommnetId] = useState("");

  const handleOpenCommentEditModal = (id: string, comment: string) => {
    setCommnetToEdit(comment);
    setCommnetId(id);
    onCommentModalOpen();
  };

  const handleUpdateComment = async (e: FormEvent) => {
    e.preventDefault();

    editComment({
      recipeId: recipe?._id,
      commentId,
      payload: { comment: commentToEdit },
    });

    onCommentModalOpenChange();
  };

  useEffect(() => {
    if (upvoteRecipeData && !upvoteRecipeData.success) {
      toast.error(upvoteRecipeData.message);
    } else if (upvoteRecipeData && upvoteRecipeData.success) {
      toast.success("Recipe upvotted successfully!");
    }
  }, [upvoteRecipeData]);

  useEffect(() => {
    if (downVoteRecipeData && !downVoteRecipeData.success) {
      toast.error(downVoteRecipeData.message);
    } else if (downVoteRecipeData && downVoteRecipeData.success) {
      toast.success("Recipe downvotted successfully!");
    }
  }, [downVoteRecipeData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="w-[90%] mx-auto py-10 md:w-[80%]">
        {" "}
        {/* Responsive width */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
          {/* Recipe Image */}
          <div className="relative group transition-transform duration-300 hover:scale-105">
  <img
    alt={recipe?.title}
    className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-300 hover:scale-110"
    src={recipe?.image}
  />
  <div className="absolute bottom-0 left-5 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
    <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 translate-y-5 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-0">
      {recipe?.title}
    </h1>
  </div>
</div>

          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#F78014]">
                {recipe?.title}
              </h2>
              <div className="text-[#F78014] text-lg md:text-xl font-bold">
                Rating: {averageRating?.toFixed(1)}
              </div>
            </div>
            <div className="border-2 border-[#F78014] border-button mt-3 p-3 rounded-lg inline-flex justify-center items-center gap-2 md:gap-5 text-gray-900">
              <Avatar className="border-2 border-[#F78014] " src={postOwner?.profilePicture} />

              <div>
                <h1 className="text-lg md:text-xl">
                  Post Owner 
                  <span className="text-[#F78014]"> {postOwner?.name}</span>
                </h1>

                <h1 className="text-md md:text-lg">{postOwner?.email}</h1>
              </div>

              {user?.email === postOwner?.email ? (
                ""
              ) : (
                <Button
                  className={`text-sm md:text-lg bg-button font-bold text-[#F78014] ${user?.role === "admin" && "hidden"}`}
                  isDisabled={isFollowUserPending || isUnfollowUserPending}
                  isLoading={isFollowUserPending || isUnfollowUserPending}
                  startContent={<FaCirclePlus />}
                  onClick={
                    postOwner?.followers?.includes(user?._id)
                      ? handleUnfollow
                      : handleFollow
                  }
                >
                  {postOwner?.followers?.includes(user?._id)
                    ? " Unfollow"
                    : "Follow"}
                </Button>
              )}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: recipe?.content }}
              className="mt-4 text-default-700 text-md md:text-lg leading-relaxed"
            />
          </div>

          <div
            className={`pb-5 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 ${user?.role === "admin" && "hidden"}`}
          >
            <Button
              className="text-lg md:text-xl"
              color="secondary"
              isDisabled={isUpvotePending || isDownvotePending}
              isLoading={isUpvotePending}
              startContent={<BiUpvote />}
              variant="bordered"
              onClick={() => handleUpvote(recipe?._id)}
            >
              Upvote ({recipe?.upvote?.length})
            </Button>

            <Button
              className="text-lg md:text-xl"
              color="warning"
              isDisabled={isUpvotePending || isDownvotePending}
              isLoading={isDownvotePending}
              startContent={<BiDownvote />}
              variant="bordered"
              onClick={() => handleDownvote(recipe?._id)}
            >
              Downvote ({recipe?.downvote?.length})
            </Button>
          </div>

          {user?.email !== postOwner?.email && (
            <div
              className={`pb-5 flex justify-center items-center gap-3 md:gap-5 ${user?.role === "admin" && "hidden"}`}
            >
              <Button className="bg-[#F78014] text-lg font-bold text-white" onPress={onOpen}>
                Rate this Recipe
              </Button>

              <Modal
                className="p-3 bg-slate-300"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              >
                <ModalContent>
                  <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Select
                      className="max-w-xs "
                      label="How much would you rate this recipe?"
                      {...register("rating", { required: true })}
                    >
                      <SelectItem key={"1"}>1</SelectItem>
                      <SelectItem key={"1"}>1.5</SelectItem>
                      <SelectItem key={"2"}>2</SelectItem>
                      <SelectItem key={"2"}>2.5</SelectItem>
                      <SelectItem key={"3"}>3</SelectItem>
                      <SelectItem key={"3"}>3.5</SelectItem>
                      <SelectItem key={"4"}>4</SelectItem>
                      <SelectItem key={"4"}>4.5</SelectItem>
                      <SelectItem key={"5"}>5</SelectItem>
                    </Select>

                    {/* Submit button */}
                    <Button
                      isDisabled={isRateRecipePending}
                      isLoading={isRateRecipePending}
                      type="submit"
                      className="bg-[#F78014] text-white text-xl"
                    >
                      Submit
                    </Button>
                  </form>
                </ModalContent>
              </Modal>
            </div>
          )}

          <div className={`mt-10 pb-5 ${user?.role === "admin" && "hidden"} p-4 md:p-2`}>
            {recipe?.comments?.length === 0 ? (
              <div className="text-xl md:text-2xl text-center font-bold text-danger">
                There Are no comments for this post yet.
              </div>
            ) : (
              recipe?.comments?.map((comment: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-center text-default-900 p-3 rounded-lg border-2 border-[#F78014] border-button w-full md:w-[70%] mx-auto mb-5"
                >
                  <div className="flex gap-3">
                    <Avatar
                      className="flex-shrink-0 border-2 border-[#F78014]"
                      src={
                        comment?.profilePicture ||
                        "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      }
                    />
                    <div className="flex flex-col">
                      <h1 className="font-bold text- text-lg ">
                        {comment?.name || "User Not Found"}
                      </h1>
                      <h1 className="text-lg ">
                        {comment?.comment || "No comment text provided."}
                      </h1>
                    </div>
                  </div>

                  {user?._id === comment?.id && (
                    <div>
                      <Button
                        isIconOnly
                        aria-label="Edit"
                        className="bg-[#F78014] text-white text-xl"
                        onPress={() =>
                          handleOpenCommentEditModal(
                            comment?._id,
                            comment?.comment
                          )
                        }
                      >
                        <FaEdit className="text-xl" />
                      </Button>
                    </div>
                  )}
                </div>
              ))
            )}

            <div className="w-full md:w-[70%] mx-auto mt-10">
              <form
                className="flex flex-col gap-5"
                onSubmit={handleCommentSubmit(onCommentSubmit)}
              >
                <Controller
                  control={control}
                  defaultValue=""
                  name="comment"
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      required
                      label="Thoughts"
                      placeholder="Share your thoughts on this recipe!"
                      className="bg-[#F78014] "
                    />
                  )}
                />

                <Button
                  className="bg-[#F78014] text-white text-xl"
                  isDisabled={isCommentRecipePending}
                  isLoading={isCommentRecipePending}
                  type="submit"
                >
                  Comment
                </Button>
              </form>

              <Modal
                isOpen={isCommentModalOpen}
                onOpenChange={onCommentModalOpenChange}
              >
                <ModalContent>
                  <form
                    className="p-5 flex flex-col gap-5 bg-slate-300"
                    onSubmit={handleUpdateComment}
                  >
                    <Textarea
                      required
                      label="Edit Comment"
                      value={commentToEdit}
                      onChange={(e) => setCommnetToEdit(e.target.value)}
                    />

                    <Button
                       className="bg-[#F78014] text-white text-xl"
                      isDisabled={isEditCommentPending}
                      isLoading={isEditCommentPending}
                      type="submit"
                    >
                      Edit Comment
                    </Button>
                  </form>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;