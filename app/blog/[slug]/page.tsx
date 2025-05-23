import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Rodrigo Haziel Campos Valdes`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-24">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 pl-0">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <article className="prose prose-purple max-w-none">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image
                src="/IMG_20250106_005435_771.webp?height=128&width=128"
                alt="Rodrigo Haziel Campos Valdes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">Rodrigo Haziel Campos Valdes</h3>
              <p className="text-muted-foreground">Web Developer & WorldSkills Competitor</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
