import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock fetchCompanies function (same as before)
const fetchCompanies = async (query) => {
  // Mock data for demonstration
  const companies = [
    { name: "Apple Inc.", ticker: "AAPL", market: "NASDAQ" },
    { name: "Microsoft Corporation", ticker: "MSFT", market: "NASDAQ" },
    { name: "Amazon.com Inc.", ticker: "AMZN", market: "NASDAQ" },
    { name: "Tesla Inc.", ticker: "TSLA", market: "NASDAQ" },
    { name: "JPMorgan Chase & Co.", ticker: "JPM", market: "NYSE" },
    // Add more companies here...
  ];

  return companies.filter(
    company =>
      company.name.toLowerCase().includes(query.toLowerCase()) ||
      company.ticker.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4); // Limit to 5 suggestions
};

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getSuggestions = async () => {
      if (searchQuery.trim()) {
        const results = await fetchCompanies(searchQuery);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };

    getSuggestions();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the stock page with the search query as a parameter
      window.location.href = `/stock?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const formattedQuery = `${suggestion.name} (${suggestion.ticker}) - ${suggestion.market}`;
    setSearchQuery(formattedQuery);
    setSuggestions([]);
  };

  return (
    <section
      className="w-screen min-h-screen flex flex-col justify-center items-center bg-bgDark1 hero-bg-gradient pb-20 sm:pb-24 md:pb-32 lg:pb-40"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-24 md:pt-32 lg:pt-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 font-bold">
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
          <form onSubmit={handleSearch} className="flex flex-col items-center mt-14 mb-10 sm:mb-16 relative w-full sm:w-96 md:w-[30rem] lg:w-[40rem]">
            <input
              type="text"
              placeholder="Enter Ticker Symbol or Company Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor bg-white text-bgDark1 mb-4"
            />
            <div className="relative w-full">
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-[1rem] left-0 w-full bg-white rounded-md shadow-lg z-10"
                  >
                    {suggestions.map((suggestion, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {`${suggestion.name} (${suggestion.ticker}) - ${suggestion.market}`}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <button
              type="submit"
              className="contained-button w-64 sm:w-60 h-12 px-6 rounded-md mt-4"
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
