import React from "react";
import icon from "../../../assets/service.png";

const Services = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15 px-10 py-20 bg-teal-950 rounded-2xl md:rounded-4xl">
      <h2 className="text-3xl font-bold text-center text-white">
        Our Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-2 text-gray-300">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border border-gray-100 bg-white rounded-2xl p-7 shadow-xl">
          <div className="flex justify-center">
            <img
              className="bg-blue-50 w-15 p-3 rounded-full"
              src={icon}
              alt=""
            />
          </div>
          <h2 className="text-lg text-center font-bold my-2">
            Express & Delivery
          </h2>
          <p className="text-gray-500  text-center">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="border border-gray-100 bg-lime-300 rounded-2xl p-7 shadow-xl">
          <div className="flex justify-center">
            <img
              className="bg-blue-50 w-15 p-3 rounded-full"
              src={icon}
              alt=""
            />
          </div>
          <h2 className="text-lg text-center font-bold my-2">
            Nationwide Delivery
          </h2>
          <p className="text-gray-500  text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>

        <div className="border border-gray-100 bg-white rounded-2xl p-7 shadow-xl">
          <div className="flex justify-center">
            <img
              className="bg-blue-50 w-15 p-3 rounded-full"
              src={icon}
              alt=""
            />
          </div>
          <h2 className="text-lg text-center font-bold my-2">
            Fulfillment Solution
          </h2>
          <p className="text-gray-500  text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>

        <div className="border border-gray-100 bg-white rounded-2xl p-7 shadow-xl">
          <div className="flex justify-center">
            <img
              className="bg-blue-50 w-15 p-3 rounded-full"
              src={icon}
              alt=""
            />
          </div>
          <h2 className="text-lg text-center font-bold my-2">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-500  text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>

        <div className="border border-gray-100 bg-white rounded-2xl p-7 shadow-xl">
          <div className="flex justify-center">
            <img
              className="bg-blue-50 w-15 p-3 rounded-full"
              src={icon}
              alt=""
            />
          </div>
          <h2 className="text-lg text-center font-bold my-2">
            Contract In Logistics
          </h2>
          <p className="text-gray-500  text-center">
            1Customized corporate services which includes warehouse and
            inventory management support.
          </p>
        </div>

        <div className="border border-gray-100 bg-white rounded-2xl p-7 shadow-xl">
          <div className="flex justify-center">
            <img
              className="bg-blue-50 w-15 p-3 rounded-full"
              src={icon}
              alt=""
            />
          </div>
          <h2 className="text-lg text-center font-bold my-2">Parcel Return</h2>
          <p className="text-gray-500  text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
