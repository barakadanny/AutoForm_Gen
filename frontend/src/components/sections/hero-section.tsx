import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Build forms with AI, <span className="text-purple-600">get insights instantly.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Describe your form in plain English, and our AI builds it in seconds. Then chat with your data to uncover powerful insights. No coding required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required • AI-powered insights included</span>
            </div>
          </div>
          <div className="relative lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 h-full w-full flex items-center justify-center p-6">
              <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-500">AI Form Builder</div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Form</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        rows={3}
                        placeholder="I need a customer feedback form with fields for name, email, rating, and comments..."
                      ></textarea>
                    </div>
                    <div className="pt-2">
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                        Generate Form
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2">
                  <div className="bg-purple-600 text-white text-xs py-1 px-2 rounded-md shadow-md">
                    <span className="block">AI generating...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}