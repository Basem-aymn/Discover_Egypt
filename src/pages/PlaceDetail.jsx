import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { places } from '../data/places';
import Footer from '../components/Footer';

const PlaceDetail = () => {
  const { id } = useParams();
  const place = places.find(p => p.id === parseInt(id));

  if (!place) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏛️</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Place Not Found</h1>
          <p className="text-gray-600 mb-6">The place you're looking for doesn't exist.</p>
          <Link to="/places" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
            Back to Places
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <Link to="/places" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-12 transition-colors text-lg font-medium">
          <span className="mr-3 text-xl">←</span>
          Back to Places
        </Link>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img src={place.image} alt={place.name} className="w-full h-96 object-cover" />
            <div className="absolute top-8 right-8 bg-white bg-opacity-95 rounded-full px-6 py-3 shadow-xl">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="ml-3 text-xl font-bold">{place.rating}</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full text-base shadow-xl">
                {place.classification}
              </span>
            </div>
          </div>

          <div className="p-12">
            <motion.div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">{place.name}</h1>
                <p className="text-2xl text-gray-600 flex items-center">
                  <span className="text-blue-500 mr-4 text-3xl">📍</span>
                  {place.city}
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl px-6 py-4 shadow-lg">
                  <span className="text-yellow-500 text-2xl mr-3">⭐</span>
                  <span className="text-xl font-bold">{place.rating}</span>
                  <span className="text-gray-500 ml-3">/ 5.0</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Place</h2>
              <p className="text-gray-700 text-xl leading-relaxed">{place.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
                <div className="bg-gray-100 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <span>{place.city}, Egypt</span>
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center" style={{ height: '300px' }}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
                    <p className="text-gray-600 mb-4">Location: {place.location.lat}, {place.location.lng}</p>
                    <p className="text-sm text-gray-500">Map integration requires Google Maps API key</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Nearby Restaurants</h2>
                <div className="space-y-4">
                  {place.restaurants.map((restaurant, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-lg">🍽️</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{restaurant}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">Authentic Egyptian cuisine</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>4.5</span>
                        <span className="mx-2">•</span>
                        <span>Near {place.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Link to="/places" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Explore More Places
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceDetail;
