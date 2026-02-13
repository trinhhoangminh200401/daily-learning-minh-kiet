"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Ready to discuss your case? Contact us today for a free consultation. 
              Our team is available 24/7 to assist you with your legal needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-full text-accent">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-1">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-full text-accent">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-slate-600">contact@lawbit.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-full text-accent">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-1">Office</h4>
                    <p className="text-slate-600">123 Legal Avenue, Suite 100<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Free Case Evaluation</h3>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">First Name</label>
                        <input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                        <input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Doe" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Case Type</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white">
                        <option>Corporate Law</option>
                        <option>Family Law</option>
                        <option>Criminal Defense</option>
                        <option>Personal Injury</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Tell us about your case..." />
                </div>
                <Button variant="default" size="lg" className="w-full mt-2">
                    Submit Request
                </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
