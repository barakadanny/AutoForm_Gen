import { Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export default function WhyChooseUsSection() {
  const benefits = [
    "Create forms 10x faster than traditional methods",
    "Get AI-powered insights from your form data",
    "Chat with your data in real-time",
    "No coding or technical skills required",
    "Enterprise-grade security and compliance",
    "Unlimited forms and responses on all plans",
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart Inc",
      quote: "AutoForm Genius transformed our customer feedback process. We went from spending hours building forms to getting instant insights about our users' needs. The AI chat feature is a game-changer!",
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "GrowthLabs",
      quote: "What impressed me most was how the AI understood complex requirements. We needed a multi-step registration form with conditional logic, and it built it perfectly in seconds. The data analysis features are incredible.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Teams Choose AutoForm Genius</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of teams who've transformed their data collection and analysis with AI-powered forms.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.split(' ').map(n => n[0]).join('')}`} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <CardDescription>{testimonial.role} at {testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
