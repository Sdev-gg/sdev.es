import React from 'react';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto">
      <div className="z-40 grid grid-cols-2 lg:grid-cols-4 gap-4   ">
        <div className="text-gray-600">
          <p className="text-white mb-8">Navigation</p>

          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
        </div>
        <div className="text-gray-600">
          <p className="text-white mb-8">Our Tools</p>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
        </div>
        <div className="text-gray-600">
          <p className="text-white mb-8">Legal</p>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
        </div>
        <div className="text-gray-600">
          <p className="text-white mb-8">Social</p>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
          <a href="#" className="text-sm mb-4 block">
            Footer Link
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center">
          <Logo />
          <p>sdev.gg &copy; 2022 All rights reserved</p>
        </div>
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=6716ccbe-2ecd-4cca-a4f1-4f6d520ef0c4"
          title="DMCA.com Protection Status"
          className="dmca-badge"
        />
        <img
          src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=6716ccbe-2ecd-4cca-a4f1-4f6d520ef0c4"
          alt="DMCA.com Protection Status"
        />
        <script
          src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
          async
          defer
        ></script>
      </div>
    </footer>
  );
}
