
import React from 'react';
import Link from 'next/link';

const LoginHeader = () => {
  return (
    <div className="text-right">
      <Link href="/signup" className="text-gray-600 hover:text-gray-900">
        Sign up
      </Link>
    </div>
  );
};

export default LoginHeader;
