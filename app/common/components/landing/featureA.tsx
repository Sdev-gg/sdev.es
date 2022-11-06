import React from 'react';

export default function FeatureA() {
  return (
    <section className="grid grid-cols-12 gap-8 border-b border-gray-700 z-40  text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative items-right">
      {/* 
      <div className="col-span-12 lg:col-span-6">
        <div className="relative bg-white rounded-lg p-4 lg:w-9/12 text-gray-700 flex flex-col gap-2">
          <p className="text-gray-900 font-medium">Result</p>
          <small className="bloc">Here&apos;s what our AI came up with</small>
          <div className="relative bg-gray-100 rounded-lg p-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi.
          </div>
          <div className="relative bg-gray-100 rounded-lg p-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            rem sed ab quam obcaecati. Consectetur dolor, dignissimos ratione
            error ipsa cumque, provident molestiae eveniet vitae, tempore iure
            nostrum quas nisi.
          </div>
        </div>
      </div>
      */}
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-4xl font-medium">
          Migrate your website <br />
          to the new technologies <br />
          in a few clicks
        </h2>
        <p className="py-8 text-gray-500 font-light max-w-md">
          If you have already have your website in some technology such as
          wordpress or shopify, we will migrate your website to new
          technologies. The migration will take little time and we will present
          you a new design for free if you want to use it.
        </p>
        <button className="capitalize px-4 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:cursor-pointer text-gray-50 rounded-lg block">
          Start your project now
        </button>
      </div>
    </section>
  );
}
