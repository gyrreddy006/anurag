import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, IndianRupee, Star, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const placeDetails = {
  1: {
    id: 1,
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    district: 'Lower Subansiri',
    type: 'hidden',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: `Ziro Valley is a mesmerizing destination nestled in the state of Arunachal Pradesh. Known for its pine hills, 
    vibrant rice fields, and the unique culture of the Apatani tribe, this UNESCO World Heritage Site candidate offers visitors 
    an authentic glimpse into the heart of Northeast India.`,
    history: `The valley has been home to the Apatani tribe for centuries, known for their sustainable agricultural practices 
    and unique cultural traditions. The tribe's remarkable face tattoos and nose plugs (no longer practiced) have attracted 
    anthropologists and researchers from around the world.`,
    bestTimeToVisit: 'March to October',
    entryFee: {
      indian: 'Free',
      foreigner: '500 INR (Permit required)',
    },
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: [
      {
        name: 'Talley Valley Wildlife Sanctuary',
        distance: '25 km',
      },
      {
        name: 'Meghna Cave Temple',
        distance: '15 km',
      },
    ],
    activities: [
      'Trekking through pine forests',
      'Photography',
      'Cultural immersion with Apatani tribe',
      'Rice field walks',
      'Local food tasting',
    ],
  },
  2: {
    id: 2,
    name: 'Dhankar Monastery',
    state: 'Himachal Pradesh',
    district: 'Lahaul and Spiti',
    type: 'hidden',
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: `Dhankar Monastery is a stunning ancient monastery perched precariously on a cliff in the Spiti Valley. 
    It offers breathtaking views of the confluence of the Spiti and Pin rivers and is a testament to the region's rich Buddhist heritage.`,
    history: `The monastery dates back over a thousand years and has served as a center for Buddhist learning and practice. 
    It has witnessed the rise and fall of empires and has been a silent observer of the changing landscapes of the Himalayas.`,
    bestTimeToVisit: 'May to October',
    entryFee: {
      indian: 'Free',
      foreigner: '200 INR',
    },
    timings: '9:00 AM - 5:00 PM',
    nearbyAttractions: [
      {
        name: 'Pin Valley National Park',
        distance: '30 km',
      },
      {
        name: 'Tabo Monastery',
        distance: '45 km',
      },
    ],
    activities: [
      'Monastery exploration',
      'Photography',
      'Trekking to nearby villages',
      'Meditation and spiritual retreats',
      'Enjoying panoramic views',
    ],
  },
  3: {
    id: 3,
    name: 'Gandikota',
    state: 'Andhra Pradesh',
    district: 'Kadapa',
    type: 'hidden',
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: `Gandikota is a hidden gem often referred to as the "Grand Canyon of India." The stunning gorge formed by the Pennar River 
    and the ancient fort make it a unique destination for nature and history lovers.`,
    history: `The fort at Gandikota has a rich history dating back to the 13th century, having been ruled by various dynasties. 
    The fort's architecture and the surrounding landscape tell tales of battles, rulers, and the passage of time.`,
    bestTimeToVisit: 'October to March',
    entryFee: {
      indian: 'Free',
      foreigner: '100 INR',
    },
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: [
      {
        name: 'Belum Caves',
        distance: '100 km',
      },
      {
        name: 'Mylavaram Dam',
        distance: '50 km',
      },
    ],
    activities: [
      'Fort exploration',
      'Photography',
      'Trekking along the gorge',
      'Camping under the stars',
      'Kayaking in the river',
    ],
  },
  4: {
    id: 4,
    name: 'Mawlynnong',
    state: 'Meghalaya',
    district: 'East Khasi Hills',
    type: 'hidden',
    rating: 4.9,
    images: [
        'https://images.unsplash.com/photo-1615488480889-5a8416996891',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1615488480889-5a8416996891',
      ],
    description: 'Known as Asia\'s cleanest village, Mawlynnong is a testament to community-led sustainability and natural beauty. The village offers a serene atmosphere with living root bridges and well-maintained surroundings.',
    history: 'The village has a long history of community-led cleanliness and sustainable practices, making it a model for other villages in India and beyond.',
    bestTimeToVisit: 'September to May',
    entryFee: {
      indian: 'Free',
      foreigner: '50 INR',
    },
    timings: 'Open all day',
    nearbyAttractions: [
      {
        name: 'Living Root Bridges',
        distance: 'Within the village',
      },
      {
        name: 'Balancing Rock',
        distance: '5 km',
      },
    ],
    activities: [
      'Exploring the living root bridges',
      'Village walks',
      'Photography',
      'Experiencing local culture',
      'Enjoying the clean environment',
    ],
  },
  5: {
    id: 5,
    name: 'Chembra Peak',
    state: 'Kerala',
    district: 'Wayanad',
    type: 'hidden',
    rating: 4.5,
    images: [
        'https://images.unsplash.com/photo-1603473597005-494169666842',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1603473597005-494169666842',
      ],
    description: 'Chembra Peak is the highest peak in Wayanad, offering a challenging trek with a heart-shaped lake at the summit. The views from the top are breathtaking and worth the effort.',
    history: 'The peak has been a popular trekking destination for years, attracting nature enthusiasts and adventure seekers. The heart-shaped lake is a unique feature that adds to its charm.',
    bestTimeToVisit: 'September to May',
    entryFee: {
      indian: '50 INR',
      foreigner: '100 INR',
    },
    timings: '7:00 AM - 5:00 PM',
    nearbyAttractions: [
      {
        name: 'Soochipara Falls',
        distance: '20 km',
      },
      {
        name: 'Edakkal Caves',
        distance: '30 km',
      },
    ],
    activities: [
      'Trekking to the peak',
      'Photography',
      'Enjoying the heart-shaped lake',
      'Nature walks',
      'Bird watching',
    ],
  },
  6: {
    id: 6,
    name: 'Hampi',
    state: 'Karnataka',
    district: 'Vijayanagara',
    type: 'famous',
    rating: 4.7,
    images: [
        'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
      ],
    description: 'Hampi is a UNESCO World Heritage site, known for its ancient temples, ruins of the Vijayanagara Empire, and unique boulder-strewn landscape. It is a must-visit for history and architecture enthusiasts.',
    history: 'Hampi was the capital of the Vijayanagara Empire, one of the largest and most powerful empires in India. The ruins tell tales of a glorious past and the empire\'s rich cultural heritage.',
    bestTimeToVisit: 'October to March',
    entryFee: {
      indian: '40 INR',
      foreigner: '600 INR',
    },
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: [
      {
        name: 'Virupaksha Temple',
        distance: 'Within Hampi',
      },
      {
        name: 'Vithala Temple',
        distance: '5 km',
      },
    ],
    activities: [
      'Temple exploration',
      'Photography',
      'Cycling through the ruins',
      'Rock climbing',
      'Enjoying the sunset views',
    ],
  },
  7: {
    id: 7,
    name: 'Pangong Lake',
    state: 'Ladakh',
    district: 'Leh',
    type: 'famous',
    rating: 4.8,
    images: [
        'https://images.unsplash.com/photo-1607389890714-4481d7428170',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1607389890714-4481d7428170',
      ],
    description: 'Pangong Lake is a high-altitude lake known for its changing colors and stunning mountain backdrop. It is a popular destination for nature lovers and adventure seekers.',
    history: 'The lake is located on the border between India and China and has been a site of historical significance. Its beauty and remoteness make it a unique destination.',
    bestTimeToVisit: 'May to September',
    entryFee: {
      indian: 'Free',
      foreigner: '200 INR',
    },
    timings: 'Open all day',
    nearbyAttractions: [
      {
        name: 'Chang La Pass',
        distance: '50 km',
      },
      {
        name: 'Hemis Monastery',
        distance: '100 km',
      },
    ],
    activities: [
      'Photography',
      'Camping by the lake',
      'Enjoying the scenic views',
      'Bird watching',
      'Stargazing',
    ],
  },
  8: {
    id: 8,
    name: 'Nohkalikai Falls',
    state: 'Meghalaya',
    district: 'East Khasi Hills',
    type: 'hidden',
    rating: 4.6,
    images: [
        'https://images.unsplash.com/photo-1615488480889-5a8416996891',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1615488480889-5a8416996891',
      ],
    description: 'Nohkalikai Falls is India\'s tallest plunge waterfall, cascading down from a great height. The surrounding landscape is lush and green, making it a perfect spot for nature lovers.',
    history: 'The waterfall is named after a local Khasi woman, Likai, who is said to have jumped off the cliff after a tragic incident. The story adds to the mystique of the place.',
    bestTimeToVisit: 'September to May',
    entryFee: {
      indian: '20 INR',
      foreigner: '50 INR',
    },
    timings: '8:00 AM - 5:00 PM',
    nearbyAttractions: [
      {
        name: 'Mawsmai Caves',
        distance: '10 km',
      },
      {
        name: 'Seven Sisters Falls',
        distance: '20 km',
      },
    ],
    activities: [
      'Photography',
      'Trekking to the viewpoint',
      'Enjoying the scenic views',
      'Nature walks',
      'Exploring nearby caves',
    ],
  },
  9: {
    id: 9,
    name: 'Lonar Crater Lake',
    state: 'Maharashtra',
    district: 'Buldhana',
    type: 'hidden',
    rating: 4.4,
    images: [
        'https://images.unsplash.com/photo-1603473597005-494169666842',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1603473597005-494169666842',
      ],
    description: 'Lonar Crater Lake is a unique saline soda lake formed by a meteor impact. The surrounding area is rich in biodiversity and offers a glimpse into geological history.',
    history: 'The lake was formed by a meteor impact thousands of years ago and is one of the few hypervelocity impact craters on Earth. It is a site of scientific and historical interest.',
    bestTimeToVisit: 'October to March',
    entryFee: {
      indian: 'Free',
      foreigner: '50 INR',
    },
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: [
      {
        name: 'Gomukh Temple',
        distance: 'Within the crater',
      },
      {
        name: 'Daitya Sudan Temple',
        distance: '5 km',
      },
    ],
    activities: [
      'Crater exploration',
      'Photography',
      'Bird watching',
      'Nature walks',
      'Learning about the geological history',
    ],
  },
  10: {
    id: 10,
    name: 'Dzukou Valley',
    state: 'Nagaland',
    district: 'Kohima',
    type: 'hidden',
    rating: 4.7,
    images: [
        'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
      ],
    description: 'Dzukou Valley is a stunning valley with rolling hills, seasonal flowers, and a serene atmosphere. It is a popular trekking destination for nature lovers and adventure seekers.',
    history: 'The valley is known for its unique flora and fauna and has been a site of cultural significance for the local tribes. The seasonal flowers add to its beauty.',
    bestTimeToVisit: 'June to September',
    entryFee: {
      indian: '100 INR',
      foreigner: '200 INR',
    },
    timings: 'Open all day',
    nearbyAttractions: [
      {
        name: 'Japfu Peak',
        distance: '15 km',
      },
      {
        name: 'Kohima War Cemetery',
        distance: '20 km',
      },
    ],
    activities: [
      'Trekking through the valley',
      'Photography',
      'Camping',
      'Enjoying the scenic views',
      'Exploring the local flora',
    ],
  },
  11: {
    id: 11,
    name: 'Tawang Monastery',
    state: 'Arunachal Pradesh',
    district: 'Tawang',
    type: 'famous',
    rating: 4.8,
    images: [
        'https://images.unsplash.com/photo-1607389890714-4481d7428170',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1607389890714-4481d7428170',
      ],
    description: 'Tawang Monastery is the largest monastery in India, known for its rich Buddhist heritage and stunning views. It is a significant center for Buddhist learning and practice.',
    history: 'The monastery was founded in the 17th century and has been a center for Buddhist culture and education. It houses a vast collection of scriptures and artifacts.',
    bestTimeToVisit: 'March to October',
    entryFee: {
      indian: 'Free',
      foreigner: '100 INR',
    },
    timings: '7:00 AM - 6:00 PM',
    nearbyAttractions: [
      {
        name: 'Sela Pass',
        distance: '70 km',
      },
      {
        name: 'Bumla Pass',
        distance: '40 km',
      },
    ],
    activities: [
      'Monastery exploration',
      'Photography',
      'Learning about Buddhist culture',
      'Enjoying the panoramic views',
      'Attending prayer sessions',
    ],
  },
  12: {
    id: 12,
    name: 'Athirappilly Falls',
    state: 'Kerala',
    district: 'Thrissur',
    type: 'famous',
    rating: 4.6,
    images: [
        'https://images.unsplash.com/photo-1615488480889-5a8416996891',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1615488480889-5a8416996891',
      ],
    description: 'Athirappilly Falls, known as the "Niagara of India," is a majestic waterfall surrounded by lush greenery. It is a popular destination for nature lovers and adventure seekers.',
    history: 'The falls have been a popular tourist destination for years, attracting visitors with their natural beauty and scenic surroundings. The area is also rich in biodiversity.',
    bestTimeToVisit: 'September to January',
    entryFee: {
      indian: '40 INR',
      foreigner: '100 INR',
    },
    timings: '8:00 AM - 6:00 PM',
    nearbyAttractions: [
      {
        name: 'Vazhachal Falls',
        distance: '5 km',
      },
      {
        name: 'Sholayar Dam',
        distance: '30 km',
      },
    ],
    activities: [
      'Photography',
      'Enjoying the waterfall views',
      'Nature walks',
      'Bird watching',
      'Exploring nearby forests',
    ],
  },
  13: {
    id: 13,
    name: 'Majuli Island',
    state: 'Assam',
    district: 'Majuli',
    type: 'hidden',
    rating: 4.5,
    images: [
        'https://images.unsplash.com/photo-1603473597005-494169666842',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1603473597005-494169666842',
      ],
    description: 'Majuli Island is the world\'s largest river island, a hub of Vaishnavite culture and natural beauty. It is a unique destination for those seeking a peaceful and cultural experience.',
    history: 'The island has been a center for Vaishnavite culture for centuries, with numerous monasteries and cultural centers. It is also known for its unique ecosystem and biodiversity.',
    bestTimeToVisit: 'October to March',
    entryFee: {
      indian: 'Free',
      foreigner: '50 INR',
    },
    timings: 'Open all day',
    nearbyAttractions: [
      {
        name: 'Kamalabari Satra',
        distance: 'Within the island',
      },
      {
        name: 'Auniati Satra',
        distance: 'Within the island',
      },
    ],
    activities: [
      'Exploring the monasteries',
      'Photography',
      'Experiencing local culture',
      'Enjoying the river views',
      'Bird watching',
    ],
  },
  14: {
    id: 14,
    name: 'Rann of Kutch',
    state: 'Gujarat',
    district: 'Kutch',
    type: 'famous',
    rating: 4.7,
    images: [
        'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1599420186848-4c5c30b86862',
      ],
    description: 'The Rann of Kutch is a vast salt marsh that transforms into a white desert, especially during the Rann Utsav. It is a unique destination for those seeking a surreal and cultural experience.',
    history: 'The Rann has been a site of cultural and historical significance for centuries. The Rann Utsav is a major event that showcases the region\'s rich heritage.',
    bestTimeToVisit: 'October to February',
    entryFee: {
      indian: '100 INR',
      foreigner: '200 INR',
    },
    timings: 'Open all day',
    nearbyAttractions: [
      {
        name: 'Kalo Dungar',
        distance: '50 km',
      },
      {
        name: 'Dholavira',
        distance: '100 km',
      },
    ],
    activities: [
      'Photography',
      'Enjoying the Rann Utsav',
      'Camel safari',
      'Exploring local villages',
      'Stargazing',
    ],
  },
  15: {
    id: 15,
    name: 'Valley of Flowers',
    state: 'Uttarakhand',
    district: 'Chamoli',
    type: 'hidden',
    rating: 4.9,
    images: [
        'https://images.unsplash.com/photo-1607389890714-4481d7428170',
        'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
        'https://images.unsplash.com/photo-1607389890714-4481d7428170',
      ],
    description: 'The Valley of Flowers is a UNESCO World Heritage Site, known for its meadows of alpine flowers and stunning landscapes. It is a paradise for nature lovers and trekkers.',
    history: 'The valley has been a site of botanical research and exploration for years. Its unique ecosystem and biodiversity make it a valuable natural heritage site.',
    bestTimeToVisit: 'July to September',
    entryFee: {
      indian: '150 INR',
      foreigner: '600 INR',
    },
    timings: '7:00 AM - 5:00 PM',
    nearbyAttractions: [
      {
        name: 'Hemkund Sahib',
        distance: '10 km',
      },
      {
        name: 'Nanda Devi National Park',
        distance: '20 km',
      },
    ],
    activities: [
      'Trekking through the valley',
      'Photography',
      'Enjoying the flower meadows',
      'Nature walks',
      'Bird watching',
    ],
  },
};

export default function PlaceDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();
  const place = placeDetails[Number(id)]

  if (!place) {
    return <div className="min-h-screen bg-gray-900 text-white pl-72 p-8">Place not found</div>
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
          Back to Places
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={place.images[selectedImage]}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex gap-4 mt-4 overflow-x-auto pb-4">
              {place.images.map((image, index) => (
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
              <h1 className="text-4xl font-bold mb-2">{place.name}</h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={16} />
                <span>{place.district}, {place.state}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">Best Time</span>
                </div>
                <p className="text-white/70">{place.bestTimeToVisit}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} />
                  <span className="text-sm font-medium">Timings</span>
                </div>
                <p className="text-white/70">{place.timings}</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee size={16} />
                <span className="text-sm font-medium">Entry Fee</span>
              </div>
              <div className="space-y-1 text-white/70">
                <p>Indians: {place.entryFee.indian}</p>
                <p>Foreigners: {place.entryFee.foreigner}</p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(
                `${place.name}, ${place.district}, ${place.state}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              <MapPin size={16} />
              View on Google Maps
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-white/70 leading-relaxed">{place.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">History</h2>
              <p className="text-white/70 leading-relaxed">{place.history}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Things to Do</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {place.activities.map((activity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
                  >
                    <Star size={16} className="text-yellow-400" />
                    {activity}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nearby Attractions</h2>
            <div className="space-y-4">
              {place.nearbyAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4"
                >
                  <h3 className="font-medium mb-1">{attraction.name}</h3>
                  <p className="text-sm text-white/70">{attraction.distance} away</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
