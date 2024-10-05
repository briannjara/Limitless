import React from 'react';

const Boxx = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  { title: 'No Awkward Bots', description: 'Join meetings without any AI interruptions' },
  { title: 'Lightning-Fast', description: 'Enjoy seamless performance with unlimited storage' },
  { title: 'Bank-Level Security', description: 'Your data is encrypted and protected in the cloud' },
  { title: 'One-Click Join', description: 'Access meetings instantly with a single click' },
  { title: 'Cross-Platform', description: 'Use seamlessly on any device or operating system' },
];

export default Boxx;
