import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { countryimg } from "../assets"; 

export default function Global() {
    return (
        <div className="bg-[#052C46] text-white py-16 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            >
                {/* Left Text Section */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Manage your global <br /> payments with ease
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
                        Operate worldwide with confidence. Our services ensure secure, seamless payments that meet local standards wherever you do business.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-12 text-white font-semibold border-t border-gray-500 pt-8 mt-8 w-full">
                        <div className="text-center sm:text-left">
                            <p className="text-2xl sm:text-3xl">4000+</p>
                            <p className="text-sm text-gray-300">Merchants</p>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-2xl sm:text-3xl">100 Million</p>
                            <p className="text-sm text-gray-300">Transactions/month</p>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-2xl sm:text-3xl">99.99%</p>
                            <p className="text-sm text-gray-300">Success Rate</p>
                        </div>
                    </div>

                </div>

                {/* Right Image Section */}
                <div>
                    <img
                        src={countryimg}
                        alt="Global Payments Map"
                        className="w-full max-w-xl mx-auto"
                    />
                </div>
            </motion.div>
        </div>
    );
}
