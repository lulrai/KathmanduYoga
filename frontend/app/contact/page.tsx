"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, MapIcon, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const mapRef = useRef(null)
  const isMapInView = useInView(mapRef, { once: true, threshold: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real app
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection>
        <div className="text-center max-w-3xl pt-4 mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl p-4 font-bold mb-6 gradient-text">Contact Us</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Have questions or ready to begin your yoga journey? Reach out to us today.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <Card className="border-none shadow-xl overflow-hidden card-gradient-1">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold gradient-text mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg">Our Location</h3>
                        <p className="text-gray-700 dark:text-gray-300">Dhobighat near Dhungedhara, Lalitpur, Nepal</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg">Phone Numbers</h3>
                        <p className="text-gray-700 dark:text-gray-300">+977-98511-68145</p>
                        <p className="text-gray-700 dark:text-gray-300">+977-98030-28296</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg">Email Address</h3>
                        <a href="mailto:kathmanduyoga108@gmail.com" className="text-primary hover:underline">
                          kathmanduyoga108@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg">Office Hours</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Daily : 6:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl overflow-hidden card-gradient-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold gradient-text mb-6">Connect With Us</h2>
                  <div className="flex flex-col space-y-4">
                    <Button
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                      onClick={() => window.open("https://wa.me/9779851168145", "_blank")}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </Button>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                      onClick={() =>
                        window.open("https://maps.google.com/?q=Dhobighat+Dhungedhara+Lalitpur+Nepal", "_blank")
                      }
                    >
                      <MapIcon className="h-5 w-5" />
                      <span>Google Maps</span>
                    </Button>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-medium text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://www.facebook.com/kathmanduyoga"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/kathmanduyoga"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 rounded-full hover:from-purple-700 hover:to-pink-600 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://www.twitter.com/kathmanduyoga"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4}>
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold gradient-text mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-6 rounded-lg text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Send className="h-8 w-8 text-green-600 dark:text-green-300" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Map Section */}
        <div ref={mapRef} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0376068214513!2d85.29372!3d27.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0x6c4068cc4eaaf67!2sDhobighat%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1709925086149!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-bold text-lg mb-1">Kathmandu Yoga</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dhobighat near Dhungedhara, Lalitpur, Nepal</p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <AnimatedSection delay={0.6}>
          <div className="text-center max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold gradient-text mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Have more questions? Check out our FAQ section or feel free to contact us directly.
            </p>
            <Button
              size="lg"
              className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/about-us#faq">View FAQs</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

