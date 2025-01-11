import React, { useEffect, useState } from 'react';
import { AlignJustify, X } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // Nuovo stato per il fullscreen
  const [orientation, setOrientation] = useState("portrait"); // Stato per l'orientamento

  const totalPhotos = 59;

  const [selectedPhoto] = useState(() => {
    const randomNumber = Math.floor(Math.random() * totalPhotos) + 1;
    return `${import.meta.env.BASE_URL}assets/foto${randomNumber}.jpg`;
  });

  const content = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
    {
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.`
    }
  ];

  const [currentIndex] = useState(() =>
    Math.floor(Math.random() * content.length)
  );

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 1000);

    // Rileva l'orientamento del dispositivo
    const detectOrientation = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setOrientation(isPortrait ? "portrait" : "landscape");
    };

    detectOrientation();
    window.addEventListener("resize", detectOrientation);

    return () => window.removeEventListener("resize", detectOrientation);
  }, []);

  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden">
      {/* Immagine di sfondo */}
      <img
        src={selectedPhoto}
        alt="Random photograph"
        onClick={handleImageClick} // Aggiunto evento di click
        className={`absolute transition-opacity duration-500 cursor-pointer ${
          showText ? "opacity-30" : "opacity-100"
        } ${
          isFullscreen
            ? orientation === "portrait"
              ? "w-full h-auto" // Larghezza intera in portrait
              : "w-auto h-full" // Altezza intera in landscape
            : "w-full h-full object-cover"
        }`}
      />

      {/* Container del diaframma */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "360%",
            height: "300%"
          }}
          viewBox="0 0 1001.5 996.5"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* SVG non modificato */}
        </svg>
      </div>

      {/* Icona per mostrare il testo */}
      <button
        onClick={() => setShowText(true)}
        className={`fixed bottom-6 right-6 z-10 p-4 bg-black bg-opacity-50 rounded-full transition-opacity duration-500 hover:bg-opacity-70 ${
          showText ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <AlignJustify className="w-6 h-6 text-white" />
      </button>

      {/* Overlay del testo */}
      <div
        className={`fixed inset-0 w-full h-full bg-transparent transition-all duration-500 ${
          showText ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setShowText(false)}
          className="absolute top-6 left-6 z-20 p-4 text-white hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="absolute inset-0 p-12 overflow-y-auto scrollbar-hide">
          <div
            className="max-w-4xl mx-auto text-white whitespace-pre-line"
            style={{
              fontFamily: "American Typewriter, Courier New, monospace",
              fontSize: "2rem",
              lineHeight: "1.4"
            }}
          >
            {content[currentIndex].text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
