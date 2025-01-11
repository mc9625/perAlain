import React, { useEffect, useState } from 'react';
import { AlignJustify, X } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  
  // Array di immagini e testi associati
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
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden">
      {/* Immagine di sfondo */}
      <img
        src={`/api/placeholder/1920/1080`}
        alt="Random photograph"
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          showText ? 'opacity-30' : 'opacity-100'
        }`}
      />
      
      {/* Container del diaframma */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <svg 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '360%',
            height: '300%'
          }}
          viewBox="0 0 1001.5 996.5"
          preserveAspectRatio="xMidYMid meet"
        >
          <g id="shutters">
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M495.6,509C466.2,673.8,390.8,839,296,1000H707C704,784.9,608.2,584.6,495.6,509Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '39% 87%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M296,1000c90.9-137,167-319,203-499C368,593,201.3,655.6,0,707Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '14% 78%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M0,707V295c142.6,85.4,302.9,158.8,499,208C363.2,592.2,198.6,661.4,0,707Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '2% 44%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M290,4,0,295.8C180.2,401.6,334.3,464.8,498,501,396,354.6,310,60.8,290,4Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '21% 17%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M290,4H709C622.7,137.4,560.5,310.4,498,499,400.1,346.2,335.5,170.8,290,4Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '60% 15%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M1001.5,292.5,705.8,3.5C619.9,146.2,563.7,301.6,498,500,646.3,398.3,944,312.5,1001.5,292.5Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '82% 34%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M999,294.9l.2,422.9C854.5,630.2,691.9,554.9,492.9,504.5,593.7,433,779.3,358.7,999,294.9Z" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '88% 61%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
            <path 
              className="transition-transform duration-1000 ease-in-out"
              d="M499,509c169.3,38.9,335.9,109.1,500,209L707,1000c-6-259-117-423-208-491" 
              fill="#28292e" 
              stroke="#000"
              style={{
                transformOrigin: '72% 86%',
                transform: isOpen ? 'rotate(60deg)' : 'rotate(0deg)'
              }}
            />
          </g>
        </svg>
      </div>

      {/* Icona per mostrare il testo */}
      <button 
        onClick={() => setShowText(true)}
        className={`fixed bottom-6 right-6 z-10 p-4 bg-black bg-opacity-50 rounded-full transition-opacity duration-500 hover:bg-opacity-70 ${
          showText ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <AlignJustify className="w-6 h-6 text-white" />
      </button>

      {/* Overlay del testo */}
      <div 
        className={`fixed inset-0 w-full h-full bg-transparent transition-all duration-500 ${
          showText ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Pulsante di chiusura */}
        <button
          onClick={() => setShowText(false)}
          className="absolute top-6 left-6 z-20 p-4 text-white hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Contenitore del testo scorrevole */}
        <div 
          className="absolute inset-0 p-12 overflow-y-auto scrollbar-hide"
        >
          <div 
            className="max-w-4xl mx-auto text-white whitespace-pre-line"
            style={{ 
              fontFamily: 'American Typewriter, Courier New, monospace',
              fontSize: '2rem',
              lineHeight: '1.4'
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