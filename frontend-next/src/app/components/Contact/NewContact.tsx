import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Phone, Mail, Clock, MapPin } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

interface FormData {
  fullName: string
  email: string
  phoneNumber: string
  serviceType: string
  message: string
}

interface SubmitStatus {
  type: 'success' | 'error'
  message: string
}

const ContactInfoCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
  <Card className="border-none shadow-none bg-green-50">
    <CardContent className="flex items-center space-x-4 p-4">
      <div className="rounded-full bg-green-100 p-3">
        <Icon className="h-6 w-6 text-green-700" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </CardContent>
  </Card>
)

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      serviceType: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: 'success', message: "Your message has been received. We'll get back to you soon!" })
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          serviceType: '',
          message: '',
        })
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit form. Please try again.' })
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-700 mb-4 font-serif">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We&apos;re here to help and answer any question you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ContactInfoCard
                icon={Phone}
                title="Phone"
                content="+254 719 686 913"
              />
              <ContactInfoCard
                icon={Mail}
                title="Email"
                content="njokaru@gardening.com"
              />
              <ContactInfoCard
                icon={Clock}
                title="Working Hours"
                content="Mon-Fri: 8:00 AM - 6:00 PM"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Location"
                content="Edenville Villas Phase 1, Kiambu"
              />
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.642767292865!2d36.8292854492139!3d-1.1833284212049473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d9486a3f407%3A0xb417fa1b9cc667!2sEdenville%20Villas%20Phase%201!5e1!3m2!1sen!2ske!4v1721255264803!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Business Location"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-green-700 font-serif">Send us a Message</h2>
            
            {submitStatus && (
              <Alert 
                variant={submitStatus.type === 'success' ? "default" : "destructive"} 
                className="mb-6"
              >
                {submitStatus.type === 'success' ? 
                  <CheckCircle2 className="h-4 w-4" /> : 
                  <AlertCircle className="h-4 w-4" />
                }
                <AlertTitle>
                  {submitStatus.type === 'success' ? 'Success' : 'Error'}
                </AlertTitle>
                <AlertDescription>{submitStatus.message}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="focus:ring-green-500 focus:border-green-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-green-500 focus:border-green-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="focus:ring-green-500 focus:border-green-500"
                    placeholder="+254 123 456 789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-gray-700">Service Type</Label>
                <Select onValueChange={handleSelectChange} value={formData.serviceType}>
                  <SelectTrigger className="focus:ring-green-500 focus:border-green-500">
                    <SelectValue placeholder="Select a service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Grass Trimming">Grass Trimming</SelectItem>
                    <SelectItem value="Lawn Mowing">Lawn Mowing</SelectItem>
                    <SelectItem value="Soil Treatment">Soil Treatment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="focus:ring-green-500 focus:border-green-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-green-700 hover:bg-green-600 text-white font-serif py-6"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}