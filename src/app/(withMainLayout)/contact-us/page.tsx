/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable prettier/prettier */
"use client"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_h9xcrof",
          "template_gjve0wg",
          form.current!,
          "k1kcuEGt4nta6swvD"
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message Sent Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          },
          (error) => {
            console.error(error.text);
          }
        );
    };



  return (
    <div className="">
        <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 text-2xl md:text-4xl mb-1 font-bold title-font text-center"
          >
            Contact Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center text-lg mt-4 mb-8"
          >
            Reach out to us through the following channels.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-600">contact@yourdomain.com</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-600">
                1234 Street Name, City, State, Zip Code
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 text-2xl md:text-4xl mb-1 font-bold title-font text-center"
          >
            Send Us a Message
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center text-lg md:text-xl mt-4 mb-8 text-gray-700"
          >
            Have any questions? We’d love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl mx-auto"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="relative mb-4 form-group">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  name="from_name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4 form-group">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  name="from_email"
                  required
                  className="w-full bg-slate-200 rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4 form-group">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <motion.input
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  value="Send Message"
                  className="bg-[#F78014] text-white p-2 rounded-full w-40 cursor-pointer"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </section>


      <section className="py-12">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-gray-800 text-2xl md:text-4xl mb-1 font-bold title-font text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Location & Hours
        </motion.h2>
        <motion.p
          className="text-center text-lg mt-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Find us here and check our operating hours.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <div className="w-full h-64">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.3350421915732!2d90.40060238874337!3d22.691750391064847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375533ac1ee93ac7%3A0x615e7e7fb6520d07!2z4Kaq4KeC4Kaw4KeN4KasIOCmmuCmsOCmleCmvuCmieCmr-CmvOCmviDgpqzgpr7gpofgpqTgp4Hgprgg4Ka44Ka-4Kay4Ka-4KauIOCmnOCmvuCmruCnhyDgpq7gprjgppzgpr_gpqbgpaQ!5e0!3m2!1sen!2sbd!4v1724671783501!5m2!1sen!2sbd"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
            <ul className="text-gray-600">
              <li className="mb-4">
                <strong>Monday - Friday:</strong> 9:00 AM - 9:00 PM
              </li>
              <li className="mb-4">
                <strong>Saturday:</strong> 10:00 AM - 6:00 PM
              </li>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    
    </div>
  );
};

export default ContactUs;