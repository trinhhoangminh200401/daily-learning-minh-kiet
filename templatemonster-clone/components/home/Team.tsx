"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";

const team = [
  {
    name: "James Anderson",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Sarah Mitchell",
    role: "Senior Associate",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Michael Ross",
    role: "Corporate Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
];

export function Team() {
  return (
    <section id="attorneys" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Meet Our Expert Attorneys
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1 font-serif">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                <div className="flex justify-center gap-4 text-slate-400">
                    <button className="hover:text-primary transition-colors"><Linkedin size={18} /></button>
                    <button className="hover:text-primary transition-colors"><Mail size={18} /></button>
                    <button className="hover:text-primary transition-colors"><Phone size={18} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
