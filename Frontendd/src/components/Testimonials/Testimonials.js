import React from 'react';
import { Carousel } from 'react-bootstrap';
import Avatar from 'react-avatar';

function Testimonials() {
  return (
    <section className="isolate bg-customGray px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <Carousel>
          <Carousel.Item>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-auto mb-8 max-w-lg">
              <div className="flex items-center mb-4">
                <Avatar
                  name="John Doe"
                  size="100"
                  round={true}
                  className="w-15 h-15 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">John Doe</h4>
                  <p className="text-gray-600">CEO, Design Txt</p>
                  <p className="text-gray-600 mt-2">"Lorem ipsum dolor."</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-auto mb-8 max-w-lg">
              <div className="flex items-center mb-4">
                <Avatar
                  name="Michelle Njeri"
                  size="100"
                  round={true}
                  className="w-15 h-15 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">Michelle Njeri</h4>
                  <p className="text-gray-600">CTO, Mich ltd</p>
                  <p className="text-gray-600 mt-2">"Lorem ipsum"</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-auto mb-8 max-w-lg">
              <div className="flex items-center mb-4">
                <Avatar
                  name="Mark Nyoike"
                  size="100"
                  round={true}
                  className="w-15 h-15 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">Mark Nyoike</h4>
                  <p className="text-gray-600">CTO, Markus</p>
                  <p className="text-gray-600 mt-2">"Wonderful services "</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-auto mb-8 max-w-lg">
              <div className="flex items-center mb-4">
                <Avatar
                  name="Jayson Ndungu"
                  size="100"
                  round={true}
                  className="w-15 h-15 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">Jayson Ndungu</h4>
                  <p className="text-gray-600">CTO, Ayason</p>
                  <p className="text-gray-600 mt-2">"Good services and professionalism"</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
