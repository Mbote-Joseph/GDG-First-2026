/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, you'd send this to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#E0F7FF] via-[#F0FDFF] to-[#E6FFFA] px-4 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#22D3EE] flex items-center justify-center shadow-lg shadow-cyan-200/50">
            <Mail className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-2 py-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] tracking-tight pb-2">
            Something Amazing
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] bg-clip-text text-transparent tracking-tight pb-4">
            Is Coming Soon
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </motion.p>

        {/* Signup Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-lg mx-auto w-full"
        >
          {!isSubmitted ? (
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl text-slate-700 outline-none focus:ring-2 focus:ring-cyan-100 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-cyan-200 active:scale-[0.98]"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 text-slate-700 font-medium"
            >
              🎉 Thanks! We'll be in touch soon.
            </motion.div>
          )}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm text-slate-400"
        >
          No spam, ever. Unsubscribe at any time.
        </motion.p>
      </div>
    </main>
  );
}
