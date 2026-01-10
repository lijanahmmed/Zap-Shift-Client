import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { MdPreview } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

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
    <div className="pb-15">
      <h2 className="text-3xl font-bold">All My Parcels</h2>
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-10">
        <div className="px-10 py-5 bg-gray-200 rounded-xl text-center w-full md:w-56">
          <h4 className="text-lg font-semibold">Total Parcels</h4>
          <p className="text-xl font-bold">{parcels.length}</p>
        </div>
        <div className="px-10 py-5 bg-gray-200 rounded-xl text-center w-full md:w-56">
          <h4 className="text-lg font-semibold">Return Parcels</h4>
          <p className="text-xl font-bold">0</p>
        </div>
        <div className="px-10 py-5 bg-gray-200 rounded-xl text-center w-full md:w-56">
          <h4 className="text-lg font-semibold">Paid Parcels</h4>
          <p className="text-xl font-bold">0</p>
        </div>
      </div>

      {parcels.length > 0 ? (
        <div className="overflow-x-auto w-full rounded-box border border-base-content/10 bg-base-100 mt-15">
          <table className="table text-center">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.cost}</td>
                  <td>
                    <p className="text-yellow-600">{parcel.status}</p>
                  </td>
                  <td className="flex justify-center gap-1">
                    <div className="tooltip" data-tip="View">
                      <button className="btn hover:bg-primary">
                        <MdPreview />
                      </button>
                    </div>
                    <div className="tooltip mx-1" data-tip="Edit">
                      <button className="btn hover:bg-primary">
                        <FiEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-15">
          <h3 className="text-xl font-bold">There is no parcel data here!!</h3>
        </div>
      )}
    </div>
  );
};

export default MyParcel;
