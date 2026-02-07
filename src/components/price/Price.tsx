import React from "react";

const Price = () => {
  return (
    <section className="max-w-7xl m-auto mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Pricing</h2>
      </div>
      <div className="grid grid-cols-2 mt-16 gap-8">
        <div className="flext flex-col items-start">
          <h3 className="text-xl font-small">Starter</h3>
          <h1 className="text-2xl font-bold">$19.99</h1>
        </div>
        <div className="flext flex-col items-start">
          <h3 className="text-xl font-small">Business</h3>
          <h1 className="text-2xl font-bold">$199.99</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 space-y-4">
        <p className="text-gray-600 font-extralight">30 Products</p>
        <div className="flex">
          {" "}
          <span>1</span>{" "}
          <input
            type="range"
            name="range"
            id="range"
            className="w-3xl"
            step={1}
            min={0}
            max={30}
          />
          <span>30</span>
        </div>{" "}
        <p className="mt-10 text-gray-500 font-semibold">
          Ready to get started ?
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Price;
