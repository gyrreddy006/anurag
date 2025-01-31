import React from 'react';
import { motion } from 'framer-motion';

const trendingPlaces = [
  {
    id: 1,
    name: 'Ziro Valley',
    location: 'Arunachal Pradesh',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
  },
  {
    id: 2,
    name: 'Dhankar Monastery',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
  },
  {
    id: 3,
    name: 'Gandikota',
    location: 'Andhra Pradesh',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
  },
];

export default function TrendingPlaces() {
  return (
    <div className="fixed bottom-8 right-8 w-96">
      <h2 className="text-xl font-semibold mb-4 text-white">Trending Hidden Gems</h2>
      <div className="space-y-4">
        {trendingPlaces.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
          >
            <div className="flex items-center p-4">
              <img
                src={place.image}
                alt={place.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">{place.name}</h3>
                <p className="text-sm text-white/70">{place.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
