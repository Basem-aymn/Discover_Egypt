import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { places } from "../data/places";
import Footer from "../components/Footer";

const Places = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const classifications = [
    ...new Set(places.map((place) => place.classification)),
  ];
  const cities = [...new Set(places.map((place) => place.city))];

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClassification =
      selectedClassification === "" ||
      place.classification === selectedClassification;
    const matchesCity = selectedCity === "" || place.city === selectedCity;
    return matchesSearch && matchesClassification && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-6xl font-extrabold text-gray-800 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover Egypt
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore the wonders of Egypt - from ancient pyramids to modern
            marvels, find your perfect destination
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 mb-16 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search places..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-xl shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg">
                  🏷️
                </span>
                <select
                  value={selectedClassification}
                  onChange={(e) => setSelectedClassification(e.target.value)}
                  className="pl-12 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 bg-white text-lg shadow-sm appearance-none"
                >
                  <option value="">All Classifications</option>
                  {classifications.map((classification) => (
                    <option key={classification} value={classification}>
                      {classification}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg">
                  📍
                </span>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="pl-12 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 bg-white text-lg shadow-sm appearance-none"
                >
                  <option value="">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing {filteredPlaces.length} of {places.length} places
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/place/${place.id}`} className="block group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className="relative">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 right-6 bg-white bg-opacity-95 rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-base">★</span>
                        <span className="ml-2 text-base font-bold">
                          {place.rating}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                        {place.classification}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {place.city}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">
                        Click to explore
                      </span>
                      <span className="text-blue-500 group-hover:text-blue-700 transition-colors text-xl">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No places found
            </h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Places;
