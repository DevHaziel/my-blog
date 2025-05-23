"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-data"
import { useMobile } from "@/hooks/use-mobile"

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()

  const postsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const visiblePosts = blogPosts.slice(currentIndex * postsPerPage, currentIndex * postsPerPage + postsPerPage)

  return (
    <div className="relative">
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
        <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {visiblePosts.map((post) => (
          <Card key={post.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
            <div className="aspect-video relative">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-3 h-3 p-0 rounded-full ${currentIndex === index ? "bg-purple-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
