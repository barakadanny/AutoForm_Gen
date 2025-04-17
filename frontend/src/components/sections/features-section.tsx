import { Sparkles, MousePointerClick, Code, Save, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-purple-600" />,
      title: "AI Form Generation",
      description: "Describe your form in plain English and watch as our AI instantly builds it with the right fields and logic.",
    },
    {
      icon: <MousePointerClick className="h-6 w-6 text-purple-600" />,
      title: "Data Analysis & Insights",
      description: "Get AI-powered insights from your form submissions. Ask questions about your data and get instant answers.",
    },
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Smart Integrations",
      description: "Connect with your favorite tools. Export data, trigger workflows, or embed forms anywhere.",
    },
    {
      icon: <Save className="h-6 w-6 text-purple-600" />,
      title: "Templates & Reuse",
      description: "Save your favorite forms as templates. Reuse and customize them across projects in seconds.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Real-time Analytics",
      description: "Track form performance, analyze responses, and get actionable insights in real-time.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Features for Smart Forms</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to build forms and get insights, powered by AI.
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
