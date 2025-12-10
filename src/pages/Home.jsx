import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { places } from "../data/places";
import backgroundImage from "../assets/photo-1608546043931-6c9678ea9feb.avif";

const Home = () => {
  const bestDestinations = places
    .filter((place) => place.rating >= 4.5)
    .slice(0, 6);
  const famousRestaurants = places
    .flatMap((place) => place.restaurants)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <Slider />

      <div className="container mx-auto px-6 py-20">
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl text-gray-800 mb-6 tracking-tight  jura-font "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Best Destinations
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: ' "Quicksand", sans-serif ',
                fontWeight: 300,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover the most highly-rated tourist attractions in Egypt
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bestDestinations.map((place, index) => (
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
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {place.name}
                      </h3>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <span className="text-blue-500 mr-2">📍</span>
                        {place.city}
                      </p>
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                        {place.classification}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-5xl text-gray-800 mb-4  jura-font"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Famous Restaurants
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 300 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Experience authentic Egyptian cuisine at these renowned
              establishments
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {famousRestaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {restaurant}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Located near tourist attractions
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.5</span>
                  <span className="mx-2">•</span>
                  <span>Egyptian Cuisine</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section
          className="text-center rounded-2xl shadow-xl p-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2
            className="text-3xl font-bold text-white mb-4 drop-shadow-lg  jura-font"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Ready to Explore Egypt?
          </h2>
          <p
            className="text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow-md  jura-font"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
          >
            Discover Egypt is your ultimate guide to the wonders of the Nile.
            From ancient pyramids to modern marvels, let us help you create
            unforgettable memories.
          </p>
          <Link
            to="/places"
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Places
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
