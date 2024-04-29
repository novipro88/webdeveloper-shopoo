"use client";

import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayItemsInput from "../FormInputs/ArrayItemsInput";

export default function NewFarmerForm({ user }) {
  const [loading, setLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [products, setProducts] = useState([]);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/farmers");
  }
  // Watch it to be change off and on
  const isActive = watch("isActive");

  async function onSubmit(data) {
    const code = generateUserCode("SEF", data.name);
    data.code = code;
    data.userId = user.id;
    data.products = products;
    data.profileImageUrl = profileImageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/farmers",
      data,
      "Farmer Profile",
      reset,
      redirect
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Farmer's Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Email"
          name="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Phone"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Contact's Person (optional)"
          name="contactPerson"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Farmer's Address (optional)"
          name="physicalAddress"
          register={register}
          errors={errors}
          isRequired={false}
        />
        {/* Accres */}
        <TextInput
          label="What is the Size of Your land in Accres"
          name="landSize"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What is Your main crop that You cultivate"
          name="mainCrop"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ArrayItemsInput
          items={products}
          setItems={setProducts}
          itemTitle="Product"
        />
        {/* Configure endpoint in the core.js */}
        <ImageInput
          imageUrl={profileImageUrl}
          setImageUrl={setProfileImageUrl}
          endpoint="farmerProfileUploader"
          label="Farmer Profile Image"
        />
        <TextareaInput
          label="Farmer's Payment Terms (optional)"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextareaInput
          label="Farmer's Notes (optional)"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <ToggleInput
          label="Farmer Status"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle="Create Farmer"
        loadingButtonTitle="Creating farmer, please wait.."
      />
    </form>
  );
}
