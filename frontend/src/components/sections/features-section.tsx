import { Sparkles, MousePointerClick, Code, Save, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-purple-600" />,
      title: "AI-generated fields",
      description:
        "Our AI automatically creates the right fields based on your form's purpose, with smart validation and logic.",
    },
    {
      icon: <MousePointerClick className="h-6 w-6 text-purple-600" />,
      title: "Drag-and-drop editor",
      description:
        "Easily customize your form with our intuitive drag-and-drop interface. No technical skills required.",
    },
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Export to code or embed",
      description: "Get clean HTML/CSS code or embed your form directly on your website with a simple snippet.",
    },
    {
      icon: <Save className="h-6 w-6 text-purple-600" />,
      title: "Save templates and reuse",
      description: "Create a library of your favorite forms and reuse them across projects with just a few clicks.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Fast and responsive",
      description: "All forms are lightning-fast and look great on any device, from desktop to mobile.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to create beautiful, functional forms without the hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-50 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
