export const DnsValidator = () => {
    const [record, setRecord] = useState('');
    const [result, setResult] = useState(null);
  
    const validateRecord = async () => {
      try {
        const response = await fetch('/api/validate-dns', {
          method: 'POST',
          body: JSON.stringify({ record })
        });
        setResult(await response.json());
      } catch (error) {
        setResult({ valid: false, error: "Validation failed" });
      }
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">DNS Record Validator</h3>
        <div className="space-y-4">
          <textarea
            value={record}
            onChange={(e) => setRecord(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="Enter DNS record here"
            rows="3"
          />
          <button
            onClick={validateRecord}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Validate Record
          </button>
          {result && (
            <div className={`p-3 rounded ${result.valid ? 'bg-green-100' : 'bg-red-100'}`}>
              {result.valid ? '✓ Valid Record' : `✗ Error: ${result.error}`}
            </div>
          )}
        </div>
      </div>
    );
  };