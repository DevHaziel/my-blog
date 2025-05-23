"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Input id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Input
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
