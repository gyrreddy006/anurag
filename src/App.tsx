import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import VideoBackground from './components/VideoBackground';
import TrendingPlaces from './components/TrendingPlaces';
import Places from './pages/Places';
import PlaceDetails from './pages/PlaceDetails';
import Food from './pages/Food';
import Hotels from './pages/Hotels';
import Guides from './pages/Guides';
import Booking from './pages/Booking';
import About from './pages/About';
import FoodDetails from './pages/FoodDetails';
import GuideDetails from './pages/GuideDetails';
import HotelDetails from './pages/HotelDetails';

function Home() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Discover India's Hidden Treasures
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          Explore the untold stories, hidden gems, and authentic experiences that make India truly unique.
          From secluded valleys to ancient monasteries, uncover the beauty that lies beyond the tourist trail.
        </p>
      </div>
      <TrendingPlaces />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <VideoBackground />
        <Sidebar />
        <main className="pl-72">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:id" element={<PlaceDetails />} />
            <Route path="/food" element={<Food />} />
            <Route path="/food/:id" element={<FoodDetails />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetails />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:id" element={<GuideDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
