import React, { useState } from 'react';
import "../App.css"

export default function Tier() {
  const [selectedTier, setSelectedTier] = useState(1);

  const tiers = [
    {
      level: 1,
      name: 'Basic',
      features: [
        'Mencatat barang masuk',
        'Mencatat barang keluar',
        'Mencatat hasil keuntungan',
      ],
    },
    {
      level: 2,
      name: 'Business',
      features: [
        'Mencatat barang masuk dan keluar',
        'Mencatat Keuntungan',
        'Dapat menganalisa hasil penjualan dengan CHART',
        'Support 7x24 Jam',
      ],
    },
    {
      level: 3,
      name: 'Entrepreneur',
      features: [
        'Mencatat barang masuk dan keluar',
        'Mencatat Keuntungan',
        'Dapat menganalisa hasil penjualan dengan CHART',
        'Support 7x24 Jam',
        'Export data ke Excel',
        'AI Prediksi penghasilan',
      ],
    },
  ];

  const handleTierClick = (tier) => {
    setSelectedTier(tier.level);
  };

  return (
    <div id="tier" className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <h1 className='text-3xl font-bold mb-4 md:mb-0'>Product Tiers</h1>
          <div className='md:flex md:items-center'>
            {tiers.map((tier) => (
              <div
                key={tier.level}
                className={`rounded-lg px-4 py-2 ${
                  selectedTier === tier.level ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                } cursor-pointer mx-2`}
                onClick={() => handleTierClick(tier)}
              >
                {tier.name}
              </div>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-lg p-6 mt-8 animate-fade-in'>
        <h2 className='text-2xl font-bold mb-4'>{tiers[selectedTier - 1].name}</h2>
        <ul className='list-disc list-inside'>
        {tiers[selectedTier - 1].features.map((feature, index) => (
        <li key={index} className='mb-2'>
        {feature}
        </li>
        ))}
      </ul>
      </div>
    </div>
  </div>
        );
    }
