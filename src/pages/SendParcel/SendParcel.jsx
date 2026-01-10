import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = sameDistrict ? 110 : 150;
      } else {
        const minCost = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCost = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCost + extraCost;
      }
    }

    const parcelData = {
      ...data,
      cost,
      status: "pending",
      createdAt: new Date(),
    };

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", parcelData).then(() => {
          Swal.fire({
            title: "Confirm!",
            text: "Your parcel is sent.",
            icon: "success",
          });
        });
      }
    });
    // reset();
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
                {...register("senderName")}
                defaultValue={user.displayName}
                className="input w-full"
                placeholder="Sender Name"
                readOnly
              />

              <label className="label text-black mt-2">Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input w-full"
                placeholder="Sender Email"
                readOnly
              />

              <label className="label text-black mt-2">Sender Phone No</label>
              <input
                type="number"
                {...register("senderPhone", { required: true })}
                className="input w-full"
                placeholder="Sender Phone No"
              />
              {errors.senderPhone?.type === "required" && (
                <p className="text-red-500">Sender Phone is required</p>
              )}

              <fieldset className="fieldset">
                <legend className="fieldset">Sender Region</legend>
                <select
                  {...register("senderRegion", { required: true })}
                  defaultValue="Sender Region"
                  className="select w-full"
                >
                  <option disabled={true}>Sender Region</option>
                  {regions.map((region, i) => (
                    <option key={i} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset">Sender District</legend>
                <select
                  {...register("senderDistrict", { required: true })}
                  defaultValue="Sender District"
                  className="select w-full"
                >
                  <option disabled={true}>Sender District</option>
                  {districtsByRegion(senderRegion).map((district, i) => (
                    <option key={i} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </fieldset>
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

              <label className="label text-black mt-2">Receiver Email</label>
              <input
                type="text"
                {...register("receiverEmail", { required: true })}
                className="input w-full"
                placeholder="Receiver Email"
              />
              {errors.receiverEmail?.type === "required" && (
                <p className="text-red-500">Receiver Email is required</p>
              )}

              <label className="label text-black mt-2">Receiver Phone No</label>
              <input
                type="number"
                {...register("receiverPhone", { required: true })}
                className="input w-full"
                placeholder="Receiver Phone No"
              />
              {errors.receiverPhone?.type === "required" && (
                <p className="text-red-500">Receiver Phone No is required</p>
              )}

              <fieldset className="fieldset">
                <legend className="fieldset">Receiver Region</legend>
                <select
                  {...register("receiverRegion", { required: true })}
                  defaultValue="Receiver Region"
                  className="select w-full"
                >
                  <option disabled={true}>Receiver Region</option>
                  {regions.map((region, i) => (
                    <option key={i} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset">Receiver District</legend>
                <select
                  {...register("receiverDistrict", { required: true })}
                  defaultValue="Receiver District"
                  className="select w-full"
                >
                  <option disabled={true}>Receiver District</option>
                  {districtsByRegion(receiverRegion).map((district, i) => (
                    <option key={i} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </fieldset>
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
