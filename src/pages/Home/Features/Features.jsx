import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
const Features = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20">
      <div className="border-t border-dashed border-lime-700 mb-10"></div>

      <div className="bg-gray-100 p-8 rounded-2xl flex flex-col justify-center lg:flex-row gap-10">
        <div className="w-32 h-32">
          <img className="object-cover" src={liveTracking} alt="" />
        </div>
        <div className="hidden lg:block border-l-2 border-dashed border-gray-400 h-32"></div>
        <div>
          <h3 className="text-xl font-bold mb-2">Live Parcel Tracking</h3>
          <p className="text-gray-500">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="mt-5 bg-gray-100 p-8 rounded-2xl flex flex-col justify-center lg:flex-row gap-10">
        <div className="w-32 h-32">
          <img className="object-cover" src={safeDelivery} alt="" />
        </div>
        <div className="hidden lg:block border-l-2 border-dashed border-gray-400 h-32"></div>
        <div>
          <h3 className="text-xl font-bold mb-2">100% Safe Delivery</h3>
          <p className="text-gray-500">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="mt-5 bg-gray-100 p-8 rounded-2xl flex flex-col justify-center lg:flex-row gap-10">
        <div className="w-32 h-32">
          <img className="object-cover" src={safeDelivery} alt="" />
        </div>
        <div className="hidden lg:block border-l-2 border-dashed border-gray-400 h-32"></div>
        <div>
          <h3 className="text-xl font-bold mb-2">24/7 Call Center Support</h3>
          <p className="text-gray-500">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>

      <div className="border-t border-dashed border-lime-700 mt-10"></div>
    </div>
  );
};

export default Features;
