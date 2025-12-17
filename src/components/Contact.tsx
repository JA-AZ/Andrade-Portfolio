import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
    return (
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Have a project in mind? Let's talk.
            </p>
          </div>
          
        <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-teal-600 py-12 px-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
              I'm open to discussing web development projects, creative collaborations, or partnership opportunities. Feel free to reach out directly!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-teal-500 rounded-full mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-teal-50 font-medium">jairus.andrade@example.com</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-teal-500 rounded-full mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-teal-50 font-medium">+63 (912) 345-6789</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-teal-500 rounded-full mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-teal-50 font-medium">Tisa, Cebu City</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
