import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const places = [
  {
    id: 1,
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    district: 'Lower Subansiri',
    type: 'hidden',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'A picturesque valley known for its pine hills, rice fields, and the unique Apatani tribe.',
  },
  {
    id: 2,
    name: 'Dhankar Monastery',
    state: 'Himachal Pradesh',
    district: 'Lahaul and Spiti',
    type: 'hidden',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'A thousand-year-old monastery perched dramatically on a cliff overlooking the confluence of the Spiti and Pin rivers.',
  },
  {
    id: 3,
    name: 'Gandikota',
    state: 'Andhra Pradesh',
    district: 'Kadapa',
    type: 'hidden',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: "India's own Grand Canyon, featuring a stunning gorge formed by the Pennar River.",
  },
  {
    id: 4,
    name: 'Mawlynnong',
    state: 'Meghalaya',
    district: 'East Khasi Hills',
    type: 'hidden',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1615488480889-5a8416996891',
    description: 'Known as Asia\'s cleanest village, with living root bridges and a serene atmosphere.',
  },
  {
    id: 5,
    name: 'Chembra Peak',
    state: 'Kerala',
    district: 'Wayanad',
    type: 'hidden',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1603473597005-494169666842',
    description: 'A heart-shaped lake at the top of a scenic trek, offering breathtaking views.',
  },
  {
    id: 6,
    name: 'Hampi',
    state: 'Karnataka',
    district: 'Vijayanagara',
    type: 'famous',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
    description: 'A UNESCO World Heritage site with ancient temples and ruins of the Vijayanagara Empire.',
  },
  {
    id: 7,
    name: 'Pangong Lake',
    state: 'Ladakh',
    district: 'Leh',
    type: 'famous',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607389890714-4481d7428170',
    description: 'A high-altitude lake known for its changing colors and stunning mountain backdrop.',
  },
  {
    id: 8,
    name: 'Nohkalikai Falls',
    state: 'Meghalaya',
    district: 'East Khasi Hills',
    type: 'hidden',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1615488480889-5a8416996891',
    description: 'India\'s tallest plunge waterfall, cascading down from a great height.',
  },
  {
    id: 9,
    name: 'Lonar Crater Lake',
    state: 'Maharashtra',
    district: 'Buldhana',
    type: 'hidden',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1603473597005-494169666842',
    description: 'A saline soda lake formed by a meteor impact, a unique geological wonder.',
  },
  {
    id: 10,
    name: 'Dzukou Valley',
    state: 'Nagaland',
    district: 'Kohima',
    type: 'hidden',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
    description: 'A stunning valley with rolling hills, seasonal flowers, and a serene atmosphere.',
  },
  {
    id: 11,
    name: 'Tawang Monastery',
    state: 'Arunachal Pradesh',
    district: 'Tawang',
    type: 'famous',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607389890714-4481d7428170',
    description: 'The largest monastery in India, known for its rich Buddhist heritage and stunning views.',
  },
  {
    id: 12,
    name: 'Athirappilly Falls',
    state: 'Kerala',
    district: 'Thrissur',
    type: 'famous',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1615488480889-5a8416996891',
    description: 'Known as the "Niagara of India," a majestic waterfall surrounded by lush greenery.',
  },
  {
    id: 13,
    name: 'Majuli Island',
    state: 'Assam',
    district: 'Majuli',
    type: 'hidden',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1603473597005-494169666842',
    description: 'The world\'s largest river island, a hub of Vaishnavite culture and natural beauty.',
  },
  {
    id: 14,
    name: 'Rann of Kutch',
    state: 'Gujarat',
    district: 'Kutch',
    type: 'famous',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
    description: 'A vast salt marsh that transforms into a white desert, especially during the Rann Utsav.',
  },
  {
    id: 15,
    name: 'Valley of Flowers',
    state: 'Uttarakhand',
    district: 'Chamoli',
    type: 'hidden',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1607389890714-4481d7428170',
    description: 'A UNESCO World Heritage Site, known for its meadows of alpine flowers and stunning landscapes.',
  },
];

const states = ['All States', 'Arunachal Pradesh', 'Himachal Pradesh', 'Andhra Pradesh', 'Meghalaya', 'Kerala', 'Karnataka', 'Ladakh', 'Maharashtra', 'Nagaland', 'Assam', 'Gujarat', 'Uttarakhand'];
const types = ['All', 'Hidden Gems', 'Famous'];

export default function Places() {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedType, setSelectedType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 pl-72 text-white">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Explore Places</h1>
            <p className="text-white/70">Discover India's hidden treasures and famous landmarks</p>
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                  <MapPin size={16} />
                  <span>{place.district}, {place.state}</span>
                </div>
                <p className="text-white/70 mb-4 line-clamp-2">{place.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" />
                    <span>{place.rating}</span>
                  </div>
                  <Link
                    to={`/places/${place.id}`}
                    className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg hover:bg-white/30 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
