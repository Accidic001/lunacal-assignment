"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProfileWidget() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  const content: Record<string, string> = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
    experiences: `I’ve worked across multiple teams at Salesforce — starting in the Customer Success department, later transitioning into the Sales Enablement team.

Over these years, I’ve learned to build strong client relationships and streamline communication between our internal departments to ensure smooth onboarding and retention.`,
    recommended: `I highly recommend checking out our new CRM integration tools. They’ve been helping teams automate follow-ups, track leads efficiently, and maintain better customer engagement.

If you’d like a quick demo or resources, I’d be more than happy to schedule that for you!`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl p-6 w-full max-w-xl mx-auto
                 bg-[rgba(42,47,58,0.6)] backdrop-blur-xl 
                 border border-[rgba(255,255,255,0.08)] 
                 shadow-[0_8px_40px_rgba(0,0,0,0.25)] 
                 hover:shadow-[0_8px_50px_rgba(0,0,0,0.35)] 
                 transition-all duration-300 ease-out"
    >
      {/* Tabs */}
      <div className="flex mb-4 bg-[rgba(23,25,29,0.5)] justify-between p-2 rounded-md shadow-inner backdrop-blur-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-150 ease-out 
              ${
                activeTab === tab.id
                  ? "bg-[rgba(255,255,255,0.15)] text-white shadow-inner border border-[rgba(255,255,255,0.1)]"
                  : "text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="bg-[rgba(30,34,42,0.5)] rounded-2xl p-4 h-48 
                      overflow-y-auto no-scrollbar
                      backdrop-blur-md border border-[rgba(255,255,255,0.05)]">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed whitespace-pre-line text-gray-200"
          >
            {content[activeTab]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Soft gradient highlight */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-[rgba(255,255,255,0.05)] to-transparent" />
    </motion.div>
  );
}
