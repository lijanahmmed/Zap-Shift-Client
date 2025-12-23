import React from "react";

const FAQ = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-15">
      <h2 className="text-3xl font-bold text-center">
        Frequently Asked Question
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mt-2">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div className="mt-10 space-y-1.5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes. ZapShift is inclusive for all users (18+) and body types. Our
            digital platform ensures accessibility, while our riders handle the
            physical transport, making parcel delivery easy for everyone
            involved.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes. ZapShift builds muscle memory by gently correcting spinal
            alignment. It reduces "tech neck" strain and alleviates lower back
            pressure, training your body to maintain healthy, pain-free posture
            naturally over time.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes. The ZapShift device features a smart sensor that detects when
            your back curves beyond 25∘. It provides immediate vibration alerts,
            reminding you to realign and build lasting muscle memory.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Sign up for restock alerts by clicking "Notify Me" on the product
            page. You will receive an automated email or SMS the moment your
            items are available for purchase again.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
