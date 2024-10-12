
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-green-700">NJOKARU</span>
          </h1>
          <p className="text-xl text-gray-600 italic">
            Crafting nature's canvas one garden at a time
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="relative">
            <Image 
              src="/Assets/devon.jpg"
              alt="A team member working on a garden design"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">10+ Yrs</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-700 mb-4">
              Welcome to NJOKARU, where we bring your outdoor spaces to life. Our team of dedicated
              gardeners and maintenance professionals is passionate about creating and maintaining
              beautiful landscapes.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}