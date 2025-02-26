import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const ContactInfo = ({ icon: Icon, title, children }) => (
  <div className="flex flex-row gap-4 md:gap-6 items-center">
    <Icon size={30} className="text-[#B88E2F]" />
    <div className="flex flex-col">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const FormInput = ({ label, type = "text", placeholder }) => (
  <div className="w-full">
    <label className="text-base font-semibold block mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-12 px-4 border rounded-lg border-gray-300 focus:border-[#B88E2F] focus:outline-none"
    />
  </div>
);

export default function Contact() {
  return (
    <>
      <div className="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl md:text-4xl font-bold">Contact</h1>
        <div className="flex flex-row gap-2 items-center mt-2">
          <h2 className="text-sm md:text-base">Home</h2>
          <IoIosArrowForward />
          <p className="text-sm md:text-base">Contact</p>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-base md:text-lg text-gray-600">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <ContactInfo icon={FaLocationDot} title="Address">
              236 5th SE Avenue, New York NY10000, United States
            </ContactInfo>

            <ContactInfo icon={FaPhoneAlt} title="Phone">
              Mobile: +(84) 546-6789
              <br />
              Hotline: +(84) 456-6789
            </ContactInfo>

            <ContactInfo icon={IoTime} title="Working Time">
              Monday-Friday: 9:00 - 22:00
              <br />
              Saturday-Sunday: 9:00 - 21:00
            </ContactInfo>
          </div>

          <div className="lg:w-1/2">
            <form className="flex flex-col gap-6">
              <FormInput 
                label="Your Name"
                placeholder="Eg. John Smith"
              />
              <FormInput 
                label="Email Address"
                type="email"
                placeholder="Eg. john@example.com"
              />
              <FormInput 
                label="Subject"
                placeholder="This is optional"
              />
              <div className="w-full">
                <label className="text-base font-semibold block mb-2">Message</label>
                <textarea
                  placeholder="Hi! I'd like to ask about"
                  className="w-full h-32 px-4 py-3 border rounded-lg border-gray-300 focus:border-[#B88E2F] focus:outline-none resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#9e7829] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}