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
      <p className="text-xl font-bold mt-5 mb-10">Enter your parcel details</p>
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
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 mt-5">
          <fieldset className="fieldset flex-1">
            <label className="label text-black">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              className="input w-full"
              placeholder="Parcel Name"
            />
            {errors.parcelName?.type === "required" && (
              <p className="text-red-500">Parcel Name is required</p>
            )}
          </fieldset>

          <fieldset className="fieldset flex-1">
            <label className="label text-black">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcelWeight", { required: true })}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
            {errors.parcelWeight?.type === "required" && (
              <p className="text-red-500">Parcel Weight is required</p>
            )}
          </fieldset>
        </div>
        <div className="mt-7 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-lg font-bold">Sender Details</h3>
            <fieldset className="fieldset mt-2">
              <label className="label text-black">Sender Name</label>
              <input
                type="text"
                {...register("senderName", { required: true })}
                className="input w-full"
                placeholder="Sender Name"
              />
              {errors.senderName?.type === "required" && (
                <p className="text-red-500">Sender Name is required</p>
              )}

              <label className="label text-black mt-2">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress", { required: true })}
                className="input w-full"
                placeholder="Sender Address"
              />
              {errors.senderAddress?.type === "required" && (
                <p className="text-red-500">Sender Address is required</p>
              )}
              
              <label className="label text-black mt-2">Sender Phone No</label>
              <input
                type="text"
                {...register("senderPhone", { required: true })}
                className="input w-full"
                placeholder="Sender Phone No"
              />
              {errors.senderPhone?.type === "required" && (
                <p className="text-red-500">Sender Phone No is required</p>
              )}
            </fieldset>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Receiver Details</h3>
            <fieldset className="fieldset mt-2">
              <label className="label text-black">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName", { required: true })}
                className="input w-full"
                placeholder="Receiver Name"
              />
              {errors.receiverName?.type === "required" && (
                <p className="text-red-500">Receiver Name is required</p>
              )}

              <label className="label text-black mt-2">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress", { required: true })}
                className="input w-full"
                placeholder="Receiver Address"
              />
              {errors.receiverAddress?.type === "required" && (
                <p className="text-red-500">Receiver Address is required</p>
              )}
              
              <label className="label text-black mt-2">Receiver Phone No</label>
              <input
                type="text"
                {...register("receiverPhone", { required: true })}
                className="input w-full"
                placeholder="Receiver Phone No"
              />
              {errors.receiverPhone?.type === "required" && (
                <p className="text-red-500">Receiver Phone No is required</p>
              )}
            </fieldset>
          </div>
        </div>
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
