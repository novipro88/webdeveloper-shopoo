"use client";

import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewMarket() {
  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const categories = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
    { id: 4, title: "Category 4" },
    { id: 5, title: "Category 5" },
    { id: 6, title: "Category 6" },
  ];

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  // Watch it to be change off and on
  const isActive = watch("isActive");

  async function onSubmit(data) {
    {
      /* 
      -id => auto()
      -title
      -slug => auto()
      -logo
      -description
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setLogoUrl("");
  }

  return (
    <div>
      <FormHeader title="New Market" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            option={categories}
            multiple={true}
          />
          {/* Configure endpoint in the core.js */}
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUploader"
            label="Market Logo"
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Market Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Market"
          loadingButtonTitle="Creating market, please wait.."
        />
      </form>
    </div>
  );
}
