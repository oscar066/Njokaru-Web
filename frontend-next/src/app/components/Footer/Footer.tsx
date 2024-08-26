import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='bg-white text-gray-800 py-4 font-serif'>
            <div className='container mx-auto px-4 text-center text-sm'>
                <p>&copy; {new Date().getFullYear()} NJOKARU. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;