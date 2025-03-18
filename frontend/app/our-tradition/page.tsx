"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function OurTradition() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection>
        <div className="text-center max-w-3xl pt-4 mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl p-4 font-bold mb-6 gradient-text">Our Tradition</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Explore the rich spiritual lineage that guides our teachings and practices.
            </p>
          </div>
        </AnimatedSection>

        {/* Saraswati Parampara */}
        <AnimatedSection delay={0.2}>
          <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 mb-16">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl font-bold gradient-text mb-6">The Saraswati Parampara</h2>

              <QuoteBlock quote="Knowledge is the eye of all beings, and without knowledge, the eye cannot see" />

              <div className="mt-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Saraswati Parampara of Shankaracharya refers to the spiritual lineage that emphasizes the pursuit
                  of knowledge and wisdom, tracing its roots back to the goddess Saraswati. This tradition is part of
                  the broader Dashnami Sannyasa tradition established by Adi Shankaracharya to unify various groups of
                  renunciates under Sanatan Dharma. The Saraswati Parampara focuses on the study and teaching of sacred
                  texts, philosophy, and the practice of meditation and yoga to attain self-realization and liberation
                  (moksha). It highlights the importance of intellectual and spiritual growth in the path to
                  enlightenment.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Spiritual Masters */}
        <div className="space-y-16">
          <SpiritualMaster
            name="Adi Guru Shankaracharya"
            image="/static/images/shankaracharya.jpg"
            quote="The world is unreal; only Brahman is real. Brahman is the world."
            description="Adi Guru Shankaracharya, an 8th-century Indian philosopher, revitalized Hinduism by consolidating Advaita Vedanta—a doctrine emphasizing the oneness of the individual soul (Atman) with the ultimate reality (Brahman). His influential commentaries on the Upanishads, Bhagavad Gita, and Brahma Sutras remain foundational to Hindu philosophy. Shankaracharya also established four mathas (monastic centers) across India, fostering learning and spirituality. His efforts unified Vedic knowledge, promoting a non-sectarian approach. Shankaracharya's legacy as a spiritual reformer and philosophical pioneer endures, marking him as one of India's greatest minds."
            delay={0.3}
          />

          <SpiritualMaster
            name="Swami Sivananda Saraswati"
            image="/static/images/Sivananda.png"
            quote="Serve, Love, Give, Purify, Meditate, Realize, Be Good, Do Good, Be Kind, Be Compassionate."
            description="Swami Sivananda Saraswati, born Kuppuswami in 1887 in Tamil Nadu, India, was a renowned yoga master and spiritual luminary. After practicing medicine for several years, he renounced worldly life to pursue spiritual enlightenment. In 1936, he founded the Divine Life Society in Rishikesh, which promotes yoga, Vedanta, and a holistic approach to well-being. Swami Sivananda authored over 200 books on yoga, Vedanta, and various subjects, leaving a lasting legacy in the field of spiritual and physical wellness. His teachings emphasized the importance of a balanced life through the principles of yoga, emphasizing physical health, mental clarity, and spiritual growth. One of his disciples, Swami Satyananda Saraswati, continued to spread his teachings worldwide. His message of 'Be Good, Do Good, Be Kind, Be Compassionate' continues to inspire millions to lead a divine life."
            delay={0.4}
            reverse
          />

          <SpiritualMaster
            name="Swami Satyananda Saraswati"
            image="/static/images/Satyananda.png"
            quote="Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
            description="Swami Satyananda Saraswati, born in 1923 in Almora, Uttarakhand, was a distinguished yoga exponent and spiritual luminary. As a young man, he became a disciple of Swami Sivananda Saraswati, immersing himself in rigorous spiritual training and service. In 1964, he founded the Bihar School of Yoga, which has become one of the foremost institutions for yoga education globally. Swami Satyananda's contributions to yoga literature are vast, with over 80 influential books such as 'Asana Pranayama Mudra Bandha' that are considered essential reading for yoga practitioners. Swami Satyananda's teachings emphasized a holistic approach to well-being, integrating physical, mental, and spiritual practices. He introduced and systematized practices like Yoga Nidra, which have gained worldwide acclaim for their profound benefits. Throughout his life, he traveled extensively, establishing ashrams and yoga centers, and spreading his message of self-realization and inner peace. Swami Satyananda's legacy lives on through the Bihar School of Yoga and the countless individuals and teachers he inspired, continuing to guide practitioners on their path to holistic health and spiritual enlightenment. He attained maha Samadhi at midnight of 5th December, 2009 in the presence of his disciples."
            delay={0.5}
          />

          <SpiritualMaster
            name="Swami Niranjanananda Saraswati"
            image="/static/images/Niranjanananda.png"
            quote="Yoga is not a practice confined to the mat. It is a way of life that influences your thoughts, words, and actions."
            description="Swami Niranjanananda Saraswati, born on February 14, 1960, in Rajnandgaon, Chhattisgarh, India, is a revered spiritual propagator and the designated successor of Swami Satyananda Saraswati. His spiritual journey began at a remarkably young age under the guidance of his guru. By the age of four, Swami Niranjanananda had already embarked on his yogic path at the Bihar School of Yoga. In 1971, he was initiated into Dashnami sannyasa, and for the next eleven years, he traveled extensively, sharing the teachings of yoga in Europe, Australia, and the Americas. His international experiences enriched his understanding and practice of yoga, contributing to his global perspective on spiritual and holistic health. Upon his return to India in 1983, Swami Niranjanananda assumed leadership roles at the Bihar School of Yoga and its associated institutions. His vision led to the establishment of Bihar Yoga Bharati in 1994, the first university dedicated to the study of yoga. He also founded the Yoga Publications Trust in 2000, ensuring the widespread dissemination of yogic knowledge. Swami Niranjanananda's contributions to literature include numerous books on yoga, tantra, and the Upanishads, providing valuable insights and guidance to practitioners worldwide. In recognition of his distinguished service in the field of yoga, he was awarded the Padma Bhushan in 2017, one of India's highest civilian honors. Swami Niranjanananda continues to inspire countless individuals, embodying the principles of yoga and leading them on a path of self-realization and inner peace."
            delay={0.6}
            reverse
          />

          <SpiritualMaster
            name="Swami Satyasangananda Saraswati"
            image="/static/images/Satyasangananda.png"
            quote="The journey of self-discovery is a lifelong path. Embrace each step with openness and certainty."
            description="Swami Satyasangananda Saraswati, born in 1953 in West Bengal, is a distinguished spiritual propagator and author. Initiated into the Dashnami sannyasa tradition by Swami Satyananda Saraswati in 1982, she has dedicated her life to the propagation of yoga and tantra. Known for her ability to present ancient teachings in a modern context, she has authored several influential books. In 2007, she became the Peethadhishwari of Rikhiapeeth, where she continues to promote holistic well-being and selfless service. Swami Satyasangananda's dedication to her guru's teachings and her work at Rikhiapeeth have made her an inspirational figure in the world of yoga and spirituality."
            delay={0.7}
          />
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold gradient-text mb-6">Experience Our Tradition</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Join us to experience the transformative teachings of this ancient lineage through our classes and
              workshops.
            </p>
            <Link
              href="/courses"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Courses
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

interface QuoteBlockProps {
  quote: string
}

function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <div className="flex items-center justify-center py-6 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary">
      <Quote className="h-8 w-8 text-primary/60 mr-4 flex-shrink-0" />
      <p className="text-lg font-medium italic text-gray-700 dark:text-gray-300">{quote}</p>
      <Quote className="h-8 w-8 text-primary/60 ml-4 flex-shrink-0 rotate-180" />
    </div>
  )
}

interface SpiritualMasterProps {
  name: string
  image: string
  quote: string
  description: string
  delay?: number
  reverse?: boolean
}

function SpiritualMaster({ name, image, quote, description, delay = 0, reverse = false }: SpiritualMasterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Adjust height for all Swami images except Shankaracharya
  const mobileHeightClass = image === "/static/images/shankaracharya.jpg"
    ? "h-[300px]"
    : "h-[450px]"  // Increased height for all Swami images

  // Adjust object position based on specific images
  const objectPositionClass = image === "/static/images/Sivananda.png" || image === "/static/images/Niranjanananda.png"
    ? "object-top"
    : "object-center"

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay }}
        className="relative z-10"
      >
        <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-0">
            <div
              className={`grid grid-cols-1 ${reverse ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-[auto_1fr]"} gap-0`}
            >
              <div className={`${reverse ? "md:order-2" : ""} relative ${mobileHeightClass} md:h-auto md:w-[400px]`}>
                <Image 
                  src={image || "/placeholder.svg"} 
                  alt={name} 
                  fill 
                  className={`object-cover ${objectPositionClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <h3 className="text-2xl font-bold text-white">{name}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6 hidden md:block">{name}</h3>

                <QuoteBlock quote={quote} />

                <div className="mt-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

