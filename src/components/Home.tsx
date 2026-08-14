"use client";

import ProfileDetails from "@/src/components/ProfileDetails";
import ProfilePhoto from "@/src/components/ProfilePhoto";
import SocialProfileLinks from "@/src/components/SocialProfileLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#0d1b13]
        px-6
        py-16
        text-white
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            flex
            flex-col
            items-center
            gap-10
            lg:flex-row
            lg:items-center
            lg:gap-20
          "
        >

          {/* Profile Photo */}
          <div className="shrink-0">
            <ProfilePhoto />
          </div>

          {/* Profile Details */}
          <div className="w-full max-w-3xl text-center lg:text-left">
            <ProfileDetails />

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Connect
              </h3>

              <SocialProfileLinks />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;