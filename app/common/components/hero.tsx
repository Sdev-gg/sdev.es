import React from 'react';

export default function hero() {
  return (
    <section className="border-b border-gray-700 z-40 relative text-gray-50 py-16 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto flex flex-col items-center">
      {/* 
           <h1 className="lg:leading-[5rem] text-4xl lg:text-7xl text-center w-full">
        Digitaliza tu <br />
        content for your <br />
      </h1>
      <div className="w-max flex flex-col mx-auto mt-0">
        <span className="text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text underline text-4xl lg:text-7xl">
          proyecto
          <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-700"></div>
        </span>
      </div>
      */}

      <h1 className="py-0 text-[13vw] text-center sm:text-8xl leading-none select-none tracking-tightest font-extrabold cursor-pointer w-fit flex flex-col items-center">
        <span
          data-content="You image."
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1"
        >
          <span
            className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1
      
          
          "
          >
            {' '}
            You image.
          </span>
        </span>
        <span
          data-content="We create."
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-2">
            {' '}
            We create.
          </span>
        </span>
        <span
          data-content="We mantain."
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-3">
            {' '}
            We mantain.
          </span>
        </span>
      </h1>

      <p className="text-center max-w-2xl mx-auto mt-2 text-gray-500">
        Tell us how would will be the perfect website for your project and we
        will build it. And we will deploy it
      </p>
      <div className="flex flex-row items-center gap-4 h-fit w-fit mt-4">
        <button className="flex items-center capitalize h-full p-2 px-8 hover:cursor-pointer text-gray-900 rounded mx-auto bg-white border-black border-[1px] hover:bg-gray-900 hover:text-gray-50 hover:border-gray-50 transition duration-300">
          Contact us
        </button>

        <button className="rounded capitalize mx-auto block bg-gradient-to-r p-[2px] from-red-500 to-red-700 transition duration-300">
          <div className="text-center h-full bg-gray-900 text-gray-50 rounded select-none p-2 cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 transition duration-300">
            Start your project now
          </div>
        </button>
      </div>
    </section>
  );
}
