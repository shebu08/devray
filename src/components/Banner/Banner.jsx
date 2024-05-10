import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import video from "../../assets/media/Born_vedio.mp4";
import { GiFoodTruck } from "react-icons/gi";
import { BiCheckShield } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";





const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            {/* <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            /> */}
            <video className="h-full w-full rounded-lg" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-2xl font-bold sm:text-3xl">
            DevRay Born to Shine...
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-sm leading-5 tracking-wide text-gray-500"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p> */}
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiCheckShield className="w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaTruckMoving className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdOutlinePayment className="w-12 h-12 p-4 text-4xl bg-green-100 rounded-full shadow-sm dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer className="w-12 h-12 p-4 text-4xl bg-yellow-100 rounded-full shadow-sm dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
