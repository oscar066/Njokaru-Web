import React from 'react';
import Link from 'next/link';

const SignupHeader: React.FC = () => {
  return (
    <div className="text-right">
      <Link href="/login" className="text-gray-600 hover:text-gray-900">
        Log in
      </Link>
    </div>
  );
};

export default SignupHeader;
