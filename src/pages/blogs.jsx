import Img2 from "../assets/shirt/L32.png";
import Img3 from "../assets/shirt/L33.png";
import Img1 from "../assets/shirt/firwall.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Next Generation Firewall",
    description: "DEVGATE FW1200",
  },
  {
    id: 2,
    img: Img2,
    title: "Industrial L3 Non PoE ",
    description: "DR4T024G-SFP",
  },
  {
    id: 3,
    img: Img3,
    title: "L3 PoE Industrial Switch",
    description: "DR4T2408S-SFP",
  },
  {
    id: 4,
    img: Img1,
    title: "Next Generation Firewall",
    description: "DEVGATE FW70",
  },
  {
    id: 5,
    img: Img2,
    title: "Industrial L3 Non PoE ",
    description: "DR4T024G-SFP",
  },
  {
    id: 6,
    img: Img3,
    title: "L3 PoE Industrial Switch",
    description: "DR4T2408S-SFP",
  },
];

const Blogs = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[500px] bg-no-repeat bg-cover text-white bg-[url('https://www.cyient.com/hubfs/Banner%20image-Oct-03-2023-11-31-54-3263-AM.png')] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        <div className="container pb-8 sm:pb-0">
          <h1 className="text-5xl sm:text-4xl lg:text-4xl font-bold">Blogs</h1>
        </div>
      </div>
      <div className="container mt-10 mb-10">
        {/* Header section */}
        <div className="text-left mb-20">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p> */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Latest Blog
          </h1>
          {/* <p data-aos="fade-up" className="text-xs text-black">
            Multiple lines & levels to meet all needs.
          </p> */}
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]"></div>
              {/* details section */}
              <div className="p-4 text-center">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[240px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
                {/* star rating */}
                {/* <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div> */}
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Check Out
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
