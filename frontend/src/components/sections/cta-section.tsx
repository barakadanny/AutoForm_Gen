import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-purple-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to transform how you collect and analyze data?</h2>
              <p className="mt-4 text-purple-100 text-lg">
                Join forward-thinking teams using AI to build better forms and get smarter insights. Start free, no credit card required.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
