import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Filter, Star, Hotel, IndianRupee, Wifi, Coffee, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const hotels = [
  {
    id: 1,
    name: 'Mountain Echo Homestay',
    state: 'Himachal Pradesh',
    district: 'Spiti Valley',
    type: 'Homestay',
    rating: 4.8,
    priceRange: '₹1,500-2,500',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Authentic homestay with panoramic valley views and traditional Spitian hospitality.',
    amenities: ['Mountain View', 'Home-cooked Meals', 'Wi-Fi', 'Cultural Activities'],
    highlights: [
      'Traditional architecture',
      'Organic farm-to-table food',
      'Local cultural experiences',
    ],
  },
  {
    id: 2,
    name: 'Bamboo Grove Retreat',
    state: 'Kerala',
    district: 'Wayanad',
    type: 'Eco Resort',
    rating: 4.9,
    priceRange: '₹3,000-4,500',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Sustainable eco-resort nestled in a bamboo forest with modern amenities.',
    amenities: ['Private Balcony', 'Restaurant', 'Wi-Fi', 'Nature Trails'],
    highlights: [
      'Sustainable architecture',
      'Forest walking trails',
      'Bird watching tours',
    ],
  },
  {
    id: 3,
    name: 'Desert Pearl Camp',
    state: 'Rajasthan',
    district: 'Jaisalmer',
    type: 'Luxury Camp',
    rating: 4.7,
    priceRange: '₹2,500-3,500',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Luxurious desert camp offering authentic Rajasthani experience with modern comfort.',
    amenities: ['AC Tents', 'Restaurant', 'Cultural Shows', 'Desert Safari'],
    highlights: [
      'Sunset camel safari',
      'Traditional folk performances',
      'Star gazing sessions',
    ],
  },
  {
    id: 4,
    name: 'Tea Estate Bungalow',
    state: 'Assam',
    district: 'Jorhat',
    type: 'Bungalow',
    rating: 4.6,
    priceRange: '₹2,000-3,000',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Colonial-era bungalow amidst lush tea gardens, offering a serene and luxurious stay.',
    amenities: ['Tea Garden Views', 'Private Veranda', 'Wi-Fi', 'Guided Tours'],
    highlights: [
      'Tea tasting sessions',
      'Guided tea garden tours',
      'Colonial-era architecture',
    ],
  },
  {
    id: 5,
    name: 'Backwater Serenity Resort',
    state: 'Kerala',
    district: 'Alleppey',
    type: 'Resort',
    rating: 4.8,
    priceRange: '₹3,500-5,000',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'A tranquil resort on the backwaters of Kerala, offering houseboat stays and Ayurvedic treatments.',
    amenities: ['Houseboat Stays', 'Ayurvedic Spa', 'Restaurant', 'Backwater Views'],
    highlights: [
      'Houseboat cruises',
      'Ayurvedic spa treatments',
      'Backwater views',
    ],
  },
  {
    id: 6,
    name: 'Fort View Heritage Hotel',
    state: 'Rajasthan',
    district: 'Jodhpur',
    type: 'Heritage Hotel',
    rating: 4.7,
    priceRange: '₹4,000-6,000',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'A heritage hotel with stunning views of the Mehrangarh Fort, offering a royal experience.',
    amenities: ['Rooftop Restaurant', 'Swimming Pool', 'Wi-Fi', 'Cultural Performances'],
    highlights: [
      'Fort views',
      'Traditional Rajasthani decor',
      'Cultural performances',
    ],
  },
  {
    id: 7,
    name: 'Snow Peak Lodge',
    state: 'Uttarakhand',
    district: 'Auli',
    type: 'Lodge',
    rating: 4.6,
    priceRange: '₹2,000-3,000',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'A cozy lodge in the snow-capped mountains of Auli, perfect for skiing and snowboarding.',
    amenities: ['Skiing Access', 'Mountain Views', 'Wi-Fi', 'Fireplace'],
    highlights: [
      'Skiing and snowboarding',
      'Mountain views',
      'Cozy atmosphere',
    ],
  },
  {
    id: 8,
    name: 'Beachfront Villa',
    state: 'Goa',
    district: 'South Goa',
    type: 'Villa',
    rating: 4.9,
    priceRange: '₹5,000-8,000',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'A luxurious beachfront villa with private access to the beach and stunning ocean views.',
    amenities: ['Private Beach Access', 'Swimming Pool', 'Wi-Fi', 'Ocean Views'],
    highlights: [
      'Private beach access',
      'Ocean views',
      'Luxurious amenities',
    ],
  },
];

const states = ['All States', 'Himachal Pradesh', 'Kerala', 'Rajasthan', 'Assam', 'Uttarakhand', 'Goa'];
const types = ['All', 'Homestay', 'Eco Resort', 'Luxury Camp', 'Bungalow', 'Resort', 'Heritage Hotel', 'Lodge', 'Villa'];
const priceRanges = ['All', 'Under ₹2,000', '₹2,000-4,000', 'Above ₹4,000'];

export default function Hotels() {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 pl-72 text-white">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Unique Stays</h1>
            <p className="text-white/70">Discover hidden gems and authentic accommodations</p>
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
            <div className="grid grid-cols-3 gap-6">
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
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative h-full">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                      <MapPin size={16} />
                      <span>{hotel.district}, {hotel.state}</span>
                    </div>
                    <h3 className="text-xl font-bold">{hotel.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Hotel size={16} className="text-white/70" />
                    <span className="text-sm text-white/70">{hotel.type}</span>
                  </div>
                  <p className="text-white/70 mb-4">{hotel.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="px-2 py-1 text-sm bg-white/10 rounded-full flex items-center gap-1"
                          >
                            {amenity.includes('Wi-Fi') && <Wifi size={14} />}
                            {amenity.includes('Restaurant') && <Utensils size={14} />}
                            {amenity.includes('Coffee') && <Coffee size={14} />}
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <IndianRupee size={16} className="text-white/70" />
                        <span>{hotel.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400" />
                        <span>{hotel.rating}</span>
                      </div>
                      <Link
                        to={`/hotels/${hotel.id}`}
                        className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg hover:bg-white/30 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
