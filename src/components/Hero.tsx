import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // si usas Next.js. Si no, usa <img> normal.
import bookImage from "../assets/book-placeholder.png"; // Ajusta la ruta según tu imagen real

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda: Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the Strategy That’s Helping Coaches Scale Without Ads
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A new marketing method that works in 2024. No tech. No funnels. No fluff.
          </p>
          <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform group">
            Get Instant Access Now
            <ArrowRight className="inline ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="flex justify-center">
          <img
            src="/book-placeholder.png"
            alt="Book Preview"
            className="w-[280px] md:w-[350px] shadow-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;