"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutUs() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center max-w-3xl pt-4 mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl p-4 font-bold gradient-text">About Kathmandu Yoga</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to <span className="text-primary font-semibold">Kathmandu Yoga</span>, where we blend ancient
              wisdom with modern lifestyle to help you achieve holistic well-being.
            </p>
          </div>
        </AnimatedSection>

        {/* About Content */}
        <div className="mb-16">
          <AnimatedSection delay={0.2}>
            <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="p-8 md:p-10">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Founded by <span className="text-primary font-semibold">Sannyasi Premananda</span> in 1996, our
                  journey began with a deep passion for yoga and its transformative power. After earning his{" "}
                  <span className="text-primary font-semibold">M.A. in Yoga Psychology</span> with first-class honors
                  from the prestigious <span className="text-primary font-semibold">Bihar School of Yoga</span> in 2000,
                  Sannyasi Premananda has dedicated his life to sharing the profound benefits of yoga with the world.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection delay={0.3}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/static/images/founder.jpg" 
                alt="Premananda (Shiva Basyal)" 
                fill 
                className="object-contain" 
                style={{ padding: '1rem' }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Our Founder/Instructor</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="text-primary font-semibold">Premananda (Shiva Basyal)</span> is the Founder/Instructor
                of Kathmandu Yoga. He holds an{" "}
                <span className="text-primary font-semibold">M.A. in Yoga Psychology</span> from Bihar Yoga Bharati (the
                First Yoga University in the World), India, and is the first registered and certified yoga master in
                Nepal. With over <span className="text-primary font-semibold">27 years of experience</span> in yoga, he
                has successfully applied his expertise to various sectors, including government agencies, INGOs, NGOs,
                and private sectors in health and education. He is also an M.A. in Sociology from Tribhuvan University,
                Kathmandu, Nepal.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Premananda is initiated as a <span className="text-primary font-semibold">Karma Sannyasi</span> by his
                Guru, <span className="text-primary font-semibold">Paramhamsa Niranjanananda Saraswati</span>. Kathmandu
                Yoga follows the techniques systematized by{" "}
                <span className="text-primary font-semibold">Paramahamsa Satyananda Saraswati</span>, the Founder of
                Satyananda Yoga/Bihar Yoga Tradition.
              </p>
              <div className="pt-2">
                <Button variant="outline" className="group" asChild>
                  <Link href="http://www.biharyoga.net" target="_blank" rel="noopener noreferrer">
                    Visit Bihar Yoga
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection delay={0.5}>
            <Card className="h-full border-none shadow-xl overflow-hidden card-gradient-2">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold gradient-text">Our Mission</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At Kathmandu Yoga, our mission is to create a welcoming and inclusive space where everyone—from
                    beginners to advanced practitioners—can explore the transformative power of yoga. We believe yoga is
                    not just a physical practice but a way of life that nurtures the body, mind, emotion and soul. Our
                    goal is to empower you to live a healthy, happy and harmonious life through the understanding,
                    practice and application of yoga in every moment of life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Card className="h-full border-none shadow-xl overflow-hidden card-gradient-1">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold gradient-text">Our Core Values</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At the heart of Kathmandu Yoga, our core values are: awareness, inclusivity, and holistic
                    well-being. We are committed to creating a supportive community where everyone feels valued and
                    respected. Our compassionate instructors guide you with personalized attention, ensuring your yoga
                    journey to its fulfillment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* What Sets Us Apart */}
        <AnimatedSection delay={0.7}>
          <Card className="border-none shadow-xl overflow-hidden card-gradient-3 mb-20">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold gradient-text mb-6">What Sets Us Apart</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                What makes Kathmandu Yoga unique is our deep-rooted connection to the Satyananda Yoga Tradition. This
                tradition, rooted in ancient wisdom, emphasizes the integration of experience and expression of yoga to
                achieve harmony in life. Our classes are designed to be accessible to all, whether you're a beginner or
                an experienced practitioner. We also offer online classes, making yoga accessible to anyone, anywhere.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={0.8}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-t-4 border-primary p-8 md:p-10">
            <h2 className="text-3xl font-bold gradient-text mb-10 flex items-center">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  What kind of yoga do you teach?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We follow the systems of teaching of Satyananda Yoga/Bihar Yoga founded by Paramhamsa Satyananda
                    Saraswati, giving more emphasis to the particular need and interest of aspirants.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    <Link
                      href="http://www.biharyoga.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center"
                    >
                      www.biharyoga.net <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    Considering Yoga NOT just as science of body but as science of life.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-bold italic">
                    EXPERIENCE GOOD
                    <br />
                    EXPRESS GOOD
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  What should I wear?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Any loose and comfortable clothing. Natural fabrics like cotton are best.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  Do I need to bring a mat?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We provide clean and hygienic mats. If you want to bring your own mat, you can bring it.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  What ages do you teach?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We teach all ages aspirants. We have well designed packages suited to different age groups:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Custom programs for specific age groups</li>
                    <li>Packages tailored to individual capacities</li>
                    <li>Specialized solutions for common age-related challenges</li>
                    <li>CCYS (Certification Course on Yogic Studies) program for easier progression</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  I am pregnant, is it safe to practice yoga?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Yes. Our specialized prenatal package includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Trimester-specific modifications (1-3, 4-6, 7-9 months)</li>
                    <li>Enhanced yoga nidra practices</li>
                    <li>Postnatal recovery support</li>
                    <li>Mother-child wellness techniques</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  Is it a residential yoga school?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    No. We don't have residential facilities currently. Nearby accommodation options include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Hotels</li>
                    <li>Service apartments</li>
                    <li>Guest houses</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  Do you provide any training?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We offer comprehensive training programs:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>30-200 hour intensive courses</li>
                    <li>Traditional scripture-based philosophy</li>
                    <li>Practical theory integration</li>
                    <li>Historical context and principles</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  I have some health issues. Can I still practice Yoga?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Yes, with our therapeutic approach:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Customized practice selection</li>
                    <li>Health condition-specific modifications</li>
                    <li>Expert-guided safe progression</li>
                    <li>Integrated wellness monitoring</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  What is the method of teaching?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our instructional methodology focuses on:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Auditory learning emphasis</li>
                    <li>Awareness development</li>
                    <li>Concentration enhancement</li>
                    <li>Experiential understanding</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg">
                  Can I record the session in the classroom?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">No. Our policy requires:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>No recording devices during sessions</li>
                    <li>Mobile phones turned off</li>
                    <li>Focused participation</li>
                    <li>Respect for communal learning space</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={1.0}>
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold gradient-text mb-6">Ready to Begin Your Yoga Journey?</h3>
            <Button
              size="lg"
              className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

