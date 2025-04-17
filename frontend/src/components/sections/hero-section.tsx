import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Bot, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 -z-10" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Form Builder
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Build forms with AI, <span className="text-purple-600">get insights instantly.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Describe your form in plain English, and our AI builds it in seconds. Then chat with your data to uncover powerful insights. No coding required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          </motion.div>

          <motion.div 
            className="relative lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 h-full w-full flex items-center justify-center p-6">
              <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 pointer-events-none select-none">
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
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pointer-events-none"
                        rows={3}
                        placeholder="I need a customer feedback form with fields for name, email, rating, and comments..."
                      ></textarea>
                    </div>
                    <div className="pt-2">
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center pointer-events-none">
                        <Bot className="h-4 w-4 mr-2" />
                        Generate Form
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <div className="bg-purple-600 text-white text-xs py-1 px-2 rounded-md shadow-md flex items-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="flex items-center"
                    >
                      <BarChart3 className="h-3 w-3 mr-1" />
                      <span>AI analyzing...</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}