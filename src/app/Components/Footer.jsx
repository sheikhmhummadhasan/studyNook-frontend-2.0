"use client";

import Link from "next/link";
import {
  FaBookOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white mt-10">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500">
                <FaBookOpen className="text-xl" />
              </span>
              <span className="text-2xl font-bold">
                Study<span className="text-cyan-400">Nook</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              Find your perfect study space. Book comfortable rooms and make
              every study session more productive.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-lg bg-white/10 p-3 transition hover:bg-cyan-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-lg bg-white/10 p-3 transition hover:bg-cyan-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg bg-white/10 p-3 transition hover:bg-cyan-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-cyan-400">All Rooms</Link></li>
              <li><Link href="/login" className="hover:text-cyan-400">Login</Link></li>
              <li><Link href="/register" className="hover:text-cyan-400">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/rooms" className="hover:text-cyan-400">Study Room Booking</Link></li>
              <li><Link href="/rooms" className="hover:text-cyan-400">Private Study Rooms</Link></li>
              <li><Link href="/rooms" className="hover:text-cyan-400">Group Study Spaces</Link></li>
              <li><Link href="/rooms" className="hover:text-cyan-400">Find Your Space</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-lg text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-lg text-cyan-400" />
                <a href="mailto:support@studynook.com" className="break-all hover:text-cyan-400">
                  support@studynook.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-lg text-cyan-400" />
                <a href="tel:+8801000000000" className="hover:text-cyan-400">
                  +880 1000-000000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 sm:flex-row">
            <p>
              © 2026 StudyNook. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/privacy-policy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;