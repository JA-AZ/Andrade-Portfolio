import React from "react";

const Footer: React.FC = () => {

  return (

    <footer className="bg-slate-950 text-slate-400 py-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-sm">

          &copy; {new Date().getFullYear()} Jairus Azer Andrade. All rights reserved.

        </p>

      </div>

    </footer>

  );

};

export default Footer;
