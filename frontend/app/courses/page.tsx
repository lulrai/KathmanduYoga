"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  SpadeIcon as Spa,
  Users,
  Timer,
  School,
  ChevronDown,
  Heart,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Course data
const courses = [
  {
    id: "general",
    title: "General Package",
    icon: Spa,
    color: "from-green-500 to-emerald-600",
    gradient: "card-gradient-1",
    shortDescription:
      "A comprehensive practical session focusing on maintaining overall health and wellbeing through guided practices.",
    fullDescription:
      "Includes diverse asana sequences, pranayama techniques, mudra practices, and Yoga Nidra meditation.",
    features: ["Suitable for all levels", "Fully guided sessions", "Balanced mind-body approach"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "specific",
    title: "Specific Packages",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    gradient: "card-gradient-2",
    shortDescription: "Tailored programs combining theory and practice for specific needs and groups.",
    fullDescription: "",
    specialPrograms: [
      "Yoga Therapy for Chronic Conditions (Hypertension, Diabetes, Respiratory problems, Gynecological problems, Infertility, Back pain, and others)",
      "Pre/Postnatal Wellness",
      "Stress Reduction Techniques",
      "Youth & Educator Programs",
      "Senior-Friendly Practices",
      "Corporate Wellness Modules",
      "Yoga for Children",
      "Yoga for School Teachers",
      "Yoga for Medical Practitioners and Students",
      "Yoga for Executives",
      "Yoga for Psychological Management (Depression, Anxiety, PTSD, OCD, and others)",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "intensive",
    title: "Intensive Packages",
    icon: Timer,
    color: "from-purple-500 to-violet-600",
    gradient: "card-gradient-4",
    shortDescription:
      "These packages are for those who are keenly interested to deepen and widen their knowledge and experience in different aspects of yogic sciences.",
    fullDescription:
      "Depending upon your need, interest and convenience, we have designed the packages with different options:",
    options: [
      {
        title: "30 Hours Package",
        details: [
          "Practice: asana, pranayama, mudra and yoga nidra / guided meditation",
          "Theory: general philosophy, history, theory and principles of yoga",
        ],
      },
      {
        title: "75 Hours Package",
        details: [
          "Practice: asana, pranayama, mudra, bandha and yoga nidra",
          "Theory: general philosophy, history, theory and principles of yoga",
          "This package covers a more extended form of theory and practice",
        ],
      },
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "certification",
    title: "Certification Course on Yogic Studies",
    icon: School,
    color: "from-amber-500 to-orange-600",
    gradient: "card-gradient-3",
    shortDescription: "Complete immersion program combining practical mastery with theoretical understanding.",
    fullDescription: "Includes comprehensive assessment and certification upon completion.",
    options: [
      {
        title: "200 Hours Package",
        details: [
          "Practice: asana, pranayama, mudra, bandha and yoga nidra",
          "Theory: general philosophy, history, theory and principles of yoga",
          "A certificate is issued after the completion of the package.",
        ],
      },
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const ref = useRef(null)

  // Parallax effect for hero section
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  // Smooth spring physics for animations
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: springY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
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
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformative{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Yoga Programs
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our comprehensive range of yoga courses designed to nurture your body, mind, and spirit
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                const coursesSection = document.getElementById("courses-section")
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Explore Our Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Yoga Journey Together</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At Kathmandu Yoga, we offer a variety of programs to suit your needs, interests, and schedule. Whether
                you're a beginner or an experienced practitioner, we have something for everyone. Our courses are
                designed to help you experience and express the transformative power of yoga.
              </p>
            </div>
          </AnimatedSection>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedStat
              icon={<Users className="h-8 w-8 text-blue-500" />}
              value="10k+"
              label="Happy Students"
              delay={0.2}
            />
            <AnimatedStat
              icon={<Calendar className="h-8 w-8 text-purple-500" />}
              value="27+"
              label="Years Experience"
              delay={0.4}
            />
            <AnimatedStat
              icon={<Heart className="h-8 w-8 text-red-500" />}
              value="42+"
              label="Countries Reached"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses-section" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Yoga Programs</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Explore our diverse range of yoga programs designed to meet your specific needs and goals. Click on any
                course to learn more about its details and benefits.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div key={course.id} className="col-span-full">
                <CourseCard
                  course={course}
                  isSelected={selectedCourse === course.id}
                  onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                  delay={0.2 + index * 0.1}
                />
                
                <AnimatePresence>
                  {selectedCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <CourseDetails course={course} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Begin Your Yoga Journey?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Contact us today to learn more about our courses and find the perfect program for your needs.
              </p>
              <Button
                size="lg"
                className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating particles background */}
      <ParticlesBackground />
    </div>
  )
}

interface AnimatedStatProps {
  icon: React.ReactNode
  value: string
  label: string
  delay?: number
}

function AnimatedStat({ icon, value, label, delay = 0 }: AnimatedStatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4">{icon}</div>
      <motion.h3
        className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {value}
      </motion.h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{label}</p>
    </motion.div>
  )
}

interface CourseCardProps {
  course: any
  isSelected: boolean
  onClick: () => void
  delay?: number
}

function CourseCard({ course, isSelected, onClick, delay = 0 }: CourseCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "cursor-pointer rounded-2xl overflow-hidden border-none shadow-lg transition-all duration-300",
        course.gradient,
      )}
      onClick={onClick}
    >
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-full bg-gradient-to-r ${course.color} mr-4`}>
            <course.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">{course.shortDescription}</p>

        <div className="flex justify-between items-center">
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary/90">
            {isSelected ? "Show Less" : "Learn More"}
          </Button>
          <motion.div animate={{ rotate: isSelected ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

interface CourseDetailsProps {
  course: any
}

function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <motion.div
      className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {course.fullDescription && <p className="text-gray-700 dark:text-gray-300 text-lg">{course.fullDescription}</p>}

      {course.features && (
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Features:</h4>
          <ul className="space-y-2">
            {course.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {course.specialPrograms && (
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Special Programs:</h4>
          <ul className="space-y-2">
            {course.specialPrograms.map((program: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{program}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {course.options && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Available Options:</h4>
          {course.options.map((option: any, index: number) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h5 className="text-lg font-semibold text-primary mb-2">{option.title}</h5>
              <ul className="space-y-1">
                {option.details.map((detail: string, detailIndex: number) => (
                  <li key={detailIndex} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

