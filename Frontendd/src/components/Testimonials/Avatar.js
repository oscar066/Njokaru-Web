import React from 'react';

const Avatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white text-xl font-bold">
      {initials}
    </div>
  );
};

export default Avatar;