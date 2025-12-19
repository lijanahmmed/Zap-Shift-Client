import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL, user_email } = review;
  return (
    <div className="bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
      <FaQuoteLeft className="text-primary text-2xl mb-4" />

      <p className="mb-4">{testimonial}</p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center gap-4">
        <div>
          <img className="w-10 h-10 object-cover rounded-full" src={user_photoURL} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
