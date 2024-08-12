
import React from 'react';
import Avatar from 'react-avatar';

function TestimonialCard({ name, title, role, quote }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-auto mb-8 max-w-lg">
      <div className="flex items-center mb-4">
        <Avatar
          name={name}
          size="100"
          round={true}
          className="w-15 h-15 mr-4"
        />
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-gray-600">{title}</p>
          <p className="text-gray-600">{role}</p>
          <p className="text-gray-600 mt-2">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;