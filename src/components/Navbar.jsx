import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Analytics", href: "#analytics", ariaLabel: "Analytics" },
  { label: "About", href: "#about", ariaLabel: "About" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="flex-1 flex justify-start items-center"
        >
          <a href="/#home" aria-label="Home" className="flex items-center">
            <div className="text-white font-['Inter'] font-bold text-xl">
              Doughploma
            </div>
          </a>
        </motion.div>
        <div className="flex-1 flex justify-center">
          <div className="hidden lg:flex w-full justify-between items-center">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                key={label}
                className="text-white lg:text-base text-2xl leading-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition mx-4"
                href={href}
                aria-label={ariaLabel}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div
            className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500"></div>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="lg:hidden absolute top-0 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10"
          >
            <div className="flex flex-col mt-16">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl leading-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2 mx-4"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
