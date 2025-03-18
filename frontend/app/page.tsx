"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, NotebookIcon as Lotus, Heart, Clock, Users, BookOpen, DollarSign, Star, Globe } from "lucide-react"

export default function Home() {
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Parallax effect for hero section
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  // Smooth spring physics for animations
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>

        <motion.div className="absolute inset-0 z-0" style={{ y: springY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/static/images/mountain-banner.webp"
            alt="Yoga in the Himalayas"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
          style={{
            opacity: springOpacity,
            scale: springScale,
          }}
        >
          

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-geru drop-shadow-[0_2px_2px_rgba(198,93,30,0.3)] text-stroke-geru">Kathmandu</span>
            <span className="bg-clip-text text-geru drop-shadow-[0_2px_2px_rgba(198,93,30,0.3)] text-stroke-geru">Yoga</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-yellow-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your journey to explore Health, Happiness, and Harmony starts here in the heart of the Himalayas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full text-lg px-8 py-6 bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
              asChild
            >
              <Link href="/courses">
                Begin Your Journey <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-8 py-6 border-white text-black hover:bg-white/10 hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/about-us">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stylized mouse scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className="w-6 h-12 border border-white rounded-full flex flex-col items-center justify-start p-1.5 box-content"
            animate={{
              boxShadow: [
                "0 0 0 rgba(255, 255, 255, 0.2)",
                "0 0 5px rgba(255, 255, 255, 0.3)",
                "0 0 0 rgba(255, 255, 255, 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            className="text-white text-[10px] mt-1 opacity-80 font-light tracking-wider"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            SCROLL
          </motion.div>

          {/* Section indicators */}
          <div className="flex justify-center mt-3 space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white opacity-60" />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="yogaPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#yogaPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <ScrollRevealSection>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-block mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto">
                  <Lotus className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Kathmandu Yoga</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Kathmandu Yoga is a registered yoga institution with the Government of Nepal. We are dedicated to
                sharing the transformative power of yoga, following the teachings of Paramahamsa Satyananda Saraswati,
                the founder of Satyananda Yoga and Bihar Yoga.
              </p>
            </div>
          </ScrollRevealSection>

          {/* Three pillars of our approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto mb-20">
            <PillarCard
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Health"
              description="Our practices promote physical well-being through asanas, pranayamas, and cleansing techniques that strengthen the body and enhance vitality."
              delay={0.1}
            />
            <PillarCard
              icon={<Star className="h-10 w-10 text-primary" />}
              title="Happiness"
              description="We cultivate mental and emotional balance through meditation, yoga nidra, and mindfulness practices that bring inner peace and joy."
              delay={0.3}
            />
            <PillarCard
              icon={<Lotus className="h-10 w-10 text-primary" />}
              title="Harmony"
              description="Our holistic approach integrates body, mind, and spirit, fostering harmony within yourself and with the world around you."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="circlePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circlePattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <ScrollRevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Kathmandu Yoga?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our unique approach combines ancient wisdom with modern techniques to provide a transformative
                experience.
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            <FeatureItem
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Experienced Instructor"
              description="Our founder holds a Master's Degree in Yoga Psychology with First Class honors and over 26 years of dedicated practice."
              delay={0.1}
            />
            <FeatureItem
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Authentic Teachings"
              description="Our syllabus is rooted in classical scriptures and follows the Satyananda Yoga tradition for a genuine experience."
              delay={0.2}
            />
            <FeatureItem
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Flexible Scheduling"
              description="We offer classes at times that work for you, with both in-person and online options available."
              delay={0.3}
            />
            <FeatureItem
              icon={<Heart className="h-8 w-8 text-primary" />}
              title="Holistic Approach"
              description="Our sessions include asanas, pranayamas, mudras, bandhas, shatkarmas, yoga nidra, and guided meditation."
              delay={0.4}
            />
            <FeatureItem
              icon={<DollarSign className="h-8 w-8 text-primary" />}
              title="Customized Packages"
              description="We offer various pricing options to suit your needs and goals, from single session to comprehensive programs."
              delay={0.5}
            />
            <FeatureItem
              icon={<Globe className="h-8 w-8 text-primary" />}
              title="Global Community"
              description="Join thousands of aspirants from over 42 countries who have been inspired by our teachings."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollRevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Programs</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Discover our comprehensive range of yoga programs designed to nurture your body, mind, and spirit.
              </p>
            </div>
          </ScrollRevealSection>

          <div className="max-w-6xl mx-auto">
            <ProgramsShowcase />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="wavyPattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#wavyPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <ScrollRevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Students Say</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Hear from those who have experienced the transformative power of our yoga practices.
              </p>
            </div>
          </ScrollRevealSection>

          <div className="max-w-6xl mx-auto">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="lotusPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 20 C 50 10, 60 30, 40 40 C 20 30, 30 10, 40 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#lotusPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
                Start your journey to wellness with Kathmandu Yoga. Contact us today to book your first session!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-8 py-6 bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5 transition-all duration-300"
                  asChild
                >
                  <Link href="/courses">View Courses</Link>
                </Button>
              </div>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}

// Reusable Components
function ScrollRevealSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

function PillarCard({ icon, title, description, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

function FeatureItem({ icon, title, description, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-start"
    >
      <div className="mr-4 mt-1 bg-gray-100 dark:bg-gray-800 p-3 rounded-full flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

function ProgramsShowcase() {
  const programs = [
    {
      title: "General Package",
      description:
        "A comprehensive practical session focusing on maintaining overall health and wellbeing through guided practices.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/courses#general",
    },
    {
      title: "Specific Packages",
      description: "Tailored programs combining theory and practice for specific needs and groups.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/courses#specific",
    },
    {
      title: "Intensive Packages",
      description: "Deepen and widen your knowledge and experience in different aspects of yogic sciences.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/courses#intensive",
    },
    {
      title: "Certification Course",
      description: "Complete immersion program combining practical mastery with theoretical understanding.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/courses#certification",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={programs[activeIndex].image || "/placeholder.svg"}
                alt={programs[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{programs[activeIndex].title}</h3>
                  <p className="text-white/80">{programs[activeIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4">Our Yoga Programs</h3>
          <div className="space-y-4">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary/10 border-l-4 border-primary"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h4 className={`font-bold ${activeIndex === index ? "text-primary" : ""}`}>{program.title}</h4>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="mt-4" asChild>
              <Link href={programs[activeIndex].link}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      quote:
        "Kathmandu Yoga transformed my understanding of yoga. The instructors are incredibly knowledgeable and create a supportive environment for growth.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Raj Patel",
      location: "India",
      quote:
        "The authentic teachings and personalized attention have helped me develop a deeper connection with my practice. I'm grateful for this life-changing experience.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emma Wilson",
      location: "United Kingdom",
      quote:
        "The online classes are exceptional. Despite being thousands of miles away, I feel connected to the tradition and receive the same quality instruction as in-person.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
          </div>

          <div className="pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

