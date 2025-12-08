import React from 'react';
import { motion } from 'framer-motion';

const PlacesCards = ({ places }) => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {places.map((place, index) => (
        <motion.div
          key={place.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <img src={place.image} alt={place.name} className="w-full h-56 object-cover" />
            <motion.div
              className="absolute top-4 right-4 bg-white bg-opacity-95 rounded-full px-3 py-1 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="ml-2 text-sm font-bold">{place.rating}</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {place.classification}
              </span>
            </motion.div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{place.name}</h3>
            <p className="text-gray-600 mb-4 text-base leading-relaxed">{place.description}</p>
            <h4 className="font-semibold mb-3 text-lg text-gray-800">Nearby Restaurants:</h4>
            <ul className="space-y-2">
              {place.restaurants.map((restaurant, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-500 mr-2">🍽️</span>
                  <span className="text-sm">{restaurant}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PlacesCards;
