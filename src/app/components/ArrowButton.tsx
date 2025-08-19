import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ArrowButtonProps =
  | {
      direction?: "left" | "right";
      disabled: true;
      href?: never; // ❌ no href allowed if disabled
    }
  | {
      direction?: "left" | "right";
      disabled?: false;
      href: string; // ✅ required if not disabled
    };

export default function ArrowButton({
  direction = "right",
  href,
  disabled,
}: ArrowButtonProps) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  if (disabled) {
    return (
      <span className="w-8 h-8 rounded-full bg-gray-300 text-white grid place-items-center shadow cursor-not-allowed opacity-60">
        <Icon className="w-5 h-5" />
      </span>
    );
  }

  return (
    <Link href={href} className="grid place-items-center">
      <span className="w-8 h-8 rounded-full bg-[#6F3FF5] text-white grid place-items-center shadow hover:bg-[#5a32d6] transition">
        <Icon className="w-5 h-5" />
      </span>
    </Link>
  );
}
