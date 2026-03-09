"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export default function Home() {
  const [data, setData] = useState({
    name: "Ian",
    title: "Web Developer | Redesigns",
    title2: "That Convert",
    site: "thetechtive.net",
    socials: "@TheTechTive_",
    instagram: "@TheTechTive_",
    linkedin: "linkedin.com/in/ianeliasknight",
  });

  const cardRef = useRef(null);

  const handleDownload = async () => {
    const element = cardRef.current;
    if (!element) return;

    // Supaya hasil screenshot HD dan background transparan
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 4, 
    });

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `BusinessCard-${data.name}.png`;
    link.click();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 font-sans">
      <h1 className="text-3xl font-bold mb-10 text-center tracking-wide text-foreground">
        Card Generator
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl justify-center items-start">
        
        {/* === BAGIAN KIRI: PREVIEW CARD === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center sticky top-10">
          
          {/* Pembungkus Kartu untuk di-download */}
          <div className="p-4" ref={cardRef}>
            {/* Desain Kartu JSON Asli */}
            <div className="w-full max-w-[500px] bg-[#16171d] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 overflow-hidden border border-[#2a2b36]">
              
              {/* Header Mac Buttons */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-gray-300 text-[16px] font-medium tracking-wide font-sans">
                  Business Card.json
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full border border-gray-500"></div>
                </div>
              </div>

              {/* Body / Code Editor View */}
              <div className="flex font-mono text-[15px] sm:text-[16px] leading-relaxed tracking-wide">
                
                {/* Line Numbers */}
                <div className="flex flex-col text-[#545454] text-right pr-6 select-none font-medium">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                </div>
                
                {/* Syntax Code */}
                <div className="flex flex-col text-foreground whitespace-pre-wrap break-words w-full">
                  <div>{"{"}</div>
                  <div>
                    <span className="text-keycolor">  "name:</span> {data.name}
                  </div>
                  <div>
                    <span className="text-keycolor">  "title:</span> {data.title}
                  </div>
                  <div className="pl-4">
                    {data.title2}
                  </div>
                  <div>
                    <span className="text-keycolor">  "site:</span> {data.site}
                  </div>
                  <div>
                    <span className="text-keycolor">  socials:</span> {data.socials}
                  </div>
                  <div>
                    <span className="text-keycolor">  instagram:</span> {data.instagram}
                  </div>
                  <div>
                    <span className="text-keycolor">  linkedin:</span> {data.linkedin}
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Download */}
          <button 
            onClick={handleDownload}
            className="mt-4 flex items-center gap-2 bg-[#2a2b36] hover:bg-[#3a3b46] border border-gray-700 text-white px-8 py-4 rounded-xl font-bold transition-all w-full max-w-[500px] justify-center active:scale-95 shadow-lg"
          >
            <Download size={22} />
            Download Image
          </button>
        </div>

        {/* === BAGIAN KANAN: FORM INPUT MOBILE FRIENDLY === */}
        <div className="w-full lg:w-1/2 bg-[#1a1b26] p-6 sm:p-8 rounded-2xl border border-[#2a2b36] shadow-xl">
          <h2 className="text-xl font-semibold mb-6 text-foreground border-b border-gray-800 pb-4">Edit Data JSON</h2>
          <div className="flex flex-col gap-4">
            {Object.keys(data).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium text-gray-400 mb-2 capitalize tracking-wider">
                  {key === 'title2' ? 'Title (Line 2)' : key}
                </label>
                <input 
                  type="text" 
                  name={key}
                  value={data[key]} 
                  onChange={handleChange}
                  className="bg-[#121212] border border-[#333] rounded-lg p-3.5 text-foreground focus:outline-none focus:border-keycolor focus:ring-1 focus:ring-keycolor transition-all w-full"
                  placeholder={`Input ${key}...`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-20 text-gray-500 text-sm font-bold tracking-widest pb-10">
        DEVELOPED BY SANN404 FORUM
      </footer>
    </div>
  );
}
