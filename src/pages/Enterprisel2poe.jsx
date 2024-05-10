import Img2 from "../assets/products/unmanaged-3200-8o2g.png";
import { usePageTitle } from 'react-simple-page-title';
import Img1 from "../assets/products/mg_16_port.png";
import Img4 from "../assets/products/unmanaged-3200-24p2c.png";
import Img3 from "../assets/products/MG24_port.png";
import pdfname14 from '../assets/pdf/DR7010P8C2F-HP.pdf'
import pdfname15 from '../assets/pdf/DR7018GSM.pdf'
import pdfname16 from '../assets/pdf/DR7028XGSM.pdf'

const ProductsData = [
  {
    id: 1,
    img: Img2,
    title: "8 Port",
    description: "DR7010P8C2F-HP",
    namepdf : pdfname14
  },
  {
    id: 2,
    img: Img1,
    title: "16 Port ",
    description: "DR7018GSM ",
    namepdf : pdfname15
  },
  {
    id: 3,
    img: Img4,
    title: "24 Port",
    description: "DR7028XGSM",
    namepdf : pdfname16
  },
  {
    id: 3,
    img: Img3,
    title: "48 Port",
    description: " DR7052XGSM ",
  },
 
 
];

const Enterprisel2poe = ({ handleOrderPopup }) => {
  usePageTitle("Enterprise L2 Poe");

  return (
    <div>
      <div className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[500px] bg-no-repeat bg-cover text-white bg-[url('https://www.antaira.com.tw/img/insight-og/Article-OG_PoE.jpg')] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        <div className="container pb-8 sm:pb-0">
          <h1 className="text-5xl font-bold sm:text-4xl lg:text-4xl">Enterprise L2 Poe</h1>
        </div>
      </div>
      <div className="container mt-10 mb-10">
        {/* Header section */}
        <div className="mb-20 text-left">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p> */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Enterprise L2 Poe
          </h1>
          {/* <p data-aos="fade-up" className="text-xs text-black">
            Multiple lines & levels to meet all needs.
          </p> */}
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
                <a href={data.namepdf} download={data.namepdf}><button
                  className="px-4 py-1 mt-4 text-white duration-300 rounded-full bg-primary hover:scale-105 group-hover:bg-white group-hover:text-primary"
                  href={data.pdf}
                >
                  Check Out
                </button></a>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enterprisel2poe;

