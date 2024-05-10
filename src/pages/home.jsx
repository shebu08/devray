import Banner from "../components/Banner/Banner";
import Banner1 from "../components/Banner/Banner1";
import Hero from "../components/Hero/Hero";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import TopProducts from "../components/TopProducts/TopProducts";

const Home = ({ handleOrderPopup }) => {
  return (
    <div>
      {" "}
      <Hero handleOrderPopup={handleOrderPopup} />
      {/* <Products /> */}
      <Banner1 />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      {/* <Products /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
