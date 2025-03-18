"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, NotebookIcon as Lotus } from "lucide-react"

// Yoga paths data
const yogaPaths = [
  {
    id: "hatha",
    title: "Hatha Yoga",
    description:
      "Hatha Yoga aims to purify and balance body and mind. It focuses on physical postures (asanas), breath control (pranayama), and shatkarmas to promote overall well-being. Hatha Yoga prepares the body for deeper spiritual practices and enhances physical strength and flexibility.",
    color: "from-green-500 to-emerald-600",
    icon: "🧘‍♀️",
    gradient: "card-gradient-1",
  },
  {
    id: "raja",
    title: "Raja (Ashtanga) Yoga",
    description:
      "Raja (Ashtanga) Yoga aims to harmonize mind, emotions, and spirit. It follows the 8-fold path (ashtanga) which includes ethical principles, physical postures, breath control, and deep meditation. This form of yoga helps attain self-mastery and mental clarity.",
    color: "from-blue-500 to-indigo-600",
    icon: "🧠",
    gradient: "card-gradient-2",
  },
  {
    id: "kriya",
    title: "Kriya Yoga",
    description:
      "Kriya Yoga aims to harmonize Prana (energy) in the body. It involves specific techniques of breath control and meditation to awaken spiritual energy and bring balance to the mind and body. Kriya Yoga is about direct experience, offering the practitioner an opportunity to feel goodness and positivity.",
    color: "from-purple-500 to-violet-600",
    icon: "✨",
    gradient: "card-gradient-4",
  },
  {
    id: "jnana",
    title: "Jnana Yoga",
    description:
      "Jnana Yoga aims to express goodness and positivity through the Head (mental expression). It fosters balanced intellectual expressions, proper understanding, mental clarity, and positive thoughts. This path is about wisdom, self-inquiry, and the pursuit of truth.",
    color: "from-yellow-500 to-amber-600",
    icon: "💡",
    gradient: "card-gradient-3",
  },
  {
    id: "bhakti",
    title: "Bhakti Yoga",
    description:
      "Bhakti Yoga aims to express goodness and positivity through the Heart (emotional expression). It emphasizes love, compassion, kindness, empathy, and generosity. Bhakti is the path of devotion and surrender to a higher power, cultivating an open and loving heart.",
    color: "from-red-500 to-rose-600",
    icon: "❤️",
    gradient: "card-gradient-5",
  },
  {
    id: "karma",
    title: "Karma Yoga",
    description:
      "Karma Yoga aims to express goodness and positivity through the Hands (physical expression; action). It teaches the importance of performing selfless, responsible, and mindful actions without attachment to the results. It is the yoga of service, where one seeks to act for the welfare of others.",
    color: "from-cyan-500 to-sky-600",
    icon: "🤲",
    gradient: "card-gradient-6",
  },
]

export default function YogaChakra() {
  const [activePath, setActivePath] = useState<string | null>(null)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection>
        <div className="text-center max-w-3xl pt-4 mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl p-4 font-bold mb-6 gradient-text">Yoga Chakra (Wheel of Yoga)</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Discover the interconnected paths of yoga that form a complete system for holistic well-being.
            </p>
          </div>
        </AnimatedSection>

        {/* Yoga Chakra Diagram */}
        <div className="relative mb-20 mx-auto max-w-3xl">
          <div className="relative w-[300px] sm:w-[445px] h-[300px] sm:h-[445px] mx-auto">
            <Image 
              src="/static/images/yogachakra.png" 
              alt="Yoga Chakra Diagram" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 300px, 445px"
              style={{ 
                objectFit: 'contain',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased'
              }}
              className="select-none"
            />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection delay={0.3}>
          <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 mb-16">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Lotus className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">The Complete System</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This is Experiential Yoga, where you experience goodness and positivity through Bahiranga Yoga. It
                    is also Expressive Yoga, where you express this goodness through Antaranga Yoga in your daily life.
                    This holistic approach is the essence of the Satyananda Yoga Tradition or Bihar Yoga Tradition,
                    where Yoga is viewed as the Science of Life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Yoga Paths */}
        <div className="mb-16">
          <AnimatedSection delay={0.4}>
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">The Six Paths of Yoga</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaPaths.map((path, index) => (
              <YogaPathCard
                key={path.id}
                path={path}
                delay={0.5 + index * 0.1}
                isActive={activePath === path.id}
                onClick={() => setActivePath(activePath === path.id ? null : path.id)}
              />
            ))}
          </div>
        </div>

        {/* Experiential vs Expressive */}
        <AnimatedSection delay={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-xl overflow-hidden card-gradient-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Bahiranga Yoga</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold">Experiential Yoga</span> - The outer practices of yoga (Bahiranga)
                  help you experience goodness and positivity. These include Hatha, Raja, and Kriya yoga, which prepare
                  the body and mind for deeper spiritual practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl overflow-hidden card-gradient-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Antaranga Yoga</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold">Expressive Yoga</span> - The inner practices of yoga (Antaranga) help
                  you express this goodness in daily life. These include Jnana (head/intellect), Bhakti
                  (heart/emotions), and Karma (hands/actions) yoga.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.9}>
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-6">Experience the Yoga Chakra</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Join us to explore the complete system of yoga and discover how these interconnected paths can transform
              your life.
            </p>
            <Button
              size="lg"
              className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/courses">
                Explore Our Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

interface YogaPathProps {
  path: {
    id: string
    title: string
    description: string
    color: string
    icon: string
    gradient: string
  }
  delay: number
  isActive: boolean
  onClick: () => void
}

function YogaPathCard({ path, delay, isActive, onClick }: YogaPathProps) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className={`cursor-pointer ${path.gradient} border-none shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300`}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{path.icon}</span>
            <h3 className="text-xl font-bold">{path.title}</h3>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isActive ? "auto" : "80px",
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{path.description}</p>
          </motion.div>

          {!isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
          )}

          <div className="mt-4 text-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary-foreground hover:bg-primary/90"
            >
              {isActive ? "Read Less" : "Read More"}
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

