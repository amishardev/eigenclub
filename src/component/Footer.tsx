"use client";

import { Mail, Linkedin, Instagram, Facebook, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">λ</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                The Eigen Society
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The Mathematics Club of IIM Sambalpur, dedicated to fostering 
              mathematical excellence and analytical thinking among future leaders.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop"
                alt="IIM Sambalpur Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span>IIM Sambalpur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#topics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Topics
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:eigensociety@iimsambalpur.ac.in"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  eigensociety@iim.ac.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.iimsambalpur.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  IIM Sambalpur Website
                </a>
              </li>
            </ul>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} The Eigen Society, IIM Sambalpur. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
