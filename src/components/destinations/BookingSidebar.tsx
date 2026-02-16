"use client";

import { useState } from "react";

export default function BookingSidebar() {
  return (
    // Lớp lg:sticky và top-28 là "chìa khóa" để Form trượt dọc theo màn hình
    <div className="bg-[#EEF2FA] rounded-3xl p-6 lg:sticky lg:top-28 h-fit border border-blue-50">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Book This Tour</h3>
      <p className="text-gray-600 text-sm mb-6">
        Fill in your details to book a private tour with your own guide.
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">
            FULL NAME *
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">
            EMAIL ADDRESS *
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">
            PHONE NUMBER *
          </label>
          <input
            type="tel"
            placeholder="+1 xxx xxx xxxx"
            className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1">
              GUESTS
            </label>
            <select className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none appearance-none bg-white">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3+ guests</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1">
              TOUR DATE *
            </label>
            <input
              type="date"
              className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none text-gray-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">
            GUIDE LANGUAGE
          </label>
          <select className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none appearance-none bg-white">
            <option>English</option>
            <option>Vietnamese</option>
            <option>French</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">
            ADDITIONAL NOTES
          </label>
          <textarea
            rows={3}
            placeholder="Special requests, dietary restrictions..."
            className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF6600] outline-none resize-none"
          ></textarea>
        </div>

        <button className="w-full bg-[#FF6600] hover:bg-[#e65c00] text-white py-4 rounded-xl font-bold transition-colors text-lg mt-4">
          Book Now
        </button>
        <p className="text-[10px] text-center text-gray-400 font-medium uppercase tracking-wider mt-4">
          No immediate payment required. Secure booking for private tours.
        </p>
      </form>
    </div>
  );
}
