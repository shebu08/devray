import Slider from "react-slick";
import Image1 from "../../assets/hero/3.png";
import Image5 from "../../assets/hero/firwall.png";
import Image2 from "../../assets/hero/l3.png";
import Image4 from "../../assets/hero/l31.png";
import Image3 from "../../assets/hero/sale.png";

const ImageList = [
  {
    id: 5,
    img: Image5,
    title: "Devray Firewall",
    description: "",
  },
  {
    id: 1,
    img: Image1,
    title: "Industrial Managed Switch",
    description: "",
  },
  {
    id: 2,
    img: Image2,
    title: "Industrial Grade L3 PoE",
    description: "",
  },
  {
    id: 3,
    img: Image3,
    title: "Managed PoE Switch",
    description: "",
  },
  {
    id: 4,
    img: Image4,
    title: "Industrial Grade L3 Non PoE",
    description: "",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[550px] sm:min-h-[550px] bg-no-repeat bg-cover text-white bg-[url('https://img.freepik.com/free-photo/glowing-blue-sphere-held-by-human-hand-generated-by-ai_188544-41033.jpg?t=st=1705572680~exp=1705576280~hmac=a4290c461e6a3d27bab1fa718ed31bef7d77c1d97e7fc8410f5ce26797c75f7b&w=1060')] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      {/* <div className="container">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

        <div className="overlay">
          <img src={Image3} alt="asd" />
          <div className="text">
            <h1>Devray</h1>
            <p>Welcome!!</p>
          </div>
        </div>
      </div> */}
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data, i) => (
            <div key={i}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl font-bold sm:text-4xl lg:text-4xl"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="px-4 py-2 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105"
                    >
                      Check Out
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
