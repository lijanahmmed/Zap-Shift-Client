import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { MdPreview } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Loading from "../../Loading/Loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      setLoading(false);
      return res.data;
    },
  });

  if (loading) {
    return <Loading></Loading>;
  }

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/parcel/${id}`)
          .then(() => {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

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
                <th>Charge</th>
                <th>Payment</th>
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
                    {parcel.status === "Pending" ? (
                      <Link to={`/parcel-payment/${parcel._id}`} className="btn bg-primary">Pay</Link>
                    ) : (
                      <p className="text-green-500 font-bold">Paid</p>
                    )}
                  </td>
                  <td className="flex justify-center gap-1">
                    <div className="tooltip" data-tip="View Details">
                      <Link
                        to={`/parcel-details/${parcel._id}`}
                        className="btn hover:bg-primary"
                      >
                        <MdPreview />
                      </Link>
                    </div>
                    <div className="tooltip mx-1" data-tip="Edit">
                      <Link to={`/edit-parcel/${parcel._id}`} className="btn hover:bg-primary">
                        <FiEdit />
                      </Link>
                    </div>
                    <div className="tooltip mx-1" data-tip="Delete">
                      <button
                        onClick={() => handleParcelDelete(parcel._id)}
                        className="btn hover:bg-primary"
                      >
                        <FaTrash />
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
