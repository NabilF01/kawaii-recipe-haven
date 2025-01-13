import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CakeIcon, HeartIcon, SearchIcon } from "lucide-react";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kawaii-peach via-kawaii-pink to-kawaii-purple">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6">
            🧁 Recettes Kawaii
          </h1>
          <p className="text-xl md:text-2xl text-pink-500 mb-12">
            Découvrez des recettes adorables et délicieuses !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl"
          >
            <CakeIcon className="w-16 h-16 mx-auto text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Recettes Mignonnes</h3>
            <p className="text-gray-600">Des créations culinaires qui raviront vos yeux autant que vos papilles</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl"
          >
            <SearchIcon className="w-16 h-16 mx-auto text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Recherche Facile</h3>
            <p className="text-gray-600">Trouvez rapidement la recette parfaite pour votre moment kawaii</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl"
          >
            <HeartIcon className="w-16 h-16 mx-auto text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Favoris</h3>
            <p className="text-gray-600">Sauvegardez vos recettes préférées pour les retrouver facilement</p>
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="mt-16 text-center"
        >
          <Link
            to="/recipes"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Découvrir les Recettes 🌟
          </Link>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
            alt="Kawaii Food"
            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              Pourquoi choisir nos recettes ?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-2xl">🌈</span>
                Des recettes colorées et joyeuses
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Des instructions simples à suivre
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">💝</span>
                Des résultats toujours mignons
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Une communauté passionnée
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;