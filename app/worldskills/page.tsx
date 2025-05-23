import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "WorldSkills Lyon 2024 | Rodrigo Haziel Campos Valdes",
  description:
    "Learn about Rodrigo's journey to WorldSkills Lyon 2024 and his preparation for the Web Technologies competition.",
}

export default function WorldSkillsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">WorldSkills Lyon 2024</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My journey to the world's largest skills competition.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Road to Lyon</h2>
          <p className="text-muted-foreground">
            WorldSkills is the global hub for skills excellence and development, raising the profile and recognition of
            skilled professionals worldwide. The competition brings together young people from all corners of the globe
            to compete in their chosen skill.
          </p>
          <p className="text-muted-foreground">
            My journey to WorldSkills Lyon 2024 began with local competitions, followed by national selections where I
            had to demonstrate my autonomous mobile robotics coding skills under time pressure. After months of intense preparation and
            multiple rounds of competition, I was selected to represent my country in the Autonomous Mobile Robotics category.
          </p>
          <p className="text-muted-foreground">
            The competition in Lyon will test my abilities in programming, responsive design,
            accessibility, performance optimization, and problem-solving - all within strict time constraints.
          </p>
          <div className="pt-4">
            <Link href="https://worldskills.org/skills/id/133/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Learn More About Autonomous Mobile Robotics at WorldSkills
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="/opening_ceremony_worldskills.jpg?height=400&width=600"
            alt="WorldSkills Lyon 2024"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">My Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Training</CardTitle>
                <CardDescription>Honing my autonomous mobile robotics skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I've been working with industry experts to refine my technical skills, focusing on modern robotics
                  technologies, performance optimization, and accessibility standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mental Preparation</CardTitle>
                <CardDescription>Building focus and resilience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Working under time pressure requires mental strength. I've been practicing mindfulness techniques and
                  simulating competition conditions to prepare for the stress of the event.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mock Competitions</CardTitle>
                <CardDescription>Simulating the real experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular practice competitions with strict time limits help me prepare for the actual event. These
                  simulations include surprise requirements and technical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Competition Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Date</th>
                  <th className="border p-3 text-left">Activity</th>
                  <th className="border p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">September 10, 2024</td>
                  <td className="border p-3">Opening Ceremony</td>
                  <td className="border p-3">Official start of WorldSkills Lyon 2024</td>
                </tr>
                <tr>
                  <td className="border p-3">September 11, 2024</td>
                  <td className="border p-3">Familiarization</td>
                  <td className="border p-3">Getting acquainted with the competition area and equipment</td>
                </tr>
                <tr>
                  <td className="border p-3">September 12-14, 2024</td>
                  <td className="border p-3">Competition Days</td>
                  <td className="border p-3">Autonomous Mobile Robotics competition modules</td>
                </tr>
                <tr>
                  <td className="border p-3">September 15, 2024</td>
                  <td className="border p-3">Closing Ceremony</td>
                  <td className="border p-3">Announcement of results and medal ceremony</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
