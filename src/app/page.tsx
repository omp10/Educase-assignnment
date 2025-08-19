import MobileLayout from "./components/MobileLayout";
import ArrowButton from "./components/ArrowButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6">
      <MobileLayout>
        {/* Badge at the top */}
       

        {/* Bottom content block */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h1 className="text-[24px] leading-[28px] font-semibold text-slate-800">
            Welcome to PopX
          </h1>
          <p className="mt-2 text-[14px] leading-[20px] text-slate-500 max-w-[280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            className="mt-4 w-full h-11 rounded-md bg-[#6F3FF5] text-white text-[14px] font-semibold"
            type="button"
          >
            Create Account
          </button>

          <button
            className="mt-3 w-full h-11 rounded-md bg-[#E9D8FD] text-[#5B21B6] text-[14px] font-semibold"
            type="button"
          >
            Already Registered? Login
          </button>
        </div>
      </MobileLayout>

      {/* Arrow BELOW the phone */}
      <div className="flex items-center gap-4">
        {/* Previous */}
        <ArrowButton direction="left" disabled />

        {/* Next */}
        <ArrowButton direction="right" href="/page2" />
      </div>
    </div>
  );
}
