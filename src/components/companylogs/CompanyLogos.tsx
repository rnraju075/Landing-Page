import React from "react";
import slack from "../../assets/slack.png";
import amazon from "../../assets/amazon.png";
import sitepoint from "../../assets/sitepoint.png";
import meundies from "../../assets/meundies.png";
import woocommerce from "../../assets/woocommerce.png";

const CompanyLogos = () => {
  return (
    <div className="w-full container mx-auto py-20 flex sm:flex-row flex-col sm:items-center items-start ">
      <div className="w-75 px-8 text-left shrink-0 text-gray-600 border-blue-600 border-l-4 bg-white z-10 text-lg font-semibold self-center ">
        proud partnet at <br />
        hotspot and segments
      </div>
      <div className="relative overflow-hidden flex-1">
        <div className="flex animation-marque whitespace-nowrap gap-8 ">
          {[slack, amazon, sitepoint, meundies, woocommerce].map(
            (logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                className=" w-32 h-8 object-contain mx-12 my-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ),
          )}
          {[slack, amazon, sitepoint, meundies, woocommerce].map(
            (logo, index) => (
              <img
                key={"DUPLICATE" + index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                className=" w-32 h-8 object-contain mx-12 my-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
