"use client";

import FormHeader from "@/components/backoffice/FormHeader";
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

export default function NewFarmer() {
  const [loading, setLoading] = useState(false);

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
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/farmers");
  }
  // Watch it to be change off and on
  const isActive = watch("isActive");

  async function onSubmit(data) {
    const code = generateUserCode("SEF", data.name);
    data.code = code;
    console.log(data);
    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset, redirect);
  }

  return (
    <div>
      <FormHeader title="New Farmer" />
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
            label="Farmer's Phone"
            name="phone"
            type="tel"
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
            label="Contact's Person (optional)"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
            isRequired={false}
          />
          <TextInput
            label="Farmer's Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            isRequired={false}
          />
          {/* Configure endpoint in the core.js */}
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="farmerProfileUploader"
            label="Farmer Profile Image"
          />
          <TextareaInput
            label="Farmer's Payment Terms"
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
    </div>
  );
}
