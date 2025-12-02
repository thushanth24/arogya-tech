import React from 'react';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">About Arogya</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Founded in the heart of Colombo's tech precinct, we combine Sri Lankan ingenuity with global standards.
            "Arogya" symbolizes well-being and improvement in our culture.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To position Sri Lanka as a hub for premium technology solutions. We aim to make high-quality software accessible to startups and businesses through smarter engineering, transparency, and continuous innovation. We believe in building digital systems that aren't just functional, but sustainable and scalable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <Lightbulb className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Innovation</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Reliability</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Partnership</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Transparency</h3>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet the Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative inline-block mb-4">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border border-black/5"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;