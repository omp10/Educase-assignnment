export default function MobileLayout({ children }) {
  return (
    <div
      className="
        w-[360px] h-[640px]
        bg-[#FBFDFF] border border-[#E6EBF2]
        rounded-md relative
        shadow-[0_1px_2px_rgba(0,0,0,0.04)]
      "
    >
      {children}
    </div>
  );
}
