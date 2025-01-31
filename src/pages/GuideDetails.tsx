import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, ArrowLeft, Clock, Languages, Phone, MessageCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const guideDetails = {
  1: {
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
    description: 'Expert in high-altitude treks and Buddhist monastery tours. Passionate about sharing the beauty and culture of the Himalayas.',
    availability: 'Available',
    certifications: ['Mountaineering Course', 'First Aid Certified'],
    about: 'Sonam has been guiding travelers in the Himalayas for over 8 years. He is passionate about sharing the beauty and culture of the region with visitors. He is also a certified mountaineer and first-aid responder.',
    contact: {
      phone: '+91 9876543210',
      email: 'sonam@example.com',
    },
  },
  2: {
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
    description: 'Wildlife expert with extensive knowledge of tiger behavior and habitats. He is also a skilled photographer and can help you capture stunning wildlife moments.',
    availability: 'Booked until next week',
    certifications: ['Wildlife Photography', 'Safari Guide License'],
    about: 'Rajesh has been working as a wildlife guide for over 12 years. He has extensive knowledge of tiger behavior and habitats. He is also a skilled photographer and can help you capture stunning wildlife moments.',
    contact: {
      phone: '+91 8765432109',
      email: 'rajesh@example.com',
    },
  },
  3: {
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
    description: 'Specialist in Rajasthani culture, folk arts, and historical monuments. She is passionate about sharing the rich heritage of Rajasthan with visitors.',
    availability: 'Available',
    certifications: ['Heritage Guide', 'Cultural Tourism'],
    about: 'Maya has been guiding travelers in Rajasthan for over 6 years. She is passionate about sharing the rich heritage of the region with visitors. She is also a certified heritage guide.',
    contact: {
      phone: '+91 7654321098',
      email: 'maya@example.com',
    },
  },
  4: {
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
    description: 'Expert in trekking and nature trails in the Western Ghats. She is passionate about sharing the natural beauty of Kerala with visitors.',
    availability: 'Available',
    certifications: ['Trekking Guide', 'Nature Conservation'],
    about: 'Priya has been guiding travelers in the Western Ghats for over 7 years. She is passionate about sharing the natural beauty of Kerala with visitors. She is also a certified trekking guide and nature conservationist.',
    contact: {
      phone: '+91 9876543212',
      email: 'priya@example.com',
    },
  },
  5: {
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
    description: 'Experienced in high-altitude treks and cultural tours in Ladakh. He is known for his knowledge of the region and his ability to handle challenging treks.',
    availability: 'Available',
    certifications: ['Mountaineering Guide', 'Cultural Heritage'],
    about: 'Tenzin has been guiding travelers in Ladakh for over 10 years. He is known for his knowledge of the region and his ability to handle challenging treks. He is also a certified mountaineering guide and cultural heritage expert.',
    contact: {
      phone: '+91 8765432110',
      email: 'tenzin@example.com',
    },
  },
  6: {
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
    description: 'Passionate about sharing the history and culture of Gujarat. She is known for her engaging storytelling and deep knowledge of the region.',
    availability: 'Available',
    certifications: ['Heritage Guide', 'Local Culture Expert'],
    about: 'Anjali has been guiding travelers in Gujarat for over 5 years. She is passionate about sharing the history and culture of the region with visitors. She is also a certified heritage guide and local culture expert.',
    contact: {
      phone: '+91 7654321099',
      email: 'anjali@example.com',
    },
  },
  7: {
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
    description: 'Expert in yoga and spiritual retreats in the Himalayas. He is known for his calming presence and deep understanding of yoga and meditation.',
    availability: 'Available',
    certifications: ['Yoga Instructor', 'Meditation Guide'],
    about: 'Vikram has been guiding travelers in the Himalayas for over 9 years. He is known for his calming presence and deep understanding of yoga and meditation. He is also a certified yoga instructor and meditation guide.',
    contact: {
      phone: '+91 6543210987',
      email: 'vikram@example.com',
    },
  },
  8: {
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
    description: 'Passionate about sharing the culinary delights and cultural heritage of Hyderabad. She is known for her knowledge of local cuisine and her ability to create unique culinary experiences.',
    availability: 'Available',
    certifications: ['Culinary Guide', 'Heritage Expert'],
    about: 'Lakshmi has been guiding travelers in Hyderabad for over 7 years. She is passionate about sharing the culinary delights and cultural heritage of the region with visitors. She is also a certified culinary guide and heritage expert.',
    contact: {
      phone: '+91 5432109876',
      email: 'lakshmi@example.com',
    },
  },
};

export default function GuideDetails() {
  const { id } = useParams();
  const guide = guideDetails[Number(id)];

  if (!guide) {
    return <div className="min-h-screen bg-gray-900 text-white pl-72 p-8">Guide not found</div>;
  }

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
          Back to Guides
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={guide.image}
                alt={guide.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">{guide.name}</h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={16} />
                <span>{guide.district}, {guide.state}</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} />
                <span className="text-sm font-medium">Experience</span>
              </div>
              <p className="text-white/70">{guide.experience}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Languages size={16} />
                <span className="text-sm font-medium">Languages</span>
              </div>
              <p className="text-white/70">{guide.languages.join(', ')}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} />
                <span className="text-sm font-medium">Specializations</span>
              </div>
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
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-white/70 leading-relaxed">{guide.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Certifications</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.certifications.map((certification, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
                  >
                    <span className="text-white/70">{certification}</span>
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
                <p className="text-sm text-white/70">{guide.contact.phone}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-white/70">{guide.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
