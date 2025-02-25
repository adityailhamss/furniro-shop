import React from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const help = [
  { name: "Help", href: "#" },
  { name: "Payment Options", href: "#" },
  { name: "Return", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export default function FooterLinks() {
  return (
    <>
      <div className="flex flex-col gap-10 py-5 lg:py-0">
        <h1 className="font-light text-2xl">Links</h1>
        {links.map((item) => (
          <a key={item.name} href={item.href} className="font-semibold text-lg">
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-10 py-5 lg:py-0">
        <h1 className="font-light text-2xl">Help</h1>
        {help.map((item) => (
          <a key={item.name} href={item.href} className="font-semibold text-lg">
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}
