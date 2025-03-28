import Image from "next/image"
import Link from "next/link"
import { Code, BookOpen, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-12 pb-12">
      {/* Hero Section - Simpler design */}
      <section className="w-full topContentBg py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              About TutorialsByte
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="max-w-2xl text-lg text-slate-800 dark:text-slate-300">
              Empowering developers with quality programming tutorials and resources
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Simple version */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-4 text-slate-500 dark:text-slate-300">
            <p>
              TutorialsByte was founded with a simple mission: to create high-quality programming tutorials that are
              easy to understand and implement. We believe that learning to code should be accessible to everyone,
              regardless of their background or experience level.
            </p>
            <p>
              What started as a personal blog has grown into a comprehensive resource for developers at all stages of
              their journey. Our focus is on providing practical, hands-on tutorials that help you build real-world
              skills.
            </p>
            <p>
              We're particularly passionate about helping aspiring developers prepare for technical interviews and land
              their dream jobs in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer - Simplified */}
      <section className="bg-slate-100 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Programming Tutorials</h3>
              <p className="text-slate-500 dark:text-slate-300">
                Step-by-step guides on various programming languages, frameworks, and technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Interview Preparation</h3>
              <p className="text-slate-500 dark:text-slate-300">
                Resources to help you ace technical interviews with practice problems and solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Learning Resources</h3>
              <p className="text-slate-500 dark:text-slate-300">
                Curated learning paths and resources to guide your programming journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder - Simple version */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-8">
            About the Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-600">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Nitesh - Founder of TutorialsByte"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Nitesh</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Lead Instructor</p>
              <div className="text-slate-500 dark:text-slate-300 space-y-3">
                <p>
                  Hi, I'm Nitesh! I'm a software engineer with a passion for teaching and helping others succeed in
                  their programming journey.
                </p>
                <p>
                  With experience in web development and a background in computer science, I created TutorialsByte to
                  share my knowledge and help aspiring developers build their skills and prepare for technical
                  interviews.
                </p>
                <p>
                  My teaching philosophy is simple: break down complex concepts into digestible pieces, focus on
                  practical applications, and provide plenty of hands-on examples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision - Simple */}
      <section className="bg-slate-100 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">Our Vision</h2>
            <p className="text-slate-500 dark:text-slate-300 text-lg mb-8">
              We're building a comprehensive learning platform that will help developers at all stages of their career
              journey master programming skills and excel in their careers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">For Beginners</h3>
                <p className="text-slate-500 dark:text-slate-300">
                  Clear, structured learning paths to build a solid foundation in programming.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">For Professionals</h3>
                <p className="text-slate-500 dark:text-slate-300">
                  Advanced tutorials and interview preparation resources to level up your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Simplified */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="myNav rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Have questions or suggestions? We'd love to hear from you!</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

