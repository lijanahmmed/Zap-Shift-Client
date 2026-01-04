import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold">Send Parcel</h1>
      <p className="font-bold mt-5 mb-10">Enter your parcel details</p>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        <div>
          <label className="label text-black mr-5">
            <input
              type="radio"
              {...register("parcelType", { required: true })}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label text-black">
            <input
              type="radio"
              {...register("parcelType", { required: true })}
              value="non-document"
              className="radio"
            />
            Non document
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-5 mt-5">
          <fieldset className="fieldset">
            <label className="label text-black">Parcel Name</label>
            <input
              type="number"
              {...register("parcelName", { required: true })}
              className="input w-full"
              placeholder="Parcel Name"
            />
            {errors.ParcelName?.type === "required" && (
              <p className="text-red-500">Percel Name is required</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-black">Parcel Weight (KG)</label>
            <input
              type="text"
              {...register("parcelWeight", { required: true })}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
            {errors.ParcelWeight?.type === "required" && (
              <p className="text-red-500">Parcel Weight is required</p>
            )}
          </fieldset>
        </div>
        <div></div>
        <input
          type="submit"
          className="btn bg-primary font-bold px-10 mt-10"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
