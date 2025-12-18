import React from "react";
import icon from "../../../assets/bookingIcon.png";

const Works = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15">
      <h2 className="text-3xl font-bold text-center">How it Works</h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mt-2">
        A simple step-by-step process that shows how ZapShift connects users,
        automates workflows, and delivers fast, reliable results seamlessly.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <img src={icon} alt="" />
          <h2 className="text-lg font-bold my-2">Booking Pick & Drop</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <img src={icon} alt="" />
          <h2 className="text-lg font-bold my-2">Cash On Delivery</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <img src={icon} alt="" />
          <h2 className="text-lg font-bold my-2">Delivery Hub</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <img src={icon} alt="" />
          <h2 className="text-lg font-bold my-2">Booking SME & Corporate</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
