import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Award, Globe, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogCarousel from "@/components/blog-carousel"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-500 to-black-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Rodrigo Haziel Campos Valdes
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Web Developer | WorldSkills Lyon 2024 Competitor
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
                    Learn More About Me
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Read My Blog
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src="/IMG_20250106_005435_771.webp?height=400&width=400"
                  alt="Rodrigo Haziel Campos Valdes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate web developer with a focus on creating innovative and accessible web solutions. My
                journey to WorldSkills Lyon 2024 represents years of dedication, learning, and growth in the field of
                web technologies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <Code className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-muted-foreground">
                Specialized in modern frameworks and technologies to build responsive, accessible websites.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Competitions</h3>
              <p className="text-muted-foreground">
                Multiple awards in national competitions leading to WorldSkills Lyon 2024 qualification.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <Globe className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Global Perspective</h3>
              <p className="text-muted-foreground">
                Collaborating with developers worldwide to exchange knowledge and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow my journey to WorldSkills Lyon 2024 through my blog posts.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-10">
            <BlogCarousel />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about my WorldSkills journey or want to collaborate? Reach out to me!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span> rodrigo.campos@example.com
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Location:</span> Mexico
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Social:</span> @rodrigohaziel
                </p>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, opportunities, or sharing my WorldSkills experience.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
