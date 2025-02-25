import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const socialLinks = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/yourfacebookpage" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/yourinstagrampage" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@yourtiktokpage" },
  { icon: <SiShopee />, href: "https://www.shopee.com/yourshopeepage" },
];

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-4 items-center">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
          <button className="hover:text-[#B88E2F] transition-colors duration-200">
            {social.icon}
          </button>
        </a>
      ))}
    </div>
  );
}
