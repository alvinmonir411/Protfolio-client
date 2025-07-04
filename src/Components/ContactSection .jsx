import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ocvhasr", "template_kan30sh", form.current, {
        publicKey: "k7I5y9ntxbiAxOv6-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black py-16 flex flex-col items-center justify-center text-base-content font-sans">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-pink-500"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-center mb-16 text-neutral-content max-w-2xl mx-auto"
        >
          Feel free to reach out to me for any questions or opportunities!
        </motion.p>

        <div className=" p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-[#271c27] p-4 rounded-lg flex items-center gap-4 shadow-md
             border border-transparent hover:border-pink-500 hover:shadow-[0_0_8px_rgba(255,128,191,0.4)] transition-all duration-300
             cursor-pointer"
            >
              <a
                href="mailto:alvinmonir411@gmail.com"
                className="flex items-center gap-4 w-full"
              >
                <FaEnvelope className="text-pink-400 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold text-primary-content">
                    Email
                  </h4>
                  <p className="text-neutral-content">
                    alvinmonir411@gmail.com
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-[#271c27] p-4 rounded-lg flex items-center gap-4 shadow-md
                         border border-transparent hover:border-pink-500 hover:shadow-[0_0_8px_rgba(255,128,191,0.4)] transition-all duration-300"
            >
              <FaPhoneAlt className="text-pink-400 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-primary-content">
                  Phone
                </h4>
                <p className="text-neutral-content">+880 19799-15165</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-[#271c27] p-4 rounded-lg flex items-center gap-4 shadow-md
                         border border-transparent hover:border-pink-500 hover:shadow-[0_0_8px_rgba(255,128,191,0.4)] transition-all duration-300"
            >
              <FaWhatsapp className="text-pink-400 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-primary-content">
                  WhatsApp
                </h4>
                <p className="text-neutral-content">+880 19799-15165</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bg-[#271c27] p-4 rounded-lg flex items-center gap-4 shadow-md
                         border border-transparent hover:border-pink-500 hover:shadow-[0_0_8px_rgba(255,128,191,0.4)] transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-primary-content">
                  Location
                </h4>
                <p className="text-neutral-content">Dhaka, Bangladesh</p>
              </div>
            </motion.div>
          </div>
          {/* Right Column: Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#271c27] p-6 rounded-lg shadow-md flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="input input-bordered h-14 bg-[#271c27] border-gray-500 text-neutral-content focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="input input-bordered h-14 bg-[#271c27] border-gray-700 text-neutral-content focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              className="input input-bordered h-14 bg-[#271c27] border-gray-700 text-neutral-content focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="textarea textarea-bordered bg-[#271c27] border-gray-700 text-neutral-content h-32 resize-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg"
            ></textarea>
            <button
              className="btn bg-pink-600 hover:bg-pink-700 text-white border-none self-end h-14 rounded-lg"
              style={{ boxShadow: "0 0 10px rgba(255, 128, 191, 0.4)" }}
            >
              Send Message <FaPaperPlane className="ml-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
