import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "IFCI",
    text: "IFCI, previously Industrial Finance Corporation of India, is a development finance institution under the ownership of Ministry of Finance, Government of India.",
    img: "https://s3-symbol-logo.tradingview.com/ifci--600.png",
  },
  {
    id: 2,
    name: "SCI",
    text: "The Shipping Corporation of India (SCI) is a public sector undertaking that operates and manages vessels servicing both national and international lines. ",
    img: "https://seeklogo.com/images/S/sci-logo-FB9FCD56B0-seeklogo.com.png",
  },
  {
    id: 3,
    name: "Power Grid",
    text: "Power Grid Corporation of India Limited is an Indian central public sector undertaking under the ownership of the Ministry of Power, Government of India.",
    img: "https://seekvectors.com/files/download/2e3db1c63389b254612bcbad7c35b183.jpg",
  },
  {
    id: 5,
    name: "Sashastra Seema Bal",
    text: "SSB is a border guarding force of India deployed along its borders with Nepal and Bhutan. It is under the administrative control of the Ministry of Home Affairs.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Sashastra_Seema_Bal.svg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p> */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Our Partners World Wide Brands
          </h1>
          {/* <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p> */}
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
