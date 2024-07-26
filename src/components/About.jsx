import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="w-full min-h-screen bg-bgDark2 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center px-4"
      >
        <h1 className="text-white text-4xl mb-6">About Doughploma</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Doughploma is a platform designed to help students make informed investments 
          using powerful real-time data from markets. Our mission is to empower the next 
          generation of investors with the knowledge and tools they need to succeed in 
          the world of finance.
        </p>
        {/* Add more content for your About page as needed */}
      </motion.div>
    </div>
  );
};
