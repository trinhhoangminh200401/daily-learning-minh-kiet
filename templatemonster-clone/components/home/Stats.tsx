"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "3k+", label: "Cases Won" },
  { value: "150+", label: "Expert Attorneys" },
  { value: "98%", label: "Success Rate" },
];

export function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2 font-serif">
                {stat.value}
              </p>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
