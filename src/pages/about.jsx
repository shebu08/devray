const About = () => {
  const list = [
    {
      title: "DevRay switches serve",
      desc: "DevRay switches serve as the backbone of any network, providing high-performance onnectivityand seamless integration with other network devices. These switches are designed to handle heavy workloads, ensuring smooth data transfer and minimal latency. With advanced features like VLAN support, power over Ethernet (PoE), and intuitive management interfaces, DevRay switches offer businesses the flexibility and scalability they need to meet their network requirements.",
    },
    {
      title: "DevRay offers",
      desc: "In addition to switches, DevRay also offers a comprehensive range of firewalls designed to protect network infrastructures against cyber threats. DevRay firewalls incorporate advanced security mechanisms like intrusion prevention systems (IPS), virtual private network (VPN) support, and deep packet inspection to identify and mitigate potential threats before they can infiltrate the network. These firewalls provide businesses with an added layer of protection, ensuring the safety and integrity of their data.",
    },
    {
      title: "DevRay apart from its competitors ",
      desc: "What sets DevRay apart from its competitors is its unwavering commitment to innovation and customer satisfaction. DevRay continually invests in research and development to stay ahead of emerging threats and evolving network requirements. Their team of experts is dedicated to designing and delivering solutions that address the unique challenges faced by businesses in different industries. With a customer-centric approach, DevRay provides comprehensive support and service throughout the lifecycle of its products. From pre-sales consultation to post-sales technical assistance, businesses can rely on DevRay to guide them in choosing the right switches and firewalls and ensure a smooth implementation process. In conclusion, DevRay Switches and Firewalls offer a comprehensive network security solution for businesses seeking to secure their networks and protect their valuable data. With their advanced features, high-performance capabilities, and dedication to customer satisfaction, DevRay is the trusted partner businesses can rely on to safeguard their networks against cyber threats.",
    },
  ];
  return (
    <div>
      <div className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[500px] bg-no-repeat bg-cover text-black bg-[url('https://www.microchip.com/en-us/products/high-speed-networking-and-video/ethernet/_jcr_content/root/responsivegrid/container/cardgrid/card1/image.coreimg.jpeg/1688645701671/adobestock-500701280.jpeg')] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        <div className="container pb-8 sm:pb-0">
          <h1 className="text-5xl font-bold sm:text-4xl lg:text-4xl">
            About Us
          </h1>
        </div>
      </div>
      <div className="container mt-10 mb-10">
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={"https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003787.jpg?t=st=1705572748~exp=1705576348~hmac=999bbc3c884f5cfaa468b654ed15e4c8589e2e33ae93e88930137074621ee0fb&w=900"}
              alt=""
              className="max-w-[600px] h-[600px] w-full mx-auto"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              About | DevRay
            </h1>
            <p
              data-aos="fade-up"
              className="leading-5 tracking-wide text-black text-md"
            >
              DevRay is proud to present its all-new "Make in India" Switches
              and Firewalls solution. With an emphasis on local manufacturing,
              innovation, and superior quality, these products not only meet
              global standards but also contribute to the growth of the Indian
              economy. DevRay is committed to revolutionizing the networking
              industry by providing reliable and cost-effective networking
              solutions that are designed and produced within the country. Our
              "Make in India" Switches and Firewalls embody the spirit of
              innovation, skill development, and job creation as we strive to
              cater to our customers' requirements while promoting self-reliance
              in India.The ever-increasing reliance on technology and
              connectivity has made network security a critical aspect for
              businesses of all sizes. In an era where cyber threats are
              becoming more sophisticated, having a robust and reliable network
              security solution is paramount. This is where DevRay Switches and
              Firewalls come into play. DevRay is a trusted name in the field of
              network infrastructure and security solutions. With our
              cutting-edge technology and industry expertise, DevRay has
              developed a wide range of switches and firewalls to safeguard
              networks from malicious attacks, unauthorized access, and data
              breaches. DevRay switches serve as the backbone of any network,
              providing high-performance connectivity and seamless integration
              with other network devices. These switches are designed to handle
              heavy workloads, ensuring smooth data transfer and minimal
              latency. With advanced features like VLAN support, power over
              Ethernet (PoE), and intuitive management interfaces, DevRay
              switches offer businesses the flexibility and scalability they
              need to meet their network requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-10 mb-10">
        {list.map((item, i) => (
          <div
            className="flex flex-col justify-center gap-6 mt-10 mb-10 sm:pt-0"
            key={i}
          >
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold sm:text-4xl text-[#d72323]"
            >
              {item.title}
            </h1>
            <p
              data-aos="fade-up"
              className="leading-5 tracking-wide text-black text-md"
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
