import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Filter, Star, UtensilsCrossed, IndianRupee } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const foods = [
  {
    id: 1,
    name: 'Thukpa',
    state: 'Arunachal Pradesh',
    district: 'Tawang',
    type: 'Local Delicacy',
    rating: 4.8,
    price: '₹80-150',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9',
    description: 'A hearty noodle soup with vegetables and meat, perfect for cold mountain evenings.',
    bestPlaces: ['Dolma Restaurant', 'Local Food Corner', 'Mountain View Cafe'],
  },
  {
    id: 2,
    name: 'Bamboo Chicken',
    state: 'Andhra Pradesh',
    district: 'Araku Valley',
    type: 'Tribal Cuisine',
    rating: 4.9,
    price: '₹200-300',
    image: 'https://images.unsplash.com/photo-1624374053855-39a5a1a41402',
    description: 'Chicken cooked in bamboo stems with tribal spices, a unique local delicacy.',
    bestPlaces: ['Tribal Kitchen', 'Forest Edge Restaurant', 'Valley View Point'],
  },
  {
    id: 3,
    name: 'Siddu',
    state: 'Himachal Pradesh',
    district: 'Spiti',
    type: 'Traditional',
    rating: 4.7,
    price: '₹60-100',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Steamed wheat balls stuffed with poppy seeds and walnuts, served with ghee.',
    bestPlaces: ['Himalayan Cafe', 'Local Dhaba', 'Mountain Kitchen'],
  },
  {
    id: 4,
    name: 'Momos',
    state: 'Sikkim',
    district: 'Gangtok',
    type: 'Local Delicacy',
    rating: 4.6,
    price: '₹50-120',
    image: 'https://images.unsplash.com/photo-1600890892847-1180849e114a',
    description: 'Steamed dumplings filled with meat or vegetables, a popular snack in the Himalayas.',
    bestPlaces: ['The Dragon Wok', 'Taste of Sikkim', 'Local Market Stalls'],
  },
  {
    id: 5,
    name: 'Puttu and Kadala Curry',
    state: 'Kerala',
    district: 'Kochi',
    type: 'Traditional',
    rating: 4.8,
    price: '₹70-150',
    image: 'https://images.unsplash.com/photo-1617989089477-b01412269728',
    description: 'Steamed rice cakes served with a spicy black chickpea curry, a classic Kerala breakfast.',
    bestPlaces: ['Dosa Corner', 'Kerala Spice House', 'Local Tea Shops'],
  },
  {
    id: 6,
    name: 'Laal Maas',
    state: 'Rajasthan',
    district: 'Jaipur',
    type: 'Local Delicacy',
    rating: 4.9,
    price: '₹250-400',
    image: 'https://images.unsplash.com/photo-1607389890714-4481d7428170',
    description: 'A fiery mutton curry cooked with red chilies and local spices, a must-try in Rajasthan.',
    bestPlaces: ['Spice Route Restaurant', 'Local Dhabas', 'Heritage Hotels'],
  },
  {
    id: 7,
    name: 'Litti Chokha',
    state: 'Bihar',
    district: 'Patna',
    type: 'Traditional',
    rating: 4.5,
    price: '₹60-100',
    image: 'https://images.unsplash.com/photo-1615488480889-5a8416996891',
    description: 'Baked wheat balls served with mashed potatoes and eggplant, a rustic Bihari dish.',
    bestPlaces: ['Local Street Vendors', 'Bihari Restaurants', 'Village Dhabas'],
  },
  {
    id: 8,
    name: 'Hyderabadi Biryani',
    state: 'Telangana',
    district: 'Hyderabad',
    type: 'Famous',
    rating: 4.7,
    price: '₹200-350',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'A flavorful rice dish cooked with meat and aromatic spices, a culinary gem of Hyderabad.',
    bestPlaces: ['Paradise Restaurant', 'Bawarchi', 'Local Biryani Centers'],
  },
  {
    id: 9,
    name: 'Masala Dosa',
    state: 'Karnataka',
    district: 'Bangalore',
    type: 'Famous',
    rating: 4.6,
    price: '₹80-150',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'A crispy rice crepe filled with spiced potatoes, a popular South Indian breakfast.',
    bestPlaces: ['MTR Restaurant', 'Vidyarthi Bhavan', 'Local Dosa Stalls'],
  },
  {
    id: 10,
    name: 'Chole Bhature',
    state: 'Delhi',
    district: 'New Delhi',
    type: 'Famous',
    rating: 4.8,
    price: '₹100-200',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'A spicy chickpea curry served with fried bread, a popular North Indian street food.',
    bestPlaces: ['Sita Ram Diwan Chand', 'Chache Di Hatti', 'Local Street Food Joints'],
  },
  {
    id: 11,
    name: 'Rogan Josh',
    state: 'Jammu and Kashmir',
    district: 'Srinagar',
    type: 'Local Delicacy',
    rating: 4.7,
    price: '₹250-400',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Aromatic lamb curry cooked with yogurt and spices, a signature dish of Kashmir.',
    bestPlaces: ['Ahdoos Restaurant', 'Mughal Darbar', 'Local Kashmiri Dhabas'],
  },
  {
    id: 12,
    name: 'Dhokla',
    state: 'Gujarat',
    district: 'Ahmedabad',
    type: 'Traditional',
    rating: 4.5,
    price: '₹50-100',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Steamed savory cake made from fermented batter, a popular Gujarati snack.',
    bestPlaces: ['Das Khaman House', 'Local Farsan Shops', 'Street Food Stalls'],
  },
  {
    id: 13,
    name: 'Misal Pav',
    state: 'Maharashtra',
    district: 'Pune',
    type: 'Local Delicacy',
    rating: 4.6,
    price: '₹70-120',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'A spicy curry made with sprouts and served with bread, a popular Maharashtrian street food.',
    bestPlaces: ['Bedekar Misal', 'Shree Upahar Gruha', 'Local Misal Joints'],
  },
  {
    id: 14,
    name: 'Aloo Paratha',
    state: 'Punjab',
    district: 'Amritsar',
    type: 'Traditional',
    rating: 4.8,
    price: '₹60-100',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Wheat flatbread stuffed with spiced potatoes, a staple breakfast in Punjab.',
    bestPlaces: ['Kesar Da Dhaba', 'Bharawan Da Dhaba', 'Local Dhabas'],
  },
  {
    id: 15,
    name: 'Appam with Stew',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    type: 'Traditional',
    rating: 4.7,
    price: '₹80-150',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Lacy rice pancakes served with a creamy vegetable or meat stew, a classic Kerala dish.',
    bestPlaces: ['Villa Maya', 'Zam Zam Restaurant', 'Local Eateries'],
  },
];

const states = ['All States', 'Arunachal Pradesh', 'Andhra Pradesh', 'Himachal Pradesh', 'Sikkim', 'Kerala', 'Rajasthan', 'Bihar', 'Telangana', 'Karnataka', 'Delhi', 'Jammu and Kashmir', 'Gujarat', 'Maharashtra', 'Punjab'];
const types = ['All', 'Local Delicacy', 'Traditional', 'Famous', 'Tribal Cuisine'];

export default function Food() {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedType, setSelectedType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 pl-72 text-white">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Local Cuisine</h1>
            <p className="text-white/70">Discover authentic local dishes and hidden food gems</p>
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
          {foods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold">{food.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                    <MapPin size={16} />
                    <span>{food.district}, {food.state}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/70 mb-4">{food.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Best Places to Try:</h4>
                  <ul className="text-white/70 space-y-1">
                    {food.bestPlaces.map((place) => (
                      <li key={place} className="flex items-center gap-2">
                        <UtensilsCrossed size={16} />
                        <span>{place}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <IndianRupee size={16} className="text-white/70" />
                    <span>{food.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" />
                    <span>{food.rating}</span>
                  </div>
                  <Link
                    to={`/food/${food.id}`}
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
