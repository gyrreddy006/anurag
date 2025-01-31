import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, IndianRupee, Hotel, Car } from 'lucide-react';

export default function Booking() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('1');
  const [budget, setBudget] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 pl-72 text-white">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Plan Your Journey</h1>
          <p className="text-white/70">Book your perfect stay, guide, and transportation in one place</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in Date</label>
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check-out Date</label>
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destination</label>
                  <div className="relative">
                    <MapPin size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Where are you going?"
                      className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Guests</label>
                  <div className="relative">
                    <Users size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <div className="relative">
                    <IndianRupee size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <option value="">Select your budget</option>
                      <option value="budget">Budget (Under ₹5,000/day)</option>
                      <option value="mid">Mid-range (₹5,000-10,000/day)</option>
                      <option value="luxury">Luxury (Above ₹10,000/day)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Hotel size={24} />
                    <h3 className="font-semibold">Accommodation</h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Hotels</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Homestays</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Resorts</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users size={24} />
                    <h3 className="font-semibold">Guide Services</h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Local Guide</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Photography</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Trekking Guide</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Car size={24} />
                    <h3 className="font-semibold">Transportation</h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Car Rental</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Bike Rental</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/10" />
                      <span>Airport Transfer</span>
                    </label>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                Search Available Options
              </button>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Contact Support</h3>
                  <p className="text-white/70">Our travel experts are here to help you plan your perfect trip.</p>
                  <button className="w-full mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                    Chat with Expert
                  </button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Package</h3>
                  <p className="text-white/70">Want a customized itinerary? Let us plan it for you.</p>
                  <button className="w-full mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                    Request Custom Package
                  </button>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <h3 className="font-semibold mb-2">Contact Hours</h3>
                  <p className="text-white/70">Monday - Saturday</p>
                  <p className="text-white/70">9:00 AM - 8:00 PM IST</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
