import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button className="bg-purple-600 hover:bg-purple-700">Return to Home</Button>
      </Link>
    </div>
  )
}
