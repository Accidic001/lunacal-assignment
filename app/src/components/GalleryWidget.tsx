"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GalleryWidget() {
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 220;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, url]);
    }
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
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-5 py-2 rounded-xl bg-[rgba(0,0,0,0.5)] text-white text-sm font-medium inset-shadow-sm backdrop-blur-md border border-[rgba(255,255,255,0.08)]">
          Gallery
        </button>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 bg-[rgba(30,34,42,0.5)] px-4 py-2 rounded-xl text-sm text-gray-300 cursor-pointer shadow-xl backdrop-blur-md transition-all border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)]">
            <Plus size={17} /> Add Image
            <input
              type="file"
              accept="image/*"
              onChange={handleAddImage}
              className="hidden"
            />
          </label>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(0,0,0,0.5)] transition-all border border-[rgba(255,255,255,0.08)] backdrop-blur-md"
            >
              <ChevronLeft size={18} className="text-gray-200" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(0,0,0,0.5)] transition-all border border-[rgba(255,255,255,0.08)] backdrop-blur-md"
            >
              <ChevronRight size={18} className="text-gray-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <AnimatePresence>
          {images.map((src, index) => (
            <motion.div
              key={src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative min-w-[180px] h-[180px] rounded-2xl overflow-hidden shrink-0 
                         shadow-lg hover:shadow-2xl transition-all border border-[rgba(255,255,255,0.08)]"
            >
              <Image
                src={src}
                alt={`Gallery ${index}`}
                fill
                sizes="180px"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent" />
    </motion.div>
  );
}
