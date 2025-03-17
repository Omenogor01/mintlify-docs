export const ApiPlayground = ({ endpoints }) => {
    const [selectedEndpoint, setEndpoint] = useState(endpoints[0]);
    const [response, setResponse] = useState(null);
  
    const executeRequest = async () => {
      const res = await fetch(selectedEndpoint.url, {
        method: selectedEndpoint.method
      });
      setResponse({
        status: res.status,
        data: await res.json()
      });
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4 mb-6">
          <select 
            onChange={(e) => setEndpoint(endpoints.find(ep => ep.id === e.target.value))}
            className="p-2 border rounded"
          >
            {endpoints.map(ep => (
              <option key={ep.id} value={ep.id}>
                {ep.method.toUpperCase()} {ep.path}
              </option>
            ))}
          </select>
          <button
            onClick={executeRequest}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Send Request
          </button>
        </div>
        {response && (
          <div className="border rounded overflow-hidden">
            <div className={`p-3 ${response.status >= 400 ? 'bg-red-100' : 'bg-green-100'}`}>
              Status: {response.status}
            </div>
            <pre className="p-4 overflow-x-auto">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  };