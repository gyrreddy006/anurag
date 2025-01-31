import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Filter, Star, Users, Languages, Clock, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    id: 1,
    name: 'Sonam Tshering',
    state: 'Sikkim',
    district: 'Gangtok',
    specialization: ['Trekking', 'Buddhist Culture'],
    rating: 4.9,
    experience: '8 years',
    languages: ['English', 'Hindi', 'Nepali'],
    pricePerDay: '₹2,000',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Expert in high-altitude treks and Buddhist monastery tours.',
    availability: 'Available',
    certifications: ['Mountaineering Course', 'First Aid Certified'],
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    state: 'Madhya Pradesh',
    district: 'Bandhavgarh',
    specialization: ['Wildlife', 'Photography'],
    rating: 4.8,
    experience: '12 years',
    languages: ['English', 'Hindi'],
    pricePerDay: '₹2,500',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Wildlife expert with extensive knowledge of tiger behavior and habitats.',
    availability: 'Booked until next week',
    certifications: ['Wildlife Photography', 'Safari Guide License'],
  },
  {
    id: 3,
    name: 'Maya Devi',
    state: 'Rajasthan',
    district: 'Jaisalmer',
    specialization: ['Culture', 'History'],
    rating: 4.7,
    experience: '6 years',
    languages: ['English', 'Hindi', 'French'],
    pricePerDay: '₹1,800',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Specialist in Rajasthani culture, folk arts, and historical monuments.',
    availability: 'Available',
    certifications: ['Heritage Guide', 'Cultural Tourism'],
  },
  {
    id: 4,
    name: 'Priya Sharma',
    state: 'Kerala',
    district: 'Munnar',
    specialization: ['Nature', 'Trekking'],
    rating: 4.9,
    experience: '7 years',
    languages: ['English', 'Malayalam', 'Tamil'],
    pricePerDay: '₹2,200',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Expert in trekking and nature trails in the Western Ghats.',
    availability: 'Available',
    certifications: ['Trekking Guide', 'Nature Conservation'],
  },
  {
    id: 5,
    name: 'Tenzin Wangchuk',
    state: 'Ladakh',
    district: 'Leh',
    specialization: ['Adventure', 'Culture'],
    rating: 4.8,
    experience: '10 years',
    languages: ['English', 'Hindi', 'Tibetan'],
    pricePerDay: '₹2,800',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Experienced in high-altitude treks and cultural tours in Ladakh.',
    availability: 'Available',
    certifications: ['Mountaineering Guide', 'Cultural Heritage'],
  },
  {
    id: 6,
    name: 'Anjali Patel',
    state: 'Gujarat',
    district: 'Ahmedabad',
    specialization: ['History', 'Culture'],
    rating: 4.7,
    experience: '5 years',
    languages: ['English', 'Hindi', 'Gujarati'],
    pricePerDay: '₹1,500',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Passionate about sharing the history and culture of Gujarat.',
    availability: 'Available',
    certifications: ['Heritage Guide', 'Local Culture Expert'],
  },
  {
    id: 7,
    name: 'Vikram Singh',
    state: 'Uttarakhand',
    district: 'Rishikesh',
    specialization: ['Yoga', 'Spirituality'],
    rating: 4.9,
    experience: '9 years',
    languages: ['English', 'Hindi'],
    pricePerDay: '₹2,300',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    description: 'Expert in yoga and spiritual retreats in the Himalayas.',
    availability: 'Available',
    certifications: ['Yoga Instructor', 'Meditation Guide'],
  },
  {
    id: 8,
    name: 'Lakshmi Reddy',
    state: 'Telangana',
    district: 'Hyderabad',
    specialization: ['Cuisine', 'Culture'],
    rating: 4.6,
    experience: '7 years',
    languages: ['English', 'Hindi', 'Telugu'],
    pricePerDay: '₹1,900',
    image: 'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    description: 'Passionate about sharing the culinary delights and cultural heritage of Hyderabad.',
    availability: 'Available',
    certifications: ['Culinary Guide', 'Heritage Expert'],
  },
];

const states = ['All States', 'Sikkim', 'Madhya Pradesh', 'Rajasthan', 'Kerala', 'Ladakh', 'Gujarat', 'Uttarakhand', 'Telangana'];
const specializations = ['All', 'Trekking', 'Wildlife', 'Culture', 'History', 'Photography', 'Nature', 'Adventure', 'Yoga', 'Spirituality', 'Cuisine'];
const languages = ['All', 'English', 'Hindi', 'French', 'Nepali', 'Tibetan', 'Gujarati', 'Malayalam', 'Tamil', 'Telugu'];

export default function Guides() {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 pl-72 text-white">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Local Guides</h1>
            <p className="text-white/70">Connect with experienced local guides for authentic experiences</p>
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
                <label className="block text-sm font-medium mb-2">Specialization</label>
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs ${
                      guide.availability === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                      {guide.availability}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{guide.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <MapPin size={16} />
                          <span>{guide.district}, {guide.state}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400" />
                        <span>{guide.rating}</span>
                      </div>
                    </div>
                    <p className="text-white/70 mb-4">{guide.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} className="text-white/70" />
                          <span>{guide.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Languages size={16} className="text-white/70" />
                          <span>{guide.languages.join(', ')}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Specializations</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.specialization.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-1 text-sm bg-white/10 rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-lg font-semibold">{guide.pricePerDay}/day</div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Phone size={16} />
                          <span>Call</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <MessageCircle size={16} />
                          <span>Message</span>
                        </button>
                        <Link
                          to={`/guides/${guide.id}`}
                          className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg hover:bg-white/30 transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
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
