"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  once?: boolean
  className?: string
}

export function AnimatedSection({ children, delay = 0, once = true, className = "" }: AnimatedSectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

