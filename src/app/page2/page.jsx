import MobileLayout from "../components/MobileLayout";
import ArrowButton from "../components/ArrowButton";

export default function Page2() {
  return (
    <div className="flex flex-col items-center gap-6">
      <MobileLayout>
        {/* Inside phone layout */}
        <div className="absolute inset-x-0 top-4 p-6">
          {/* Heading */}
          <h1 className="text-[20px] leading-[28px] font-semibold text-slate-800">
            Sign in to your <br /> PopX account
          </h1>

          {/* Subtext */}
          <p className="mt-2 text-[14px] leading-[20px] text-slate-500 max-w-[240px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Form */}
          <form className="mt-6 space-y-6">
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="w-full h-12 rounded-md border border-slate-300 px-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full h-12 rounded-md border border-slate-300 px-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Disabled login button */}
            <button
              type="submit"
              disabled
              className="w-full h-11 rounded-md bg-slate-300 text-white text-[14px] font-semibold cursor-not-allowed"
            >
              Login
            </button>
          </form>
        </div>
      </MobileLayout>

      {/* Arrows BELOW the phone */}
      <div className="flex items-center gap-4">
        {/* Previous */}
        <ArrowButton direction="left" href="/" />

        {/* Next */}
        <ArrowButton direction="right" href="/page3" />
      </div>
    </div>
  );
}
