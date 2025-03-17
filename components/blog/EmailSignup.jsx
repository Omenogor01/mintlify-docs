export const EmailSignup = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add newsletter subscription logic
      setSubscribed(true);
    };
  
    return (
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">📧 Email Mastery Newsletter</h3>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-600">Thanks for subscribing!</p>
        )}
      </div>
    );
  };