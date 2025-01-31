import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, ArrowLeft, Hotel, IndianRupee, Wifi, Coffee, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const hotelDetails = {
  1: {
    id: 1,
    name: 'Mountain Echo Homestay',
    state: 'Himachal Pradesh',
    district: 'Spiti Valley',
    type: 'Homestay',
    rating: 4.8,
    priceRange: '₹1,500-2,500',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'Authentic homestay with panoramic valley views and traditional Spitian hospitality. Experience the local culture and enjoy home-cooked meals.',
    amenities: ['Mountain View', 'Home-cooked Meals', 'Wi-Fi', 'Cultural Activities', 'Attached Bathroom', 'Hot Water'],
    highlights: [
      'Traditional architecture',
      'Organic farm-to-table food',
      'Local cultural experiences',
      'Stunning views',
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'mountain.echo@example.com',
    },
  },
  2: {
    id: 2,
    name: 'Bamboo Grove Retreat',
    state: 'Kerala',
    district: 'Wayanad',
    type: 'Eco Resort',
    rating: 4.9,
    priceRange: '₹3,000-4,500',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'Sustainable eco-resort nestled in a bamboo forest with modern amenities. Enjoy nature trails, bird watching, and a peaceful retreat.',
    amenities: ['Private Balcony', 'Restaurant', 'Wi-Fi', 'Nature Trails', 'Swimming Pool', 'Spa'],
    highlights: [
      'Sustainable architecture',
      'Forest walking trails',
      'Bird watching tours',
      'Yoga and meditation sessions',
    ],
    contact: {
      phone: '+91 8765432109',
      email: 'bamboo.retreat@example.com',
    },
  },
  3: {
    id: 3,
    name: 'Desert Pearl Camp',
    state: 'Rajasthan',
    district: 'Jaisalmer',
    type: 'Luxury Camp',
    rating: 4.7,
    priceRange: '₹2,500-3,500',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'Luxurious desert camp offering authentic Rajasthani experience with modern comfort. Enjoy cultural shows, desert safaris, and star gazing sessions.',
    amenities: ['AC Tents', 'Restaurant', 'Cultural Shows', 'Desert Safari', 'Bonfire', 'Private Dining'],
    highlights: [
      'Sunset camel safari',
      'Traditional folk performances',
      'Star gazing sessions',
      'Luxury camping experience',
    ],
    contact: {
      phone: '+91 7654321098',
      email: 'desert.pearl@example.com',
    },
  },
  4: {
    id: 4,
    name: 'Tea Estate Bungalow',
    state: 'Assam',
    district: 'Jorhat',
    type: 'Bungalow',
    rating: 4.6,
    priceRange: '₹2,000-3,000',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'Colonial-era bungalow amidst lush tea gardens, offering a serene and luxurious stay. Experience the charm of old-world hospitality.',
    amenities: ['Tea Garden Views', 'Private Veranda', 'Wi-Fi', 'Guided Tours', 'Library', 'Antique Furniture'],
    highlights: [
      'Tea tasting sessions',
      'Guided tea garden tours',
      'Colonial-era architecture',
      'Peaceful atmosphere',
    ],
    contact: {
      phone: '+91 9876543211',
      email: 'tea.bungalow@example.com',
    },
  },
  5: {
    id: 5,
    name: 'Backwater Serenity Resort',
    state: 'Kerala',
    district: 'Alleppey',
    type: 'Resort',
    rating: 4.8,
    priceRange: '₹3,500-5,000',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'A tranquil resort on the backwaters of Kerala, offering houseboat stays and Ayurvedic treatments. Enjoy the serene beauty of the backwaters.',
    amenities: ['Houseboat Stays', 'Ayurvedic Spa', 'Restaurant', 'Backwater Views', 'Yoga Center', 'Fishing'],
    highlights: [
      'Houseboat cruises',
      'Ayurvedic spa treatments',
      'Backwater views',
      'Yoga and meditation',
    ],
    contact: {
      phone: '+91 8765432110',
      email: 'backwater.resort@example.com',
    },
  },
  6: {
    id: 6,
    name: 'Fort View Heritage Hotel',
    state: 'Rajasthan',
    district: 'Jodhpur',
    type: 'Heritage Hotel',
    rating: 4.7,
    priceRange: '₹4,000-6,000',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'A heritage hotel with stunning views of the Mehrangarh Fort, offering a royal experience. Experience the grandeur of Rajasthan\'s history and culture.',
    amenities: ['Rooftop Restaurant', 'Swimming Pool', 'Wi-Fi', 'Cultural Performances', 'Courtyard', 'Historical Tours'],
    highlights: [
      'Fort views',
      'Traditional Rajasthani decor',
      'Cultural performances',
      'Royal hospitality',
    ],
    contact: {
      phone: '+91 7654321099',
      email: 'fort.hotel@example.com',
    },
  },
  7: {
    id: 7,
    name: 'Snow Peak Lodge',
    state: 'Uttarakhand',
    district: 'Auli',
    type: 'Lodge',
    rating: 4.6,
    priceRange: '₹2,000-3,000',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'A cozy lodge in the snow-capped mountains of Auli, perfect for skiing and snowboarding. Enjoy the thrill of winter sports and the warmth of a mountain retreat.',
    amenities: ['Skiing Access', 'Mountain Views', 'Wi-Fi', 'Fireplace', 'Ski Equipment Rental', 'Hot Tub'],
    highlights: [
      'Skiing and snowboarding',
      'Mountain views',
      'Cozy atmosphere',
      'Winter sports activities',
    ],
    contact: {
      phone: '+91 6543210987',
      email: 'snow.lodge@example.com',
    },
  },
  8: {
    id: 8,
    name: 'Beachfront Villa',
    state: 'Goa',
    district: 'South Goa',
    type: 'Villa',
    rating: 4.9,
    priceRange: '₹5,000-8,000',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'A luxurious beachfront villa with private access to the beach and stunning ocean views. Enjoy the sun, sand, and sea in a private and luxurious setting.',
    amenities: ['Private Beach Access', 'Swimming Pool', 'Wi-Fi', 'Ocean Views', 'Private Chef', 'Outdoor Shower'],
    highlights: [
      'Private beach access',
      'Ocean views',
      'Luxurious amenities',
      'Private and secluded setting',
    ],
    contact: {
      phone: '+91 5432109876',
      email: 'beach.villa@example.com',
    },
  },
};

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotelDetails[Number(id)];

  if (!hotel) {
    return <div className="min-h-screen bg-gray-900 text-white pl-72 p-8">Hotel not found</div>;
  }

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white pl-72">
      <div className="p-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-6"
        >
          <ArrowLeft size={20} />
          Back to Hotels
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={hotel.images[selectedImage]}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex gap-4 mt-4 overflow-x-auto pb-4">
              {hotel.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-white' : ''
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={16} />
                <span>{hotel.district}, {hotel.state}</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Hotel size={16} />
                <span className="text-sm font-medium">Type</span>
              </div>
              <p className="text-white/70">{hotel.type}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee size={16} />
                <span className="text-sm font-medium">Price Range</span>
              </div>
              <p className="text-white/70">{hotel.priceRange}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-white/70 leading-relaxed">{hotel.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
                  >
                    {amenity.includes('Wi-Fi') && <Wifi size={16} />}
                    {amenity.includes('Restaurant') && <Utensils size={16} />}
                    {amenity.includes('Coffee') && <Coffee size={16} />}
                    <span className="text-white/70">{amenity}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
                  >
                    <span className="text-white/70">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-sm text-white/70">{hotel.contact.phone}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-white/70">{hotel.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
