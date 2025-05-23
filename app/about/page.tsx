import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About | Rodrigo Haziel Campos Valdes",
  description: "Learn more about Rodrigo Haziel Campos Valdes and his journey to WorldSkills Lyon 2024.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn more about my journey to WorldSkills Lyon 2024.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Rodrigo Haziel Campos Valdes"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Rodrigo Haziel Campos Valdes</h2>
          <p className="text-muted-foreground">
            I'm a passionate web developer from Mexico with a focus on creating innovative and accessible web solutions.
            My journey in web development started when I was 15 years old, and since then, I've been constantly learning
            and improving my skills.
          </p>
          <p className="text-muted-foreground">
            My dedication and hard work have led me to qualify for WorldSkills Lyon 2024, where I'll be representing my
            country in the Web Technologies competition. This is a dream come true and the culmination of years of
            practice and preparation.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, I enjoy sharing my knowledge with others, participating in hackathons, and contributing
            to open-source projects. I believe in the power of technology to transform lives and create positive change
            in the world.
          </p>
          <div className="pt-4">
            <Link href="/worldskills">
              <Button className="bg-purple-600 hover:bg-purple-700">Learn About My WorldSkills Journey</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Backend Development</h3>
              <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB, SQL, REST APIs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">Figma, Adobe XD, Responsive Design, Accessibility</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Performance Optimization</h3>
              <p className="text-sm text-muted-foreground">Web Vitals, Lighthouse, Webpack, Code Splitting</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Testing</h3>
              <p className="text-sm text-muted-foreground">Jest, React Testing Library, Cypress</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">DevOps</h3>
              <p className="text-sm text-muted-foreground">Git, GitHub, CI/CD, Vercel, Netlify</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold">Computer Science Degree</h3>
              <p className="text-sm text-muted-foreground">Universidad Nacional Autónoma de México, 2020-2024</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold">Web Development Certification</h3>
              <p className="text-sm text-muted-foreground">freeCodeCamp, 2021</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold">React Developer Certification</h3>
              <p className="text-sm text-muted-foreground">Meta, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
