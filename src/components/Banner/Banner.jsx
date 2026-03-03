import React from "react";
import bgImage from "../../assets/Frame8.png";
import bannerImage from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          borderRadius: "24px",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <img
              className="mx-auto py-6"
              src={bannerImage}
              alt="Banner Image"
            />
            <h1 className="mb-5 text-xl font-bold text-center">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <div className="p-1 rounded-full border-2 border-gray-100 inline-block">
              <button className="btn bg-[#E7FE29] rounded-full border-0 text-black">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
