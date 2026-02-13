"use client";

import { Scale, Briefcase, Gavel, Users, Heart, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const practices = [
  {
    icon: Scale,
    title: "Corporate Law",
    description: "Expert guidance for complex business transactions and governance.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate representation for divorce, custody, and family matters.",
  },
  {
    icon: Gavel,
    title: "Criminal Defense",
    description: "Aggressive defense strategies to protect your rights and freedom.",
  },
  {
    icon: Heart,
    title: "Personal Injury",
    description: "Fighting for fair compensation when you've been wronged.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Seamless navigation of property transactions and disputes.",
  },
  {
    icon: Briefcase,
    title: "Business Litigation",
    description: "Resolving commercial disputes with strategic precision.",
  },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Legal Solutions for Every Need
          </h2>
          <p className="text-slate-600">
            We provide comprehensive legal services tailored to your unique situation.
            Our attorneys are specialists in their respective fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-slate-100 rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <practice.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-serif">
                {practice.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
