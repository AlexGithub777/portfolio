import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-8">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <Star className="w-5 h-5 text-gray-300" />
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Welcome to my Portfolio!</h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
          This is the homepage of Alex Scott's portfolio. You can navigate through the links above to learn more about
          me, view my projects, read my blog, or get in touch.
        </p>

        <Button
          variant="secondary"
          className="bg-gray-200 text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-md font-medium"
        >
          Click me
        </Button>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-gray-700">
        <p className="text-center text-gray-400 text-sm">© 2025 Alex Scott. All rights reserved.</p>
      </footer>

      {/* Bottom left N */}
      <div className="absolute bottom-6 left-6">
        <span className="text-gray-400 text-sm font-medium">N</span>
      </div>
    </div>
  )
}
