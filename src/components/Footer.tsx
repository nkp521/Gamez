import React from "react";

const Footer = () => (
  <footer className="w-full bg-white/5 backdrop-blur-md text-purple-300 text-sm py-4 mt-10 relative h-16">
    <div className="footer-brand">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        © {new Date().getFullYear()} NKP Industries
      </div>
    </div>

    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.128b6e76.svg"
          alt="Tailwind CSS"
          className="h-4 inline"
        />
      </a>
      <a href="https://mambaui.com/" target="_blank" className="ml-4" rel="noreferrer">
        <img
          src="https://mambaui.com/images/logo.svg"
          alt="Mamba UI"
          className="h-4 inline invert"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
