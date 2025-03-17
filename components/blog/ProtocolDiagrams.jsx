export const SMTPDiagram = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold mb-4">SMTP Communication Flow</h3>
      <img 
        src="/assets/images/smtp-flow.svg" 
        alt="SMTP protocol sequence diagram"
        className="w-full"
      />
      <div className="grid grid-cols-4 gap-4 mt-4 text-sm">
        <div className="text-center p-2 bg-blue-50 rounded">1. HELO</div>
        <div className="text-center p-2 bg-green-50 rounded">2. MAIL FROM</div>
        <div className="text-center p-2 bg-yellow-50 rounded">3. RCPT TO</div>
        <div className="text-center p-2 bg-purple-50 rounded">4. DATA</div>
      </div>
    </div>
  )