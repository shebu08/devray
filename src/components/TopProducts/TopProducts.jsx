import Img2 from "../../assets/shirt/L32.png";
import Img3 from "../../assets/shirt/L33.png";
import Img1 from "../../assets/shirt/firwall.png";
import { useNavigate } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Next Generation Firewall",
    description: "DEVGATE FW1200",
    link:"/firewall"
  },
  {
    id: 2,
    img: Img2,
    title: "Industrial L3 Non PoE ",
    description: "DR4T024G-SFP",
    link:"/industrialgradel3nonpoe"
  },
  {
    id: 3,
    img: Img3,
    title: "L3 PoE Industrial Switch",
    description: "DR4T2408S-SFP",
    link:"/industrialgradel3poe"
  },
];
const TopProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="mb-20 text-left">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p> */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Find Your Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-black">
            Multiple lines & levels to meet all needs.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
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
                {/* <div className="flex items-center justify-center w-full gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div> */}
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="px-4 py-1 mt-4 text-white duration-300 rounded-full bg-primary hover:scale-105 group-hover:bg-white group-hover:text-primary"
                  onClick={() => navigate(data.link)}
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

export default TopProducts;
