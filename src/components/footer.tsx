import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[hsl(var(--brand-bg))] to-black border-t border-[hsl(var(--brand-border))]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--brand-accent-1)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <Shield className="h-8 w-8 text-[hsl(var(--brand-accent-1))] group-hover:text-[hsl(var(--brand-accent-2))] transition-colors" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--brand-accent-1))] to-[hsl(var(--brand-accent-2))] bg-clip-text text-transparent">
                AI Security
              </span>
            </Link>
            <p className="text-[hsl(var(--brand-muted))] mb-6 text-sm leading-relaxed">
              End-to-end security systems engineered with built-in AI for prevention, detection, and rapid response across the MENA region.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-[hsl(var(--brand-muted))]">
                <Mail className="h-4 w-4 text-[hsl(var(--brand-accent-1))]" />
                <a href="mailto:aismail@ai-security.pro" className="hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  aismail@ai-security.pro
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[hsl(var(--brand-muted))]">
                <Phone className="h-4 w-4 text-[hsl(var(--brand-accent-1))]" />
                <a href="tel:+96170213718" className="hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  +961 70 213 718
                </a>
              </div>
              <div className="flex items-start space-x-3 text-[hsl(var(--brand-muted))]">
                <MapPin className="h-4 w-4 text-[hsl(var(--brand-accent-1))] mt-0.5" />
                <span>Beirut, Lebanon</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solutions#cctv" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">CCTV Systems</Link></li>
              <li><Link href="/solutions#fire" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Fire Alarm</Link></li>
              <li><Link href="/solutions#access" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Access Control</Link></li>
              <li><Link href="/solutions#intrusion" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Intrusion Alarm</Link></li>
              <li><Link href="/solutions#automation" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Home Automation</Link></li>
              <li><Link href="/robotics" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Robotics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Case Studies</Link></li>
              <li><Link href="/consultancy" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Consultancy</Link></li>
              <li><Link href="/careers" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Blog</Link></li>
              <li><Link href="/support" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-[hsl(var(--brand-muted))] text-sm mb-4">
              Get AI security insights delivered to your inbox.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))] text-sm"
              />
              <Button className="w-full bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-[hsl(var(--brand-bg))]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-[hsl(var(--brand-border))]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-[hsl(var(--brand-muted))]">
              <Link href="/privacy" className="hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                Terms of Service
              </Link>
              <Link href="/compliance" className="hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                Compliance
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-[hsl(var(--brand-muted))]">
            <p>&copy; {new Date().getFullYear()} AI Security. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
