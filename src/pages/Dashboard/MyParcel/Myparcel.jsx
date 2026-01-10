import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-bold">All my parcel</h2>
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="px-10 py-5 bg-gray-200 rounded-xl text-center mt-10 w-full md:w-56">
          <h4 className="text-lg font-semibold">Total Parcels</h4>
          <p className="text-xl font-bold">{parcels.length}</p>
        </div>
        <div className="px-10 py-5 bg-gray-200 rounded-xl text-center mt-10 w-full md:w-56">
          <h4 className="text-lg font-semibold">Return</h4>
          <p className="text-xl font-bold">0</p>
        </div>
        <div className="px-10 py-5 bg-gray-200 rounded-xl text-center mt-10 w-full md:w-56">
          <h4 className="text-lg font-semibold">Paid Parcels</h4>
          <p className="text-xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default MyParcel;
