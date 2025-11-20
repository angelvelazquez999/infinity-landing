'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tighter font-outfit">
                    INFINITY
                </Link>

                <div className="hidden md:flex gap-8 text-sm font-mono">
                    <Link href="#services" className="hover:text-gray-300 transition-colors">WORK</Link>
                    <Link href="#about" className="hover:text-gray-300 transition-colors">AGENCY</Link>
                    <Link href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
                </div>
            </div>
        </motion.nav>
    );
}
