"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Mail } from "lucide-react";
import { AnimatedSection } from "./components/AnimatedSection";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Image from "next/image";
import { data } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Church background"
            fill
            style={{ objectFit: "cover" }}
            className="bg-opacity-95 object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-primary opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data?.name}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data?.description}
          </motion.p>
          <motion.a
            href="#about"
            className="inline-block bg-secondary text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-secondary transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn More
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              At {data?.name}, we believe that true spiritual growth comes
              through both study and worship. Our unique approach to faith
              creates an environment where questions are welcomed, discussion is
              encouraged, and faith is deepened through understanding.
            </p>
            <p className="mb-6">
              We are committed to fostering a community built on love,
              acceptance, and the pursuit of knowledge. Our diverse ministries
              cater to all age groups and spiritual needs, ensuring that
              everyone can find their place in our church family.
            </p>
            <p>
              Join us in our journey of faith and learning, where we explore the
              depths of scripture, engage in meaningful worship, and put our
              beliefs into action through community service and outreach
              programs.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        id="services"
        className="py-24 bg-secondary bg-opacity-10"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Services & Times
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {data?.schedule.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-secondary mr-2" />
                  <h3 className="font-semibold text-lg text-primary">
                    {item.day} {item.service}
                  </h3>
                </div>
                <p className="text-gray-600">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Ministries Section */}
      <AnimatedSection id="ministries" className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Our Ministries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data?.ministries.map((ministry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-sm shadow-secondary rounded-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="font-semibold text-xl mb-2 text-primary">
                  {ministry}
                </h3>
                <p className="text-gray-600">
                  Join us in our mission to grow and serve through{" "}
                  {ministry.toLowerCase()}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
                <p>
                  Address:{" "}
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      data?.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    {data?.address}
                  </a>
                </p>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
                <p>Office Hours: Monday-Friday 9:00 AM - 5:00 PM</p>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${data?.email}`}
                    className="text-secondary hover:underline"
                  >
                    {data?.email}
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </main>
  );
}
