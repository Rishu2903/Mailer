import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { About, CustomButton, FAQ, Global, Testimonial } from '../components';
import {hero,sty} from "../assets/index"

import Service from './Service';
import Feature from '../components/Feature';
import Blog from './Blog';
import { circles } from '../config/navLink';

export default function Home() {
  const [showDecorations, setShowDecorations] = useState(false);

  useEffect(() => {
    setShowDecorations(true);
  }, []);

 

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Decorations with lower z-index */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <Transition
            show={showDecorations}
            enter="transition-all duration-1000 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-75 scale-100"
            className="absolute right-65 top-1/3 w-100 h-100 md:block hidden" // Hide on mobile
          >
            <div className="rounded-full border-4 border-blue-900">
              <div className="animate-ping absolute inset-0 rounded-full bg-blue-400 opacity-75"></div>
            </div>
          </Transition>

          {circles.map((circle) => (
            <Transition
              key={circle.id}
              show={showDecorations}
              enter="transition-all duration-1000 ease-out"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              className={`absolute ${circle.position} ${circle.size} ${circle.animation}`}
            >
              <div className={`rounded-full ${circle.style} bg-transparent`}></div>
            </Transition>
          ))}


          {/* Left floating image - Now properly wrapped */}
          <Transition
            show={showDecorations}
            enter="transition-all duration-1000 ease-out delay-300"
            enterFrom="opacity-0 -translate-x-5"
            enterTo="opacity-100 translate-x-0"
            className="absolute left-10 top-1/3 w-16 h-16 md:block hidden" // Hide on mobile
          >
            <div className="animate-float">
              <img
                src={sty}
                alt="Decoration"
                className="w-full h-full object-contain"
              />
            </div>
          </Transition>
        </div>


        {/* Hero Section with higher z-index */}
        <div className="hero-layout  relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row  items-center gap-22">
              {/* Text content */}
             
                <Transition
                  show={true}
                  appear={true}
                  enter="transition-all duration-1000 delay-200 ease-out"
                  enterFrom="-translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-100"
                >
                  <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-4xl font-[800] text-gray-800">
                      Secure Payments, Seamless Possibilities
                    </h2>
                    <p className="text-lg text-gray-400 font-normal">
                       Experience the future of transactions with a powerful, secure, and developer-friendly payment gateway tailored for today’s digital-first businesses. Whether you're scaling a startup or running a high-volume enterprise, our platform offers lightning-fast processing, global reach, and advanced fraud protection — all with seamless integration and real-time analytics.
                    </p>
                    <CustomButton
                      to="/contact"
                      label="Get Started"
                      variant="solid"
                      size="medium"
                      className="rounded-full"
                    />
                  </div>
                </Transition>

             

             
              <Transition
                show={true}
                appear={true}
                enter="transition-all duration-1000 delay-300 ease-out"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
              >
                <div className="lg:w-1/2">
                  <img
                    src={hero}
                    alt="Email marketing dashboard"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </Transition>

            </div>
          </div>
        </div>
      </div>
         <About/>
    <Service/>
    {/* <Global/> */}
    <Feature/>
    <FAQ/>
    
    {/* <Blog/>
    <Testimonial/> */}
    </>
  );
}