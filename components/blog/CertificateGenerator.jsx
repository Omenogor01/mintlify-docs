import jsPDF from 'jspdf';

export const CertificateGenerator = ({ userName, courseName, date }) => {
  const generateCertificate = () => {
    const doc = new jsPDF();
    
    // Certificate design
    doc.setFontSize(22);
    doc.text('Certificate of Completion', 105, 40, null, null, 'center');
    
    doc.setFontSize(16);
    doc.text(`Awarded to ${userName}`, 105, 60, null, null, 'center');
    doc.text(`For successfully completing ${courseName}`, 105, 75, null, null, 'center');
    doc.text(`Date: ${date}`, 105, 90, null, null, 'center');

    // Border
    doc.setLineWidth(1.5);
    doc.rect(20, 20, 170, 120);
    
    doc.save(`${userName}-${courseName}-certificate.pdf`);
  };

  return (
    <div className="text-center p-6 bg-blue-50 rounded-lg">
      <button
        onClick={generateCertificate}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Download PDF Certificate
      </button>
    </div>
  );
};