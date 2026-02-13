import Link from "next/link";
import { Scale, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-accent p-2 rounded-sm text-primary">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-serif text-white tracking-tight">
                LawBit
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing expert legal counsel with integrity and dedication. Your trusted partner in navigating complex legal landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="#practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link></li>
                <li><Link href="#attorneys" className="hover:text-accent transition-colors">Our Team</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-serif">Services</h4>
            <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent transition-colors">Corporate Law</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Family Law</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Criminal Defense</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Personal Injury</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Real Estate</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-serif">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe for legal updates and news.</p>
            <div className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-slate-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-1 focus:ring-accent" 
                />
                <button className="bg-accent text-primary px-4 py-2 rounded-md hover:brightness-110 font-medium">OK</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} LawBit. All rights reserved.
            </p>
            <div className="flex gap-4">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
