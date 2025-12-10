import alexandriaImage from '../assets/istockphoto-167760676-612x612.webp';
import abuSimbelImage from '../assets/photo-1633163893862-4cdc62de7d82.avif';
import khanImage from '../assets/photo-1710211288826-b7df3ab71588.avif';
import citadelImage from '../assets/photo-1738511574956-9529fd9f84f1.avif';
import redSeaImage from '../assets/photo-1755545414327-36524febb5b6.avif';
import nileImage from '../assets/premium_photo-1751305867894-c2acd4ca65cf.avif';
import valleyImage from '../assets/photo-1667765912995-07c5b404888a.avif';
import karnakImage from '../assets/istockphoto-2195159825-612x612.webp';
import luxorImage from '../assets/premium_photo-1661963854938-e69a4e65c1e3.avif';
import pyramidsImage from '../assets/premium_photo-1664303467567-17891a27998a.avif';

export const places = [
  {
    id: 1,
    name: "Pyramids of Giza",
    description: "Ancient pyramids built as tombs for pharaohs.",
    image: pyramidsImage,
    classification: "Historical Site",
    city: "Giza",
    rating: 4.8,
    location: { lat: 29.9792, lng: 31.1342 },
    restaurants: ["Restaurant A", "Restaurant B"]
  },
  {
    id: 2,
    name: "Nile River Cruise",
    description: "The longest river in the world, a symbol of Egypt.",
    image: nileImage,
    classification: "Tourist Attraction",
    city: "Cairo",
    rating: 4.5,
    location: { lat: 30.0444, lng: 31.2357 },
    restaurants: ["Restaurant C", "Restaurant D"]
  },
  {
    id: 3,
    name: "Luxor Temple",
    description: "A large Ancient Egyptian temple complex.",
    image: luxorImage,
    classification: "Historical Site",
    city: "Luxor",
    rating: 4.7,
    location: { lat: 25.6995, lng: 32.6396 },
    restaurants: ["Restaurant E", "Restaurant F"]
  },
  {
    id: 4,
    name: "Karnak Temple",
    description: "The largest temple complex ever built by man.",
    image: karnakImage,
    classification: "Historical Site",
    city: "Luxor",
    rating: 4.9,
    location: { lat: 25.7188, lng: 32.6573 },
    restaurants: ["Restaurant G", "Restaurant H"]
  },
  {
    id: 5,
    name: "Valley of the Kings",
    description: "Ancient burial ground for pharaohs.",
    image: valleyImage,
    classification: "Historical Site",
    city: "Luxor",
    rating: 4.6,
    location: { lat: 25.7402, lng: 32.6014 },
    restaurants: ["Restaurant I", "Restaurant J"]
  },
  {
    id: 6,
    name: "Alexandria Library",
    description: "A modern library inspired by the ancient one.",
    image: alexandriaImage,
    classification: "Cultural Site",
    city: "Alexandria",
    rating: 4.4,
    location: { lat: 31.2089, lng: 29.9092 },
    restaurants: ["Restaurant K", "Restaurant L"]
  },
  {
    id: 7,
    name: "Khan el-Khalili Bazaar",
    description: "Historic bazaar in Cairo's Islamic district.",
    image: khanImage,
    classification: "Market",
    city: "Cairo",
    rating: 4.3,
    location: { lat: 30.0475, lng: 31.2625 },
    restaurants: ["Restaurant M", "Restaurant N"]
  },
  {
    id: 8,
    name: "Red Sea Resort",
    description: "Beautiful beach resort in Sharm El Sheikh.",
    image: redSeaImage,
    classification: "Beach Resort",
    city: "Sharm El Sheikh",
    rating: 4.5,
    location: { lat: 27.9158, lng: 34.3299 },
    restaurants: ["Restaurant O", "Restaurant P"]
  },
  {
    id: 9,
    name: "Citadel of Qaitbay",
    description: "15th-century defensive fortress in Alexandria.",
    image: citadelImage,
    classification: "Historical Site",
    city: "Alexandria",
    rating: 4.2,
    location: { lat: 31.2142, lng: 29.8856 },
    restaurants: ["Restaurant Q", "Restaurant R"]
  },
  {
    id: 10,
    name: "Abu Simbel Temples",
    description: "Massive rock temples built by Ramses II.",
    image: abuSimbelImage,
    classification: "Historical Site",
    city: "Aswan",
    rating: 4.8,
    location: { lat: 22.3372, lng: 31.6258 },
    restaurants: ["Restaurant S", "Restaurant T"]
  }
];
