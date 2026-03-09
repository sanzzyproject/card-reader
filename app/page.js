"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export default function Home() {
  // LOGIKA DAN STATE JSON TIDAK DIUBAH SAMA SEKALI
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

  // HANYA UPDATE UI: RASIO KTP & TEXT JSON DIRAPIKAN
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center py-10 px-4 sm:px-8 font-sans text-[#ededed]">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
          Card Generator
        </h1>
        <p className="text-[#888888] text-sm sm:text-base font-medium">
          Create your professional developer card.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl justify-center items-start">
        
        {/* === BAGIAN KIRI: PREVIEW CARD === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          
          {/* Pembungkus Kartu */}
          <div className="w-full flex justify-center p-1 sm:p-2">
            
            {/* KARTU DIUBAH KE RASIO KTP (1.58:1) */}
            <div 
              ref={cardRef} 
              className="w-full max-w-[480px] aspect-[1.58/1] bg-[#111111] rounded-2xl shadow-2xl p-5 sm:p-6 border border-[#222222] flex flex-col justify-center relative overflow-hidden"
            >
              
              {/* Header Mac Buttons Moderen (Diposisikan Absolute agar diam di atas) */}
              <div className="flex items-center justify-between absolute top-5 left-5 right-5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89f24]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                </div>
                <div className="text-[#888888] text-[12px] sm:text-[14px] font-medium tracking-wide">
                  Business Card.json
                </div>
                <div className="w-10"></div> {/* Spacer */}
              </div>

              {/* Body / Code Editor View (Text Dirapikan) */}
              <div className="flex font-mono text-[11px] sm:text-[13px] leading-relaxed mt-6 w-full">
                
                {/* Line Numbers */}
                <div className="flex flex-col text-[#444444] text-right pr-4 select-none shrink-0">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                </div>
                
                {/* Syntax Code - Flexbox mencegah teks patah acak */}
                <div className="flex flex-col text-[#e0e0e0] w-full overflow-hidden">
                  <div>{"{"}</div>
                  
                  <div className="pl-4 flex w-full">
                    <span className="text-[#f07178] mr-2 shrink-0">"name:</span> 
                    <span className="truncate">{data.name}</span>
                  </div>
                  
                  <div className="pl-4 flex w-full">
                    <span className="text-[#f07178] mr-2 shrink-0">"title:</span> 
                    <span className="truncate">{data.title}</span>
                  </div>
                  
                  {/* Title 2 Disejajarkan Tepat di Bawah Text Title 1 */}
                  <div className="pl-4 flex w-full">
                    <span className="mr-2 shrink-0 opacity-0 pointer-events-none">"title:</span> 
                    <span className="truncate text-[#888888]">{data.title2}</span>
                  </div>
                  
                  <div className="pl-4 flex w-full mt-0.5">
                    <span className="text-[#f07178] mr-2 shrink-0">"site:</span> 
                    <span className="truncate">{data.site}</span>
                  </div>
                  
                  <div className="pl-4 flex w-full">
                    <span className="text-[#f07178] mr-2 shrink-0">socials:</span> 
                    <span className="truncate">{data.socials}</span>
                  </div>
                  
                  <div className="pl-4 flex w-full">
                    <span className="text-[#f07178] mr-2 shrink-0">instagram:</span> 
                    <span className="truncate">{data.instagram}</span>
                  </div>
                  
                  <div className="pl-4 flex w-full">
                    <span className="text-[#f07178] mr-2 shrink-0">linkedin:</span> 
                    <span className="truncate">{data.linkedin}</span>
                  </div>
                  
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Download */}
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-[#ededed] hover:bg-white text-black px-8 py-3.5 rounded-xl font-semibold transition-all w-full max-w-[480px] active:scale-[0.98] shadow-lg"
          >
            <Download size={20} strokeWidth={2.5} />
            Download Image
          </button>
        </div>

        {/* === BAGIAN KANAN: FORM INPUT === */}
        <div className="w-full lg:w-1/2 bg-[#0f0f0f] p-6 sm:p-8 rounded-3xl border border-[#222222]">
          <h2 className="text-lg sm:text-xl font-medium mb-6 text-white">Edit Details</h2>
          <div className="flex flex-col gap-4">
            {Object.keys(data).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="text-[13px] font-medium text-[#888888] mb-1.5 capitalize">
                  {key === 'title2' ? 'Title (Line 2)' : key}
                </label>
                <input 
                  type="text" 
                  name={key}
                  value={data[key]} 
                  onChange={handleChange}
                  className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-3.5 text-[#ededed] text-[14px] focus:outline-none focus:border-[#555555] focus:bg-[#1a1a1a] transition-colors w-full"
                  placeholder={`Input ${key}...`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-20 text-[#444444] text-xs sm:text-sm font-semibold tracking-[0.2em]">
        DEVELOPED BY SANN404 FORUM
      </footer>
    </div>
  );
}
