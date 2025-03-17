export const Footer = () => (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Guides</h4>
            <ul className="space-y-2">
              <li><a href="/spf" className="text-gray-700">SPF Setup</a></li>
              <li><a href="/dkim" className="text-gray-700">DKIM Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-700">About Us</a></li>
              <li><a href="/contact" className="text-gray-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-700">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-700">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );