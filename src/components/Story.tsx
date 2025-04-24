import React from 'react';
import { Check, X } from 'lucide-react'; // Importar iconos

const Story: React.FC = () => {
  // URL de una imagen placeholder relevante (escritura, laptop, ideas)
  // Reemplázala por una URL tuya si tienes una imagen específica
  const storyImageUrl = "https://placehold.co/1200x600/1A1A1A/E0E0E0?text=Your+Journey+Here"; 

  return (
    // Reducimos drásticamente el padding superior (pt-6), mantenemos el inferior (pb-20)
    <section className="pt-6 pb-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Contenedor principal del texto, ajustamos max-width */}
        <div className="max-w-3xl mx-auto space-y-8"> {/* Aumentamos space-y para párrafos */}
          
          {/* --- Introducción --- */}
          <div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              How to make more money from every page you write without losing your passion or resorting to jobs you hate just to pay the bills.
              It's a strategy I developed that helps you captivate even the most skeptical readers... and guide them to whatever offer you have.
            </p>
            {/* Énfasis */}
            <p className="text-xl lg:text-2xl font-semibold text-orange-400 my-6">
              And the best part? You only need <strong>one BOOK</strong> to transform your knowledge into a steady income... just one.
            </p>
            <p className="text-base lg:text-lg text-gray-500 italic">
              I'll explain how it works in a moment... so keep reading...
            </p>
          </div>

          {/* --- Descubrimiento del Secreto --- */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mt-12 mb-6 text-gray-100">How I Discovered This One-Book-Only Secret</h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              A lot of folks think I was always this guy who mastered digital products... but the truth is:
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              I started off totally clueless about digital entrepreneurship. I was trapped in a soul-sucking corporate job for years. It wasn't until I decided to write my first book that I got thrust into the world of online business.
            </p>
            {/* ===== Imagen Insertada ===== */}
            <div className="my-10 md:my-12">
               <img 
                 src={storyImageUrl} 
                 alt="Entrepreneur writing journey" 
                 className="rounded-lg shadow-lg w-full h-auto object-cover"
                 loading="lazy" // Carga diferida para mejorar rendimiento
                 onError={(e) => { 
                   // Fallback simple en caso de error al cargar la imagen
                   const target = e.target as HTMLImageElement;
                   target.alt = "Image loading failed"; 
                   target.style.display = 'none'; // Ocultar si falla
                 }}
               />
            </div>
            {/* ========================== */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              I was forced to get good at it fast because I left my corporate job the day after my book was published.
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              Ever hear about Cortez burning the ships so his men couldn't retreat? Yeah... same principle!
            </p>
          </div>

          {/* --- El Patrón --- */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 text-gray-200">But it WORKED:</h3>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              I dedicated myself to helping other entrepreneurs, started one of the most successful platforms for digital product creation in the world. And it was just a few years ago...
            </p>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 text-gray-200">After Years In The Business... I Spotted A Pattern</h3>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              Something virtually EVERY successful digital entrepreneur was doing... And something I'm sure they wanted to keep to themselves.
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              Their strategy was really centered around one foundational product. Just repackaged and refined a bit. Only one. That's all they needed.
            </p>
            <p className="text-xl lg:text-2xl font-semibold text-orange-400 my-6">
              And that's all <strong>YOU</strong> need to make a sweet living from your knowledge.
            </p>
          </div>

          {/* --- Aplicación y Resultados --- */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 text-gray-200">I Started To Apply This "One Book" Approach And Doubled My Business In 7 Months</h3>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              It was wild! The sales just started coming in... slow and steady at first. Then the pace really picked up. And I doubled my business in just under 7 months.
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              I decided I had to let other entrepreneurs in on this... so:
            </p>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 text-gray-200">I Created A Step-by-Step Blueprint For You</h3>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              And now thousands of others have used it... enjoying the success I have... ...without the worry of building a huge mailing list... or scrambling for traffic.
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              This one book does the hard work for you. I had to create it with everyday entrepreneurs in mind - not just marketing superstars.
            </p>
          </div>

          {/* --- Sección "Is This For You?" --- */}
          <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8 md:p-10 mt-16 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-white">Is This Really For You?</h2>
            <div className="space-y-6 text-lg lg:text-xl text-gray-300 leading-relaxed">
              <p>
                Even as I say this, you might be thinking, "Is this really for me?" And that's a valid thought.
              </p>
              <p>
                Honestly, I can't say for sure without knowing how serious you are about getting paid for your efforts.
              </p>
              <p>
                But just the fact that you're here tells me something important: You're trying. You're already ahead of many others in the same spot.
              </p>
              <p>
                I know this because if there's one thing I've learned, it's that there are two types of people:
              </p>
              <ul className="space-y-4 pt-4"> 
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Those who go after what they want because they're ready.</span>
                </li>
                <li className="flex items-start">
                  <X className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Those who hold back because they're not quite there yet.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* --- Sección "The Crossroads" --- */}
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900/20 border border-gray-700/50 rounded-2xl p-8 md:p-10 mt-16 shadow-lg">
             <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-white">The Crossroads: Which Path Will You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4 border border-red-500/20 bg-red-900/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">The Path You Know</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"> <X className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" /> <span>A little bit worse..</span> </li>
                  <li className="flex items-start"> <X className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" /> <span>A little more tiring..</span> </li>
                  <li className="flex items-start"> <X className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" /> <span>A little more confusing as the days pass</span> </li>
                </ul>
              </div>
              <div className="space-y-4 border border-green-500/20 bg-green-900/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">The New Path to Freedom</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"> <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /> <span>Paved by experience and guidance</span> </li>
                  <li className="flex items-start"> <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /> <span>Built on knowledge we've gathered to help you</span> </li>
                  <li className="flex items-start"> <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /> <span>Celebrated by many who have walked it before</span> </li>
                </ul>
              </div>
            </div>
          </div>

        </div> {/* Fin contenedor principal del texto */}
      </div>
    </section>
  );
};

export default Story;
