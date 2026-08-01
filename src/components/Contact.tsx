import SocialProfileLinks from "@/src/components/SocialProfileLinks";
import React from "react";

const Contact = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-xl p-8 shadow-xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-3">
          Let's Connect & Collaborate
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Whether it's a new project, a collaboration, or just to say hi —
          I'd love to hear from you!
        </p>

        {/* Social Links */}
        <div className="flex justify-center mb-8">
          <SocialProfileLinks />
        </div>

        {/* Professional Information */}
        <div className="mb-8 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-400">
            Professional Information
          </h2>

          <div className="space-y-3 text-gray-300">
            <p>
              <span className="font-semibold text-white">📍 Location:</span>{" "}
              India
            </p>

            <p>
              <span className="font-semibold text-white">
                🌍 Open to Relocation:
              </span>{" "}
              Germany
            </p>

            <p>
              <span className="font-semibold text-white">🗣 Languages:</span>{" "}
              English, Hindi, German (B1)
            </p>

            <p>
              <span className="font-semibold text-white">
                🎓 Expected Graduation:
              </span>{" "}
              July 2027
            </p>
          </div>
        </div>

        <div className="bg-[#1c2a21] w-full max-w-2xl rounded-xl p-8 shadow-xl">
          {/* Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md bg-slate-800 px-4 py-3 text-white outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md bg-slate-800 px-4 py-3 text-white outline-none border border-slate-700 focus:border-blue-500"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-md bg-slate-800 px-4 py-3 text-white outline-none border border-slate-700 focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;