import React from 'react';

export const ProgressTracker = ({ steps, currentStep }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h3 className="text-lg font-bold mb-4">Course Progress</h3>
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center 
            ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            {index < currentStep ? '✓' : index + 1}
          </div>
          <span className="ml-3">{step.title}</span>
        </div>
      ))}
    </div>
  </div>
);