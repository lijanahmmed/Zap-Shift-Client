import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Loading from "../../Loading/Loading";

const ParcelDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [parcel, setParcel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/parcel/${id}`).then((res) => {
      setLoading(false);
      setParcel(res.data);
    });
  }, [axiosSecure, id]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl font-bold">Parcel Details</h3>
      <div className="mt-10 flex flex-col md:flex-row gap-5">
        <div className="flex-1 bg-gray-100 p-5">
          <h4 className="text-xl font-bold">Sender Info</h4>
          <div className="space-y-1 mt-5">
            <p>
              <span className="text-gray-500">Name: </span> {parcel.senderName}
            </p>
            <p>
              <span className="text-gray-500">Email: </span>{" "}
              {parcel.senderEmail}
            </p>
            <p>
              <span className="text-gray-500">Phone: </span>{" "}
              {parcel.senderPhone}
            </p>

            <p>
              <span className="text-gray-500">District: </span>{" "}
              {parcel.senderDistrict}, {parcel.senderRegion}
            </p>
            <p>
              <span className="text-gray-500">Region: </span>{" "}
              {parcel.senderRegion}, Bangladesh
            </p>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 p-5">
          <h4 className="text-xl font-bold">Receiver Info</h4>
          <div className="space-y-1 mt-5">
            <p>
              <span className="text-gray-500">Name: </span>{" "}
              {parcel.receiverName}
            </p>
            <p>
              <span className="text-gray-500">Email: </span>{" "}
              {parcel.receiverEmail}
            </p>
            <p>
              <span className="text-gray-500">Phone: </span>{" "}
              {parcel.receiverPhone}
            </p>

            <p>
              <span className="text-gray-500">District: </span>{" "}
              {parcel.receiverDistrict}, {parcel.receiverRegion}
            </p>
            <p>
              <span className="text-gray-500">Region: </span>{" "}
              {parcel.receiverRegion}, Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[49.5%] mt-5 bg-gray-100 p-5">
        <h4 className="text-xl font-bold">Parcel Info</h4>
        <div className="space-y-1 mt-5">
          <p>
            <span className="text-gray-500">Type: </span> {parcel.parcelType}
          </p>
          <p>
            <span className="text-gray-500">Name: </span> {parcel.parcelName}
          </p>
          <p>
            <span className="text-gray-500">Weight: </span>{" "}
            {parcel.parcelWeight} KG
          </p>

          <p>
            <span className="text-gray-500">Charge: </span> {parcel.cost} Tk
          </p>
          <p>
            <span className="text-gray-500">Status: </span> {parcel.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
