import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import icon from "../../../assets/customer-top.png";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="mt-16 md:mt-20 w-11/12 md:w-10/12 mx-auto px-1">
      <div className="flex justify-center">
        <img src={icon} alt="Customer reviews" className="w-14 md:w-auto" />
      </div>

      <div className="text-center mt-5 mb-10">
        <h3 className="text-xl md:text-3xl font-bold mb-3">
          What our customers are saying
        </h3>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        loop={true}
        grabCursor
        centeredSlides
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="px-2">
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
