import { Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export default function WhyChooseUsSection() {
  const benefits = [
    "10x faster form creation than traditional methods",
    "No coding knowledge required",
    "Smart field validation and error handling",
    "Seamless integration with your existing tools",
    "GDPR-compliant data collection",
    "Unlimited form submissions on all plans",
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-powered form builder saves you time, reduces errors, and helps you collect data more effectively.
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
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Jane Doe</h4>
                    <CardDescription>Marketing Director</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "FormAI has completely transformed how we collect customer feedback. What used to take days now takes
                  minutes, and the forms look so much better than what we were creating before. The AI suggestions are
                  spot-on!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Michael Smith</h4>
                    <CardDescription>Product Manager</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "I was skeptical about an AI form builder, but it's genuinely impressive. It understood exactly what I
                  needed and created a complex registration form in seconds. The time savings alone make it worth every
                  penny."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
