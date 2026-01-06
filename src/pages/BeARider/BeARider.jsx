import React from "react";
import agentPending from "../../assets/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const BeARider = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const region = useWatch({ control, name: "region" });

  const districtsByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleRiderSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15">
      <h1 className="text-4xl md:text-5xl font-bold">Be a Rider</h1>
      <p className="text-gray-400 mt-2 max-w-2xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="flex items-center lg:items-end flex-col lg:flex-row gap-10">
        <div className="card w-full shrink-0 flex-1">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleRiderSubmit)}>
              <fieldset className="fieldset">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
                  <div className="space-y-1 flex-1">
                    <label className="label text-black">Your Name</label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="input w-full"
                      placeholder="Your Name"
                    />
                    {errors.name?.type === "required" && (
                      <p className="text-red-500">Name is required</p>
                    )}

                    <label className="label text-black mt-2">Email</label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="input w-full"
                      placeholder="Email"
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-500">Email is required</p>
                    )}

                    <label className="label text-black mt-2">Phone No</label>
                    <input
                      type="number"
                      {...register("phone", { required: true })}
                      className="input w-full"
                      placeholder="Phone No"
                    />
                    {errors.phone?.type === "required" && (
                      <p className="text-red-500">Phone No is required</p>
                    )}

                    <fieldset className="fieldset mt-2">
                      <legend>Region</legend>
                      <select
                        {...register("region", { required: true })}
                        defaultValue="Region"
                        className="select w-full"
                      >
                        <option disabled={true}>Region</option>
                        {regions.map((region, i) => (
                          <option key={i} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </fieldset>

                    <fieldset className="fieldset mt-2">
                      <legend>District</legend>
                      <select
                        {...register("district", { required: true })}
                        defaultValue="District"
                        className="select w-full"
                      >
                        <option disabled={true}>Sender District</option>
                        {districtsByRegion(region).map((district, i) => (
                          <option key={i} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                    </fieldset>
                  </div>

                  <div className="space-y-1 flex-1">
                    <label className="label text-black">NID No</label>
                    <input
                      type="number"
                      {...register("nid", { required: true })}
                      className="input w-full"
                      placeholder="Nid No"
                    />
                    {errors.nid?.type === "required" && (
                      <p className="text-red-500">Nid No is required</p>
                    )}

                    <label className="label text-black mt-2">
                      Driving License Number
                    </label>
                    <input
                      type="number"
                      {...register("license", { required: true })}
                      className="input w-full"
                      placeholder="Driving License Number"
                    />
                    {errors.license?.type === "required" && (
                      <p className="text-red-500">
                        Driving License Number is required
                      </p>
                    )}

                    <label className="label text-black mt-2">
                      Bike Brand Model and Year
                    </label>
                    <input
                      type="text"
                      {...register("model", { required: true })}
                      className="input w-full"
                      placeholder="Bike Brand Model and Year"
                    />
                    {errors.model?.type === "required" && (
                      <p className="text-red-500">
                        Bike Brand Model and Year is required
                      </p>
                    )}
                    <label className="label text-black mt-2">
                      Bike Registration Number
                    </label>
                    <input
                      type="number"
                      {...register("registration", { required: true })}
                      className="input w-full"
                      placeholder="Bike Registration Number"
                    />
                    {errors.registration?.type === "required" && (
                      <p className="text-red-500">
                        Bike Registration Number is required
                      </p>
                    )}
                    <label className="label text-black mt-2">
                      Tell Us About Yourself
                    </label>
                    <input
                      type="text"
                      {...register("yourself", { required: true })}
                      className="input w-full"
                      placeholder="Tell Us About Yourself"
                    />
                  </div>
                </div>

                <button className="btn bg-primary font-bold mt-4">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div>
          <img src={agentPending} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeARider;
