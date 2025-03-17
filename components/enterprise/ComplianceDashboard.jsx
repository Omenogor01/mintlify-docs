export const ComplianceDashboard = ({ standards }) => {
    const [selectedStandard, setStandard] = useState('gdpr');
  
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex space-x-4 mb-6">
          {Object.keys(standards).map((standard) => (
            <button
              key={standard}
              onClick={() => setStandard(standard)}
              className={`px-4 py-2 rounded ${
                selectedStandard === standard 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {standard.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">Requirements</h4>
            <ul className="list-disc pl-6 space-y-2">
              {standards[selectedStandard].requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Implementation Status</h4>
            <div className="space-y-3">
              {standards[selectedStandard].status.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className={`px-2 py-1 rounded ${
                    item.complete ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.complete ? 'Implemented' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };