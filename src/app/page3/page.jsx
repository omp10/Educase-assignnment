import MobileLayout from "../components/MobileLayout";
import ArrowButton from "../components/ArrowButton";

export default function Page3() {
  return (
    <div className="flex flex-col items-center gap-6">
      <MobileLayout>
        {/* Inside phone layout */}
        <div className="absolute inset-x-0 p-6">
          {/* Heading */}
          <h1 className="text-[20px] leading-[28px] font-semibold text-slate-800 mb-6">
            Create your <br /> PopX account
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label
                htmlFor="fullName"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Marry Doe"
                className="w-full h-10 rounded-md border border-slate-300 px-3 text-[14px] 
                focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Phone number*
              </label>
              <input
                type="text"
                id="phone"
                placeholder="9876543210"
                className="w-full h-10 rounded-md border border-slate-300 px-3 text-[14px] 
                focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Email address*
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full h-10 rounded-md border border-slate-300 px-3 text-[14px] 
                focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Password*
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full h-10 rounded-md border border-slate-300 px-3 text-[14px] 
                focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Company Name */}
            <div className="relative">
              <label
                htmlFor="company"
                className="absolute -top-2 left-3 bg-white px-2 text-[13px] font-medium text-[#6F3FF5]"
              >
                Company name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Inc."
                className="w-full h-10 rounded-md border border-slate-300 px-3 text-[14px] 
                focus:outline-none focus:ring-1 focus:ring-[#6F3FF5]"
              />
            </div>

            {/* Radio buttons */}
            <div className="space-y-2">
              <p className="text-[13px] font-medium text-[#6F3FF5]">
                Are you an Agency?*
              </p>
              <div className="flex gap-6 text-[14px] text-slate-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" value="yes" defaultChecked />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" value="no" />
                  No
                </label>
              </div>
            </div>

            {/* Create Account button */}
            <button
              type="submit"
              className="mt-20 w-full h-11 rounded-md bg-[#6F3FF5] text-white text-[14px] font-semibold"
            >
              Create Account
            </button>
          </form>
        </div>
      </MobileLayout>

      {/* Arrows BELOW the phone */}
      <div className="flex items-center gap-4">
        <ArrowButton direction="left" href="/page2" />
        <ArrowButton direction="right" href="/page4" />
      </div>
    </div>
  );
}
