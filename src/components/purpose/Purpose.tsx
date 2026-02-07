import React from "react";
const Purpose = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8   ">
      <div className="max-w-7xl mx-auto flex">
        <div className="">
          <p className="uppercase block text-purple-600 text-sm font-medium pb-2 ">
            Achieve more
          </p>
          <h2 className="text-3xl md:w-4/5 w-full">
            purpose of convey is to keep your team aligned and productive
          </h2>
        </div>
        {/* bullet points */}
        <div className="col-span-2 grid md:grid-cols-2 gap-8 mt-8">
            {features.map((feature, index) => {
              return <div key={index} className="flex flex-center space-x-4">
                <div className="mt-3">{feature.icon}</div>
                <div className="flex flex-col text-wrap">
                    <h3 className="text-xl font-semibold py-2">{feature.title}</h3>
                    <div className="text-gray-600">{feature.description}</div>
                </div>
              </div>
            })}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
