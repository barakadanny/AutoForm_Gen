import { MessageSquare, Wand2, Edit } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Describe your form",
      description: "Tell our AI what kind of form you need, including fields, validation, and purpose.",
    },
    {
      icon: <Wand2 className="h-10 w-10 text-purple-600" />,
      title: "AI builds it",
      description:
        "Our AI instantly generates a complete form based on your description, with all the fields and logic you need.",
    },
    {
      icon: <Edit className="h-10 w-10 text-purple-600" />,
      title: "You edit, publish, or embed",
      description:
        "Fine-tune your form if needed, then publish it online or embed it in your website with a simple code snippet.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Create forms in minutes, not hours, with our simple three-step process powered by artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-5 left-8 bg-white rounded-full p-2 shadow-sm border border-gray-100">
                {step.icon}
              </div>
              <div className="mt-6">
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                  Step {index + 1}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-gray-100 rounded-full">
            <div className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
              30 seconds average form creation time
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
