import React from 'react';

type Benefit = {
  image: string;
  title: string;
  description: string;
};

export default function Benefits() {
  const benefits: Array<Benefit> = [
    {
      image: '/icons.svg',
      title: 'Status panel',
      description: 'Monitor your web 24/7.',
    },
    {
      image: '/icons.svg',
      title: 'Analytics panel',
      description: 'See your web analytics in a user friendly panel.',
    },
    {
      image: '/icons.svg',
      title: 'Real time Analytics',
      description: 'See the analytics of your users in real time.',
    },
    {
      image: '/icons.svg',
      title: 'Manage panel',
      description: 'Manage your web, send messages to your users...',
    },
    {
      image: '/icons.svg',
      title: 'Support chat',
      description: 'Chat with the devs that mantain your web in real time',
    },
  ];
  const totalBenefits: number = benefits.length;
  return (
    <section className="border-b border-gray-700 z-40  text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
      <h2 className="text-4xl text-center w-full font-medium">
        {totalBenefits} exciting tools
      </h2>
      <p className="py-8 text-gray-500 font-light max-w-md text-center mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        minima eius qui.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-4 lg:gap-12 mx-auto items-center">
        {benefits.map((item, index) => (
          <div className="p-4 rounded-lg bg-gray-800 flex" key={index}>
            <img className="h-8 mr-4" src={item.image} />
            <div>
              <h3 className="mb-2">{item.title}</h3>
              <small className="text-light text-gray-400">
                {item.description}
              </small>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <a href="#" className="text-gray-500 text-center mt-12 block mx-auto">
        See all {totalBenefits} available tools
      </a>
      */}
    </section>
  );
}
