export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center`}>
      <span className="text-2xl font-bold bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent">
        Pizarras Ecuador
      </span>
    </div>
  );
}
