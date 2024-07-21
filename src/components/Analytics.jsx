import { motion } from "framer-motion";
import { useState } from "react";

export const Analytics = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Sending...");

    console.log("Form submitted:", { name, email, message });

    setTimeout(() => {
      setSubmitStatus("Thank you for your submission!");
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <section className="w-full min-h-screen bg-bgDark2 flex justify-center items-center py-12" id="analytics">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md px-4"
      >
        <h1 className="text-primaryText text-4xl mb-8 text-center font-Inter font-bold">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-secondaryText mb-2 font-Inter">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-bgDark3 text-primaryText rounded border border-mainBorder focus:border-primaryColor focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-secondaryText mb-2 font-Inter">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-bgDark3 text-primaryText rounded border border-mainBorder focus:border-primaryColor focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-secondaryText mb-2 font-Inter">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 bg-bgDark3 text-primaryText rounded border border-mainBorder focus:border-primaryColor focus:outline-none transition-colors"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="contained-button w-64 h-12 px-6 rounded-md"
              aria-label="Submit"
            >
              Submit
            </button>
          </div>
        </form>
        {submitStatus && (
          <p className="mt-4 text-center text-secondaryText font-Inter">{submitStatus}</p>
        )}
      </motion.div>
    </section>
  );
};