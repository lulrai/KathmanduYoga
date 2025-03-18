"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Our Tradition", path: "/our-tradition" },
  { name: "Yoga Chakra", path: "/yoga-chakra" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2",
        isScrolled ? "" : "py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-48 mr-2 overflow-hidden">
            <Image src="/static/images/Logo.jpg" alt="Kathmandu Yoga Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                pathname === item.path
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary-foreground",
              )}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          {/* <Button variant="default" size="sm" className="ml-4 rounded-full font-medium" asChild>
            <Link href="/contact">Book a Class</Link>
          </Button> */}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors",
                    pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" size="default" className="mt-4 rounded-full font-medium w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book a Class
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

