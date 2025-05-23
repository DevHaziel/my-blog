import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Rodrigo Haziel Campos Valdes",
  description: "Read about Rodrigo's journey to WorldSkills Lyon 2024 and his experiences in web technologies.",
}

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Blog</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Follow my journey to WorldSkills Lyon 2024 and learn about web technologies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
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
    </div>
  )
}
