export const EmailSignup = ({ title, subtitle, buttonText }) => (
    <div className="bg-blue-50 p-8 rounded-lg text-center mt-12">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-3 rounded border"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </div>
  )