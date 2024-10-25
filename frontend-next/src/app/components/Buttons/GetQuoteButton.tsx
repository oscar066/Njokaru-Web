'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function QuoteButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-700 hover:bg-green-600 text-white">Get a Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-green-700">Get a Quote</DialogTitle>
          <DialogDescription>
            Fill out this form and we&apos;ll get back to you with a quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-green-700">Name</Label>
            <Input id="name" placeholder="Your name" required className="border-green-700 focus:ring-green-700" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-700">Email</Label>
            <Input id="email" type="email" placeholder="Your email" required className="border-green-700 focus:ring-green-700" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="text-green-700">Service</Label>
            <Input id="service" placeholder="Service you're interested in" required className="border-green-700 focus:ring-green-700" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-green-700">Additional Details</Label>
            <Textarea id="message" placeholder="Any additional details..." className="border-green-700 focus:ring-green-700" />
          </div>
          <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}