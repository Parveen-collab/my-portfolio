"use client";

import ProfileDetails from "@/src/components/ProfileDetails";
import ProfilePhoto from "@/src/components/ProfilePhoto";
import SocialProfileLinks from "@/src/components/SocialProfileLinks";
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] lg:gap-20">

          {/* Profile */}
          <div className="flex justify-center md:justify-start">
            <ProfilePhoto />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center md:items-start">
            <ProfileDetails />

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Connect
              </p>

              <SocialProfileLinks />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;