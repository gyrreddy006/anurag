import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, ArrowLeft, IndianRupee, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

const foodDetails = {
  1: {
    id: 1,
    name: 'Thukpa',
    state: 'Arunachal Pradesh',
    district: 'Tawang',
    type: 'Local Delicacy',
    rating: 4.8,
    price: '₹80-150',
    images: [
      'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9',
    ],
    description: 'A hearty noodle soup with vegetables and meat, perfect for cold mountain evenings. It is a staple in the Himalayan region and is known for its comforting flavors.',
    ingredients: ['Noodles', 'Meat (Chicken/Beef/Pork)', 'Vegetables', 'Spices', 'Broth'],
    taste: 'Savory, warm, and slightly spicy',
    bestTimeToEat: 'Winter months',
    bestPlaces: ['Dolma Restaurant', 'Local Food Corner', 'Mountain View Cafe'],
    origin: 'Tibet',
  },
  2: {
    id: 2,
    name: 'Bamboo Chicken',
    state: 'Andhra Pradesh',
    district: 'Araku Valley',
    type: 'Tribal Cuisine',
    rating: 4.9,
    price: '₹200-300',
    images: [
      'https://images.unsplash.com/photo-1624374053855-39a5a1a41402',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624374053855-39a5a1a41402',
    ],
    description: 'Chicken cooked in bamboo stems with tribal spices, a unique local delicacy. The bamboo imparts a distinct flavor to the chicken, making it a must-try.',
    ingredients: ['Chicken', 'Bamboo', 'Tribal Spices', 'Herbs'],
    taste: 'Smoky, spicy, and earthy',
    bestTimeToEat: 'Any time of the year',
    bestPlaces: ['Tribal Kitchen', 'Forest Edge Restaurant', 'Valley View Point'],
    origin: 'Araku Valley',
  },
  3: {
    id: 3,
    name: 'Siddu',
    state: 'Himachal Pradesh',
    district: 'Spiti',
    type: 'Traditional',
    rating: 4.7,
    price: '₹60-100',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'Steamed wheat balls stuffed with poppy seeds and walnuts, served with ghee. It is a traditional dish from the Spiti region and is known for its unique flavor and texture.',
    ingredients: ['Wheat Flour', 'Poppy Seeds', 'Walnuts', 'Ghee'],
    taste: 'Sweet, nutty, and buttery',
    bestTimeToEat: 'Winter months',
    bestPlaces: ['Himalayan Cafe', 'Local Dhaba', 'Mountain Kitchen'],
    origin: 'Spiti Valley',
  },
  4: {
    id: 4,
    name: 'Momos',
    state: 'Sikkim',
    district: 'Gangtok',
    type: 'Local Delicacy',
    rating: 4.6,
    price: '₹50-120',
    images: [
      'https://images.unsplash.com/photo-1600890892847-1180849e114a',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1600890892847-1180849e114a',
    ],
    description: 'Steamed dumplings filled with meat or vegetables, a popular snack in the Himalayas. They are often served with a spicy dipping sauce and are a favorite among locals and tourists.',
    ingredients: ['Wheat Flour', 'Meat (Chicken/Pork/Beef)', 'Vegetables', 'Spices'],
    taste: 'Savory, juicy, and slightly spicy',
    bestTimeToEat: 'Any time of the year',
    bestPlaces: ['The Dragon Wok', 'Taste of Sikkim', 'Local Market Stalls'],
    origin: 'Tibet',
  },
  5: {
    id: 5,
    name: 'Puttu and Kadala Curry',
    state: 'Kerala',
    district: 'Kochi',
    type: 'Traditional',
    rating: 4.8,
    price: '₹70-150',
    images: [
      'https://images.unsplash.com/photo-1617989089477-b01412269728',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1617989089477-b01412269728',
    ],
    description: 'Steamed rice cakes served with a spicy black chickpea curry, a classic Kerala breakfast. It is a nutritious and flavorful dish that is enjoyed by people of all ages.',
    ingredients: ['Rice Flour', 'Coconut', 'Black Chickpeas', 'Spices', 'Coconut Milk'],
    taste: 'Savory, spicy, and slightly sweet',
    bestTimeToEat: 'Breakfast',
    bestPlaces: ['Dosa Corner', 'Kerala Spice House', 'Local Tea Shops'],
    origin: 'Kerala',
  },
  6: {
    id: 6,
    name: 'Laal Maas',
    state: 'Rajasthan',
    district: 'Jaipur',
    type: 'Local Delicacy',
    rating: 4.9,
    price: '₹250-400',
    images: [
      'https://images.unsplash.com/photo-1607389890714-4481d7428170',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1607389890714-4481d7428170',
    ],
    description: 'A fiery mutton curry cooked with red chilies and local spices, a must-try in Rajasthan. It is known for its rich flavor and intense spiciness.',
    ingredients: ['Mutton', 'Red Chilies', 'Yogurt', 'Spices', 'Ghee'],
    taste: 'Spicy, rich, and savory',
    bestTimeToEat: 'Any time of the year',
    bestPlaces: ['Spice Route Restaurant', 'Local Dhabas', 'Heritage Hotels'],
    origin: 'Rajasthan',
  },
  7: {
    id: 7,
    name: 'Litti Chokha',
    state: 'Bihar',
    district: 'Patna',
    type: 'Traditional',
    rating: 4.5,
    price: '₹60-100',
    images: [
      'https://images.unsplash.com/photo-1615488480889-5a8416996891',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1615488480889-5a8416996891',
    ],
    description: 'Baked wheat balls served with mashed potatoes and eggplant, a rustic Bihari dish. It is a simple yet flavorful dish that is enjoyed by people of all backgrounds.',
    ingredients: ['Wheat Flour', 'Gram Flour', 'Potatoes', 'Eggplant', 'Spices'],
    taste: 'Savory, earthy, and slightly spicy',
    bestTimeToEat: 'Any time of the year',
    bestPlaces: ['Local Street Vendors', 'Bihari Restaurants', 'Village Dhabas'],
    origin: 'Bihar',
  },
  8: {
    id: 8,
    name: 'Hyderabadi Biryani',
    state: 'Telangana',
    district: 'Hyderabad',
    type: 'Famous',
    rating: 4.7,
    price: '₹200-350',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'A flavorful rice dish cooked with meat and aromatic spices, a culinary gem of Hyderabad. It is known for its rich flavors and layered cooking technique.',
    ingredients: ['Basmati Rice', 'Meat (Chicken/Mutton)', 'Yogurt', 'Spices', 'Saffron'],
    taste: 'Aromatic, spicy, and savory',
    bestTimeToEat: 'Any time of the year',
    bestPlaces: ['Paradise Restaurant', 'Bawarchi', 'Local Biryani Centers'],
    origin: 'Hyderabad',
  },
  9: {
    id: 9,
    name: 'Masala Dosa',
    state: 'Karnataka',
    district: 'Bangalore',
    type: 'Famous',
    rating: 4.6,
    price: '₹80-150',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'A crispy rice crepe filled with spiced potatoes, a popular South Indian breakfast. It is a versatile dish that can be enjoyed with various accompaniments.',
    ingredients: ['Rice Flour', 'Potatoes', 'Spices', 'Onions', 'Mustard Seeds'],
    taste: 'Savory, crispy, and slightly tangy',
    bestTimeToEat: 'Breakfast',
    bestPlaces: ['MTR Restaurant', 'Vidyarthi Bhavan', 'Local Dosa Stalls'],
    origin: 'Karnataka',
  },
  10: {
    id: 10,
    name: 'Chole Bhature',
    state: 'Delhi',
    district: 'New Delhi',
    type: 'Famous',
    rating: 4.8,
    price: '₹100-200',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'A spicy chickpea curry served with fried bread, a popular North Indian street food. It is a hearty and flavorful dish that is enjoyed by people of all ages.',
    ingredients: ['Chickpeas', 'Wheat Flour', 'Spices', 'Onions', 'Tomatoes'],
    taste: 'Spicy, savory, and slightly tangy',
    bestTimeToEat: 'Any time of the day',
    bestPlaces: ['Sita Ram Diwan Chand', 'Chache Di Hatti', 'Local Street Food Joints'],
    origin: 'Delhi',
  },
  11: {
    id: 11,
    name: 'Rogan Josh',
    state: 'Jammu and Kashmir',
    district: 'Srinagar',
    type: 'Local Delicacy',
    rating: 4.7,
    price: '₹250-400',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'Aromatic lamb curry cooked with yogurt and spices, a signature dish of Kashmir. It is known for its rich flavor and tender meat.',
    ingredients: ['Lamb', 'Yogurt', 'Spices', 'Onions', 'Ginger'],
    taste: 'Aromatic, rich, and savory',
    bestTimeToEat: 'Any time of the year',
    bestPlaces: ['Ahdoos Restaurant', 'Mughal Darbar', 'Local Kashmiri Dhabas'],
    origin: 'Kashmir',
  },
  12: {
    id: 12,
    name: 'Dhokla',
    state: 'Gujarat',
    district: 'Ahmedabad',
    type: 'Traditional',
    rating: 4.5,
    price: '₹50-100',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'Steamed savory cake made from fermented batter, a popular Gujarati snack. It is a light and healthy dish that is often enjoyed with chutney.',
    ingredients: ['Gram Flour', 'Yogurt', 'Spices', 'Ginger', 'Green Chilies'],
    taste: 'Savory, tangy, and slightly sweet',
    bestTimeToEat: 'Any time of the day',
    bestPlaces: ['Das Khaman House', 'Local Farsan Shops', 'Street Food Stalls'],
    origin: 'Gujarat',
  },
  13: {
    id: 13,
    name: 'Misal Pav',
    state: 'Maharashtra',
    district: 'Pune',
    type: 'Local Delicacy',
    rating: 4.6,
    price: '₹70-120',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'A spicy curry made with sprouts and served with bread, a popular Maharashtrian street food. It is a flavorful and filling dish that is enjoyed by people of all ages.',
    ingredients: ['Sprouts', 'Onions', 'Tomatoes', 'Spices', 'Pav (Bread)'],
    taste: 'Spicy, tangy, and savory',
    bestTimeToEat: 'Any time of the day',
    bestPlaces: ['Bedekar Misal', 'Shree Upahar Gruha', 'Local Misal Joints'],
    origin: 'Maharashtra',
  },
  14: {
    id: 14,
    name: 'Aloo Paratha',
    state: 'Punjab',
    district: 'Amritsar',
    type: 'Traditional',
    rating: 4.8,
    price: '₹60-100',
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    ],
    description: 'Wheat flatbread stuffed with spiced potatoes, a staple breakfast in Punjab. It is a hearty and flavorful dish that is often served with butter and yogurt.',
    ingredients: ['Wheat Flour', 'Potatoes', 'Spices', 'Onions', 'Cilantro'],
    taste: 'Savory, buttery, and slightly spicy',
    bestTimeToEat: 'Breakfast',
    bestPlaces: ['Kesar Da Dhaba', 'Bharawan Da Dhaba', 'Local Dhabas'],
    origin: 'Punjab',
  },
  15: {
    id: 15,
    name: 'Appam with Stew',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    type: 'Traditional',
    rating: 4.7,
    price: '₹80-150',
    images: [
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
      'https://images.unsplash.com/photo-1624890240392-becb1c8c7595',
    ],
    description: 'Lacy rice pancakes served with a creamy vegetable or meat stew, a classic Kerala dish. It is a light and flavorful dish that is often enjoyed for breakfast or dinner.',
    ingredients: ['Rice Flour', 'Coconut Milk', 'Yeast', 'Vegetables/Meat', 'Spices'],
    taste: 'Savory, creamy, and slightly sweet',
    bestTimeToEat: 'Breakfast or Dinner',
    bestPlaces: ['Villa Maya', 'Zam Zam Restaurant', 'Local Eateries'],
    origin: 'Kerala',
  },
};

export default function FoodDetails() {
  const { id } = useParams();
  const food = foodDetails[Number(id)];

  if (!food) {
    return <div className="min-h-screen bg-gray-900 text-white pl-72 p-8">Food item not found</div>;
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
          Back to Food
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={food.images[selectedImage]}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex gap-4 mt-4 overflow-x-auto pb-4">
              {food.images.map((image, index) => (
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
              <h1 className="text-4xl font-bold mb-2">{food.name}</h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={16} />
                <span>{food.district}, {food.state}</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee size={16} />
                <span className="text-sm font-medium">Price</span>
              </div>
              <p className="text-white/70">{food.price}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <UtensilsCrossed size={16} />
                <span className="text-sm font-medium">Type</span>
              </div>
              <p className="text-white/70">{food.type}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-white/70 leading-relaxed">{food.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {food.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
                  >
                    <span className="text-white/70">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Taste</h2>
              <p className="text-white/70 leading-relaxed">{food.taste}</p>
            </section>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Best Places to Try</h2>
            <div className="space-y-4">
              {food.bestPlaces.map((place, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4"
                >
                  <h3 className="font-medium mb-1">{place}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
