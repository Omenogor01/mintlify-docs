export const CardGroup = ({ children, cols = 3 }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
      {children}
    </div>
  );
  
  export const Card = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );