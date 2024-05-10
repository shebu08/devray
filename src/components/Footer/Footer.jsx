import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Solutions",
    link: "/solutions",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact Us",
    link: "/#",
  },
];
const FooterLinks2 = [
  {
    title: "Industrial Grade L2 PoE",
    link: "/industrailgradel2poe",
  },
  {
    title: "Industrial Grade L2 Non PoE",
    link: "/industrialgradel2nonpoe",
  },
  {
    title: "Industrial Grade L3 PoE",
    link: "/industrialgradel3poe",
  },
  {
    title: "Industrial Grade L3 Non PoE",
    link: "/industrialgradel3nonpoe",
  },
  {
    title: "Firewall",
    link: "/firewall",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid pt-5 md:grid-cols-3 pb-44">
          {/* company details */}
          <div className="px-4 py-8">
            {/* <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
            </h1> */}
            <div className="cursor-pointer ">
              <div onClick={() => navigate("/")} className="flex gap-2 ">
                <img src={footerLogo} alt="Logo" className="w-60" />
              </div>
            </div>
            <p>
              DevRay is proud to present its all-new "Make in India" Switches
              and Firewalls solution. With an emphasis on local manufacturing,
              innovation, and superior quality, these products not only meet
              global standards but also contribute to the growth of the Indian
              economy.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Information
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, i) => (
                    <div key={i} onClick={() => navigate(link.link)}>
                      <li className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1">
                        <span>{link.title}</span>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Products
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map((link, i) => (
                    <div key={i} onClick={() => navigate(link.link)}>
                      <li className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1">
                        <span>{link.title}</span>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Social share
                </h1>
                <div className="flex items-center gap-5 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl" />
                  </a>
                </div>
              </div>
              <div className="mt-0">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-3xl" />
                  <p>
                    E-29, Third Floor, E Block, Sector 63, Noida, Uttar Pradesh
                    201301
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91-8178803636</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaEnvelope />
                  <p>sales@devray.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
