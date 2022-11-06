import React from 'react';

export default function Companies() {
  return (
    <section className="text-center border-b border-gray-700 z-40  text-gray-50 py-8 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
      <h2 className="text-gray-200 text-xl font-medium">Trusted by</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-12 max-w-2xl mx-auto items-center">
        <img width="200px" src="/companies/wonking.png" alt="" />
      </div>
    </section>
  );
}
