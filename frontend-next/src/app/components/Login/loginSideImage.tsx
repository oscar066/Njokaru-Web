import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image3 from '../../../../public/Assets/daniel.jpg';

const LoginSideImage: React.FC = () => {
  return (
    <div className="w-1/2 bg-green relative py-2">
      <Link href="/" className="absolute inset-0">
          <Image
            src={image3}
            alt="Company"
            layout="fill"
            objectFit="cover"
          />
      </Link>
      <div className="absolute top-4 left-4">
        <Link href="/" className="text-white text-2xl font-bold flex items-center">
            NJOKARU
        </Link>
      </div>
    </div>
  );
};

export default LoginSideImage;
