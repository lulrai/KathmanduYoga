import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Kathmandu Yoga | Journey to Wellness",
  description:
    "At Kathmandu Yoga, we believe in the power of yoga to transform lives. We offer classes for all levels, from beginners to advanced practitioners. Join us on the mat and start your journey to wellness today!",
  openGraph: {
    title: "Kathmandu Yoga | Journey to Wellness",
    description:
      "At Kathmandu Yoga, we believe in the power of yoga to transform lives. We offer classes for all levels, from beginners to advanced practitioners. Join us on the mat and start your journey to wellness today!",
    images: ["/images/everest-banner.jpg"],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kathmandu Yoga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'