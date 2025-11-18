"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1C] via-[#222224] to-[#171719]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E1B261]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Animated bars */}
      <div className="relative z-10 bars-loader">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      {/* Loading text */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-3">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E1B261] via-[#CBA058] to-[#E1B261] bg-clip-text text-transparent animate-gradient">
          Pizarras Ecuador
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[#A7A7A7] text-base font-medium tracking-wide">Cargando</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-[#E1B261] rounded-full animate-bounce [animation-delay:0ms]"></span>
            <span className="w-1.5 h-1.5 bg-[#E1B261] rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-1.5 h-1.5 bg-[#E1B261] rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
