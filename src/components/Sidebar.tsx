import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  UtensilsCrossed, 
  Hotel, 
  Users, 
  Calendar,
} from 'lucide-react';

const menuItems = [
  { icon: MapPin, label: 'Places', path: '/places' },
  { icon: UtensilsCrossed, label: 'Food', path: '/food' },
  { icon: Hotel, label: 'Hotels', path: '/hotels' },
  { icon: Users, label: 'Guides', path: '/guides' },
  { icon: Calendar, label: 'Booking', path: '/booking' },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-white/10 backdrop-blur-lg border-r border-white/20 text-white p-6 flex flex-col">
      <Link to="/" className="mb-8">
        <h1 className="text-2xl font-bold">DiscoverUnderrated<br />India</h1>
      </Link>

      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <item.icon size={24} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <Link
          to="/about"
          className="block px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
