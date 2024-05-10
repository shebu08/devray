const Banner = () => {
  return (
    <div className="min-h-[550px] mt-3 flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={
                "https://ueeshop.ly200-cdn.com/u_file/UPAH/UPAH607/2205/photo/48fdfd4797.jpg?x-oss-process=image/format,webp"
              }
              alt=""
              className="max-w-[600px] h-[350px] w-full mx-auto"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              Your technology enabler – Truely Open Solution to avoid Vendor
              Lock-in
            </h1>
            <p
              data-aos="fade-up"
              className="text-md leading-5 tracking-wide text-black"
            >
              DevRay develops a turnkey ecosystem of hardware and software
              networking platforms for service providers to unlock the potential
              of open networking and release the new service experience across
              mobile and multi-cloud landscapes.
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            {/* <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              Your technology enabler – Truely Open Solution to avoid Vendor
              Lock-in
            </h1> */}
            <p
              data-aos="fade-up"
              className="text-md leading-5 tracking-wide text-black"
            >
              Today, aging firewall models (even the “next-generation” firewall,
              introduced in 2008) are slow, and they can’t offer inline,
              real-time protection against malware or protect SaaS apps from
              lateral movement, a necessity as 95% of new workloads are deployed
              in the cloud. Read this ebook to understand the symptoms that show
              your firewall might not be fit for zero trust, including: Poor
              visibility and performance when inspecting encrypted traffic at
              scale Inability to stop ransomware attacks or prevent lateral
              movement of threats High risk of internet-borne infections
              spreading across your hybrid cloud Traffic congestion and complex
              routing when securing a remote workforce Learn about other common
              symptoms and how to cure them with a cloud native approach.
            </p>
          </div>
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={
                "https://img.freepik.com/premium-photo/digital-crime-by-anonymous-hacker_53876-41594.jpg?w=826"
              }
              alt=""
              className="max-w-[600px] h-[350px] w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
