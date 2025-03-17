export const Header = () => (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold text-blue-600">
            EmailMastery
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/courses" className="text-gray-700 hover:text-blue-600">
              Courses
            </a>
            <a href="/tools" className="text-gray-700 hover:text-blue-600">
              Tools
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );