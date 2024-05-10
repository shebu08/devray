import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Popup from "./components/Popup/Popup";
import "./index.css";
import Home from "./pages/home";

import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Solutions from "./pages/solutions";
import IndustrialGradeL2PoE from "./pages/IndustrialGradeL2PoE";
import IndustrialGradenonpoe from "./pages/IndustrialGradenonpoe";
import Industriagrade_l3Poe from './pages/Industrialgrade_l3Poe'
import Industrialgrade_l3NonPoe from "./pages/Industrialgrade_l3NonPoe ";
import Enterprisel2poe from "./pages/Enterprisel2poe";
import Enterprisel2nonpoe from "./pages/Enterprisel2nonpoe";
import Enterprisel3poe from "./pages/Enterprisel3poe";
import Enterprisel3nonpoe from "./pages/Enterprisel3nonpoe";
import Firewall from './pages/Firewall'
import Contact from "./pages/contact";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Routes>
        <Route
          path="/"
          element={<Home handleOrderPopup={handleOrderPopup} />}
        />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blogs"
          element={<Blogs handleOrderPopup={handleOrderPopup} />}
        />
        <Route path="/industrailgradel2poe" element={<IndustrialGradeL2PoE/>}/>
        <Route path="/industrialgradel2nonpoe" element={<IndustrialGradenonpoe/>}/>
        <Route path="/industrialgradel3poe" element={<Industriagrade_l3Poe/>}/>
        <Route path="/industrialgradel3nonpoe" element={<Industrialgrade_l3NonPoe/>}/>
        <Route path="/enterprisel2poe" element={<Enterprisel2poe/>}/>
        <Route path="/enterprisel2nonpoe" element={<Enterprisel2nonpoe/>}/>
        <Route path="/enterprisel3poe" element={<Enterprisel3poe/>} />
        <Route path="/enterprisel3nonpoe" element={<Enterprisel3nonpoe/>}/>
        <Route path="/firewall" element={<Firewall/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
