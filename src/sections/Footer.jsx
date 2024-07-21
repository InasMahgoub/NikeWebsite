import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit, provident
            del.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-md:mt-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat leading-normal font-medium text-2xl mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer"
                      href={link.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt=""
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>All Rights Reserved</p>
        </div>
        <p>Terms &amp; Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
