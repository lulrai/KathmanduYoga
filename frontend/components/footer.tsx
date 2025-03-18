import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kathmandu Yoga</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your journey to explore Health, Happiness, and Harmony starts here.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook" disabled>
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" disabled>
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram" disabled>
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-tradition"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
                >
                  Our Tradition
                </Link>
              </li>
              <li>
                <Link
                  href="/yoga-chakra"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
                >
                  Yoga Chakra
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+977 9851168145</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">kathmanduyoga108@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Kathmandu Yoga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

