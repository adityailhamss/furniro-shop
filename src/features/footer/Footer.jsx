import React from "react";
import FooterLinks from "./components/FooterLinks";
import Newsletter from "./components/NewsLetter";
import SocialMedia from "./components/SocialMedia";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="border-b-2 border-gray-300 mb-10"></div>

      <div className="flex flex-col lg:flex-row lg:text-start text-center lg:justify-around">
        {/* Brand Info */}
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-2xl">Funiro.</h1>
          <p className="font-light">
            400 University Drive Suite 200 Coral<br />
            Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <FooterLinks />

        {/* Newsletter Section */}
        <Newsletter />
      </div>

      {/* Bottom Section */}
      <div className="pb-4 px-20 pt-10">
        <div className="border-b-2 border-gray-300 mb-6"></div>
        <div className="flex justify-between">
          <p className="text-gray-500">&copy; 2023 Funiro. All rights reserved.</p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
