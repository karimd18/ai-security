"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Shield,
  ChevronDown,
  Video,
  Flame,
  Lock,
  Bell,
  Home,
  Building2,
  Bot,
  MonitorPlay,
  Settings
} from "lucide-react";

import Image from "next/image";

const services = [
  { name: "CCTV Systems", href: "/services/cctv", icon: Video },
  { name: "Fire Alarm", href: "/services/fire-alarm", icon: Flame },
  { name: "Access Control", href: "/services/access-control", icon: Lock },
  { name: "Intrusion Alarm", href: "/services/intrusion-alarm", icon: Bell },
  { name: "Home Automation", href: "/services/home-automation", icon: Home },
  { name: "Large Scale Projects", href: "/services/large-scale", icon: Building2 },
  { name: "System Integration", href: "/services/integration", icon: Settings },
  { name: "System Designs", href: "/services/system-designs", icon: Settings },
  { name: "Control Rooms", href: "/control-rooms", icon: MonitorPlay },
  { name: "Robotics", href: "/robotics", icon: Bot },
  { name: "LED Screens", href: "/led", icon: MonitorPlay },
  { name: "Consultancy", href: "/consultancy", icon: Building2 },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showservices, setShowservices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[hsl(var(--brand-bg))]/95 backdrop-blur-md border-b border-[hsl(var(--brand-border))]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--brand-accent-1))] to-[hsl(var(--brand-accent-2))] bg-clip-text text-transparent">
              AI Security
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
              Home
            </Link>

            <div
              className="relative group/services"
              onMouseEnter={() => setShowservices(true)}
              onMouseLeave={() => setShowservices(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors py-2">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {showservices && (
                <div className="absolute top-full left-0 pt-2 w-[700px] z-50">
                  <div className="bg-[hsl(var(--brand-bg))]/95 backdrop-blur-xl border border-[hsl(var(--brand-border))] rounded-lg p-6 shadow-2xl">
                    <div className="grid grid-cols-3 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[hsl(var(--brand-surface))] transition-colors group"
                        >
                          <service.icon className="h-5 w-5 text-[hsl(var(--brand-accent-1))] mt-0.5 group-hover:text-[hsl(var(--brand-accent-2))] transition-colors flex-shrink-0" />
                          <span className="text-sm font-medium leading-tight">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[hsl(var(--brand-border))]">
                      <Link
                        href="/services"
                        className="text-sm font-medium text-[hsl(var(--brand-accent-1))] hover:text-[hsl(var(--brand-accent-2))] transition-colors flex items-center justify-center"
                      >
                        View All services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/industries" className="text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
              Industries
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
              Projects
            </Link>
            <Link href="/consultancy" className="text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
              Consultancy
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/10">
              <Link href="/contact">Request Audit</Link>
            </Button>
            <Button size="sm" asChild className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-[hsl(var(--brand-bg))]">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[hsl(var(--brand-bg))] border-[hsl(var(--brand-border))]">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  Home
                </Link>
                <div>
                  <div className="text-lg font-medium mb-3">services</div>
                  <div className="flex flex-col space-y-2 ml-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center space-x-2 text-sm text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))] transition-colors"
                      >
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/industries" className="text-lg font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  Industries
                </Link>
                <Link href="/projects" className="text-lg font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  Projects
                </Link>
                <Link href="/consultancy" className="text-lg font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  Consultancy
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  Contact
                </Link>
                <div className="pt-4 space-y-3">
                  <Button variant="outline" className="w-full border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))]" asChild>
                    <Link href="/contact">Request Audit</Link>
                  </Button>
                  <Button className="w-full bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
