import Link from "next/link";
import type { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = () => {
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 text-primary"
      href="/"
    >
      <img
        src="/assets/logo/laroucci-logo.png"
        alt="logo"
        width={200}
        height={250}
      />
      {/* <MdOutlineFilterVintage className="text-4xl" />
      <span className={`${className} text-2xl font-bold`}>LaRoucci Mining SCH</span> */}
    </Link>
  );
};

export default Logo;
