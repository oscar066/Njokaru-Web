import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='bg-[#1c6204] text-white py-4'>
            <div className='container mx-auto px-4 text-center'>
                <p>&copy; {new Date().getFullYear()} NJOKARU. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;