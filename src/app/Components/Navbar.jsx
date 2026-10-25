"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";


const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [profileMenu, setProfileMenu] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    ...(user
      ? [
          { name: "Add Room", href: "/add-room" },
          { name: "My Listings", href: "/my-listings" },
          { name: "My Bookings", href: "/my-bookings" },
        ]
      : []),
  ];

  const activeClass =
    "relative overflow-hidden rounded-full border border-white/70 bg-gradient-to-br from-white/80 via-cyan-100/40 to-sky-300/50 px-6 py-3 text-lg font-extrabold text-slate-900 shadow-[inset_0_2px_5px_rgba(255,255,255,0.9),0_4px_15px_rgba(56,189,248,0.2)] backdrop-blur-xl before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-white";

  const inactiveClass =
    "rounded-full border border-transparent px-6 py-3 text-lg font-bold text-slate-600 transition-all duration-300 hover:border-white/70 hover:bg-white/40 hover:text-slate-950 hover:shadow-md hover:backdrop-blur-xl";

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (!error) {
      setProfileMenu(false);
      router.push("/login");
      router.refresh();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/50 px-4 py-3 shadow-lg shadow-slate-200/30 backdrop-blur-2xl sm:flex-nowrap sm:gap-5 sm:rounded-full sm:px-6 sm:py-3">
        <Link href="/" className="shrink-0">
          <h1 className="flex items-center justify-center gap-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <Image
              height={50}
              width={60}
              alt="logo"
              src="/icon (1).png"
            />
            Study<span className="text-cyan-500">Nook</span>
          </h1>
        </Link>

        <div className="order-3 flex w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/60 bg-white/25 p-1.5 shadow-inner backdrop-blur-xl sm:order-none sm:w-auto sm:flex-nowrap sm:gap-1 sm:rounded-full sm:p-1.5">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`whitespace-nowrap px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base ${
                  isActive ? activeClass : inactiveClass
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {user ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileMenu(!profileMenu)}
                className="flex items-center gap-2 rounded-full border border-white/70 bg-white/40 p-1.5 pr-3 shadow-sm backdrop-blur-lg transition hover:border-cyan-300 hover:bg-white/80"
              >
                {user.image ? (
                  <Image
                  height={40}
                  width={40}
                    src={user.image}
                    alt={user.name || "Profile"}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                )}

                <span className="hidden max-w-24 truncate text-sm font-semibold text-slate-800 sm:block">
                  {user.name || "Profile"}
                </span>

                <span className="text-xs text-slate-500">
                  {profileMenu ? "▲" : "▼"}
                </span>
              </button>

              {profileMenu && (
                <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/70 bg-white/85 p-2 shadow-xl backdrop-blur-2xl">
                  <div className="border-b border-slate-200/70 px-3 py-2">
                    <p className="truncate text-sm font-bold text-slate-800">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/my-listings"
                    onClick={() => setProfileMenu(false)}
                    className="mt-1 block rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-cyan-50"
                  >
                    My Listings
                  </Link>

                  <Link
                    href="/my-bookings"
                    onClick={() => setProfileMenu(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-cyan-50"
                  >
                    My Bookings
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-1 w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-slate-300/80 bg-white/40 px-3 py-2 text-xs font-semibold text-slate-800 backdrop-blur-lg transition hover:border-cyan-300 hover:bg-white/80 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="rounded-full border border-cyan-300/70 bg-gradient-to-br from-cyan-400/90 to-sky-500/90 px-3 py-2 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-sky-400 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;