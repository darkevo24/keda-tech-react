import React from "react";

const plans = [
  {
    name: "Basic Plan",
    description: "Get started with our basic plan.",
    monthlyPrice: "Rp50.000",
    annualPrice: "Rp500.000"
  },
  {
    name: "Standard Plan",
    description: "Upgrade to our standard plan for more features.",
    monthlyPrice: "Rp100.000",
    annualPrice: "Rp1.000.000"
  },
  {
    name: "Premium Plan",
    description: "Experience our premium plan for the ultimate service.",
    monthlyPrice: "Rp200.000",
    annualPrice: "Rp2.000.000"
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <div className="flex flex-wrap -mx-4">
        {plans.map((plan) => (
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={plan.name}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-gray-600 text-lg mb-8">{plan.description}</p>
              <div className="flex justify-between mb-4">
                <span className="font-bold text-gray-700">Monthly Price:</span>
                <span className="text-xl font-bold text-blue-500">{plan.monthlyPrice}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-bold text-gray-700">Annual Price:</span>
                <span className="text-xl font-bold text-blue-500">{plan.annualPrice}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
