export const InteractiveLab = () => {
    const [recordInput, setRecordInput] = useState('')
    const [validationResult, setValidationResult] = useState(null)
  
    const validateSPF = (record) => {
      // Implementation for SPF validation logic
      return {
        valid: record.startsWith('v=spf1'),
        warnings: []
      }
    }
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4">DNS Record Validator</h3>
        <textarea
          value={recordInput}
          onChange={(e) => setRecordInput(e.target.value)}
          className="w-full p-3 border rounded mb-4 font-mono text-sm"
          placeholder="Paste your DNS record here..."
          rows="4"
        />
        <button 
          onClick={() => setValidationResult(validateSPF(recordInput))}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Validate Record
        </button>
        
        {validationResult && (
          <div className={`mt-4 p-4 rounded ${
            validationResult.valid ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <h4 className="font-bold mb-2">
              {validationResult.valid ? '✓ Valid Record' : '⚠ Invalid Record'}
            </h4>
            {validationResult.warnings.map((warning, i) => (
              <p key={i} className="text-sm text-yellow-700">{warning}</p>
            ))}
          </div>
        )}
      </div>
    )
  }