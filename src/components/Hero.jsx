import { useState } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section
      className="w-screen flex justify-center items-center bg-bgDark1 mb-[10vw] xl:mb-[8vw] hero-bg-gradient pb-12 sm:pb-16 md:pb-24 lg:pb-0" // Adjusted bottom margin and padding
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            For students. By students.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">Doughploma</h1>
            <h1 className="hidden md:inline">Doughploma</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48">
            Helping students make informed investments with powerful real-time data from markets.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <form onSubmit={handleSearch} className="flex flex-col items-center mt-14 mb-10 sm:mb-16"> {/* Adjusted bottom margin */}
            <input
              type="text"
              placeholder="Enter Ticker Symbol or Company Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-96 md:w-[30rem] lg:w-[40rem] h-12 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor bg-white text-bgDark1 mb-4"
            />
            <button
              type="submit"
              className="contained-button w-64 sm:w-60 h-12 px-6 rounded-md"
              aria-label="Search"
            >
              Search
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
