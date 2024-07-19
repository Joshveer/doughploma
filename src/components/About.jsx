import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="w-full h-screen bg-bgDark2 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-white text-4xl">About us here</h1>
      </motion.div>
    </section>
  );
};
