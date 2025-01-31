import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'Visionary leader with a passion for travel and technology.',
    age: 45,
    social: {
      facebook: 'https://www.facebook.com/johndoe',
      twitter: 'https://www.twitter.com/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9867a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Creative strategist with a knack for engaging travel enthusiasts.',
    age: 32,
    social: {
      facebook: 'https://www.facebook.com/janesmith',
      twitter: 'https://www.twitter.com/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d67492d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Tech wizard with a love for building seamless travel experiences.',
    age: 38,
    social: {
      facebook: 'https://www.facebook.com/mikejohnson',
      twitter: 'https://www.twitter.com/mikejohnson',
      instagram: 'https://www.instagram.com/mikejohnson',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
  },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 pl-72 text-white">
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">About TravelBro</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            TravelBro is your ultimate guide to discovering the hidden gems and authentic experiences of India.
            We are passionate about showcasing the untold stories and unique destinations that lie beyond the typical tourist trail.
            Our mission is to inspire and empower travelers to explore the diverse landscapes, cultures, and traditions of India.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-left hover:bg-white/20 transition-colors"
                onClick={() => handleOpenModal(member)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-white/70">{member.role}</p>
                  </div>
                </div>
                <p className="text-white/70">{member.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.section>
      </div>

      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4">{selectedMember.name}</h2>
            <p className="text-white/70 mb-4">
              <span className="font-semibold">Role:</span> {selectedMember.role}
            </p>
            <p className="text-white/70 mb-4">
              <span className="font-semibold">Age:</span> {selectedMember.age}
            </p>
            <p className="text-white/70 mb-4">
              {selectedMember.description}
            </p>
            <div className="flex gap-4">
              {selectedMember.social.facebook && (
                <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <Facebook size={20} />
                </a>
              )}
              {selectedMember.social.twitter && (
                <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <Twitter size={20} />
                </a>
              )}
              {selectedMember.social.instagram && (
                <a href={selectedMember.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <Instagram size={20} />
                </a>
              )}
              {selectedMember.social.linkedin && (
                <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-6 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
