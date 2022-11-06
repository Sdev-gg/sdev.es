import React from 'react';

export default function Pricing() {
  return (
    <section className="z-40 relative text-gray-50 py-16 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto ">
      <h2 className="text-4xl text-center w-full font-medium">
        Make the wise descision <br />
        for your business
      </h2>
      <p className="py-4 text-gray-500 font-light max-w-md text-center mx-auto">
        Choose from 3 affordable packages
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mt-2 gap-4 mx-auto  items-stretch text-left text-gray-400 lg:h-[500px]">
        <div className="bg-gray-800 rounded-lg p-8 xl:col-start-2 flex flex-col">
          <small className="mb-8 block">Only developing</small>
          <small className="mb-0 block">Starting from..</small>
          <p className="text-4xl text-white mb-4">
            $25<span className="text-sm"></span>
          </p>
          <p className="mb-4 text-white">What&apos;s included</p>
          <p className="mb-2 block">1 month of free hosting</p>
          <p className="mb-2 block">1 month of maintenance</p>
          <p className="mb-2 block">1 month of analytics</p>
          <p className="mb-2 block">All the changes you request</p>
          <p className="mb-2 block">Free design</p>
          <button className="w-full text-gray-500 px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-white hover:border-white rounded-lg mr-2 mt-auto transition duration-300">
            Get Started
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col">
          <small className="mb-8 block">Hosting</small>
          <small className="mb-0 block">Starting from...</small>
          <p className="text-4xl text-white mb-4">
            $20<span className="text-sm">/month</span>
          </p>

          <p className="mb-4 text-white">What&apos;s included</p>
          <p className="mb-2 block">Full hosting</p>
          <p className="mb-2 block">DDOS security</p>
          <p className="mb-2 block">Includes analytics plan</p>
          <p className="mb-2 block">Full maintenance</p>
          <p className="mb-2 block">Premium support</p>
          <button className="rounded-lg mr-2 mt-auto bg-gradient-to-r w-full px-[2px] py-[2px] from-red-500 to-red-700 transition duration-300 ">
            <div className="text-center px-4 py-2.5 h-full bg-gray-800 hover:text-white text-gray-300 rounded select-none  cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 transition duration-300">
              Get Started
            </div>
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col">
          <small className="mb-8 block">Analytics</small>
          <p className="text-4xl text-white mb-4">
            $5<span className="text-sm">/month</span>
          </p>
          <small className="mb-8 block">
            See the analytics of your website in real time.
          </small>
          <p className="mb-4 text-white">What&apos;s included</p>
          <p className="mb-2 block">Analytics panel</p>
          <button className="w-full text-gray-500 px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-white hover:border-white rounded-lg mr-2 mt-auto transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
