import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center items-center space-y-28">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How can we help your business?
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg font-medium">
          business goals with tailored solutions that drive growth and
          efficiency.
        </p>
      </div>
      <div className="grid grid-cols-3 ">
        {features.map((feature, index) => {
          return (
            <div key={index}>
              <div className=" flex items-center justify-center ">
                <div className="w-24 h-24 bg-orange-200 hover:bg-gray-400 rounded-[50%] flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-medium text-center">{feature.title}</h3>
              <p className="text-center text-xl" >{feature.description}</p>
            </div>
          );
        })}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 py-4 px-8 rounded-4xl text-white text-xl font-semibold">
        Become a partner
      </button>
    </section>
  );
};

export default Features;
