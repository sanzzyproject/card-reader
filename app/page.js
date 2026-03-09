"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export default function Home() {
  // LOGIKA TIDAK DIUBAH SAMA SEKALI
  const [data, setData] = useState({
    name: "Ian",
    title: "Web Developer",
    title2: "UI/UX Designer",
    site: "saannforums.net",
    socials: "@SaannForums",
    instagram: "@SannForums.id",
    linkedin: "linkedin.com/in/saan5ty",
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

  // BAGIAN UI DIUPDATE TOTAL MENJADI CLEAN & MODERN 2026
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center py-12 px-4 sm:px-8 font-sans text-[#ededed]">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
          Card Generator
        </h1>
        <p className="text-[#888888] text-sm sm:text-base font-medium">
          Create your professional developer card.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full max-w-6xl justify-center items-start">
        
        {/* === BAGIAN KIRI: PREVIEW CARD === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
          
          {/* Pembungkus Kartu */}
          <div className="w-full flex justify-center p-2 sm:p-4">
            <div 
              ref={cardRef} 
              className="w-full max-w-[520px] bg-[#111111] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#222222]"
            >
              
              {/* Header Mac Buttons Moderen */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89f24]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                </div>
                <div className="text-[#888888] text-[14px] font-medium tracking-wide">
                  Business Card.json
                </div>
                <div className="w-10"></div> {/* Spacer untuk keseimbangan grid */}
              </div>

              {/* Body / Code Editor View */}
              <div className="flex font-mono text-[13px] sm:text-[15px] leading-relaxed">
                
                {/* Line Numbers */}
                <div className="flex flex-col text-[#444444] text-right pr-6 select-none">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                </div>
                
                {/* Syntax Code */}
                <div className="flex flex-col text-[#e0e0e0] w-full">
                  <div>{"{"}</div>
                  <div className="flex flex-wrap">
                    <span className="text-[#f07178] mr-2">  "name":</span> 
                    <span className="break-all">{data.name}</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-[#f07178] mr-2">  "title":</span> 
                    <span>{data.title}</span>
                  </div>
                  <div className="pl-4 text-[#888888]">
                    {data.title2}
                  </div>
                  <div className="flex flex-wrap mt-1">
                    <span className="text-[#f07178] mr-2">  "site":</span> 
                    <span className="break-all">{data.site}</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-[#f07178] mr-2">  "socials":</span> 
                    <span className="break-all">{data.socials}</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-[#f07178] mr-2">  "instagram":</span> 
                    <span className="break-all">{data.instagram}</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-[#f07178] mr-2">  "linkedin":</span> 
                    <span className="break-all">{data.linkedin}</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Download - Moderen Style */}
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-[#ededed] hover:bg-white text-black px-8 py-4 rounded-xl font-semibold transition-all w-full max-w-[480px] active:scale-[0.98] shadow-lg"
          >
            <Download size={20} strokeWidth={2.5} />
            Download Image
          </button>
        </div>

        {/* === BAGIAN KANAN: FORM INPUT === */}
        <div className="w-full lg:w-1/2 bg-[#0f0f0f] p-6 sm:p-10 rounded-3xl border border-[#222222]">
          <h2 className="text-xl font-medium mb-8 text-white">Edit Details</h2>
          <div className="flex flex-col gap-5">
            {Object.keys(data).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium text-[#888888] mb-2 capitalize">
                  {key === 'title2' ? 'Title (Line 2)' : key}
                </label>
                <input 
                  type="text" 
                  name={key}
                  value={data[key]} 
                  onChange={handleChange}
                  className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 text-[#ededed] text-[15px] focus:outline-none focus:border-[#555555] focus:bg-[#1a1a1a] transition-colors w-full"
                  placeholder={`Input ${key}...`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-24 text-[#444444] text-xs sm:text-sm font-semibold tracking-[0.2em]">
        DEVELOPED BY SANN404 FORUM
      </footer>
    </div>
  );
}
