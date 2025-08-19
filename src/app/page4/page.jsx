import MobileLayout from "../components/MobileLayout";
import Image from "next/image";
import { Camera } from "lucide-react"; // using lucide-react for the camera icon
import ArrowButton from "../components/ArrowButton";

export default function Page4() {
  return (
    <div className="flex flex-col items-center gap-6">
      <MobileLayout>
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-semibold text-slate-800">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 px-4 py-4 bg-gray-50">
          {/* Profile Image */}
          <div className="relative w-12 h-12 shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/pfp.jpg" // replace with actual profile image
                alt="Profile"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>

            {/* Small purple camera icon bottom-right */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#6F3FF5] flex items-center justify-center shadow">
              <Camera size={14} className="text-white" />
            </div>
          </div>

          {/* User Info (Name + Email) */}
          <div className="flex flex-col">
            <h2 className="text-[14px] font-semibold text-slate-800">
              Marry Doe
            </h2>
            <p className="text-[13px] text-slate-500">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description (with dashed border below it) */}
        <div className="bg-gray-50 px-4 py-3 border-b border-dashed border-gray-300">
          <p className=" text-[12px] text-slate-500 leading-[18px]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </MobileLayout>

      {/* Arrows BELOW the phone */}
      <div className="flex items-center gap-4">
        {/* Left arrow (go back) */}
        <ArrowButton direction="left" href="/page3" />

        {/* Right arrow (disabled) */}
        <ArrowButton direction="right" disabled />
      </div>
    </div>
  );
}
