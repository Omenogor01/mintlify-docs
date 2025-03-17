export const EmailHeaderAnalyzer = () => {
    const [headers, setHeaders] = useState('')
    const [analysis, setAnalysis] = useState(null)
  
    const analyzeHeaders = () => {
      // Implementation logic for header parsing
      const results = {
        spf: headers.includes('spf=pass'),
        dkim: headers.match(/dkim=pass/i) ? true : false,
        dmarc: headers.includes('dmarc=pass')
      }
      setAnalysis(results)
    }
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h3 className="text-lg font-bold mb-4">Email Header Inspector</h3>
        <textarea
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
          className="w-full p-3 border rounded mb-4 font-mono text-sm"
          placeholder="Paste email headers here..."
          rows="8"
        />
        <button
          onClick={analyzeHeaders}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Analyze Headers
        </button>
  
        {analysis && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className={`p-4 rounded ${analysis.spf ? 'bg-green-100' : 'bg-red-100'}`}>
              SPF: {analysis.spf ? '✓ Pass' : '✗ Fail'}
            </div>
            <div className={`p-4 rounded ${analysis.dkim ? 'bg-green-100' : 'bg-red-100'}`}>
              DKIM: {analysis.dkim ? '✓ Pass' : '✗ Fail'}
            </div>
            <div className={`p-4 rounded ${analysis.dmarc ? 'bg-green-100' : 'bg-red-100'}`}>
              DMARC: {analysis.dmarc ? '✓ Pass' : '✗ Fail'}
            </div>
          </div>
        )}
      </div>
    )
  }