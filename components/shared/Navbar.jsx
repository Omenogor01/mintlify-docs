export const Navbar = () => (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-blue-600">
            Email Mastery
          </a>
          <div className="space-x-6">
            <a href="/courses" className="text-gray-700 hover:text-blue-600">
              Courses
            </a>
            <a href="/tools" className="text-gray-700 hover:text-blue-600">
              Tools
            </a>
          </div>
        </div>
      </div>
    </nav>
  );