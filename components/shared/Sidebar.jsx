export const Sidebar = ({ children }) => (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-4">
        <h3 className="font-bold mb-2">Quick Links</h3>
        {children}
      </div>
    </div>
  );