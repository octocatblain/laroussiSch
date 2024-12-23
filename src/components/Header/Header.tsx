"use client";

import { headerBannerData } from "@/data/content";
import AutoScrollSlider from "@/shared/AutoScroll/AutoScrollSlider";
import type { Options } from "@splidejs/react-splide";
import { SplideSlide } from "@splidejs/react-splide";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import MainNav from "./MainNav";

const sliderOptions: Options = {
  autoScroll: {
    speed: 0.7,
  },
  arrows: false,
  perPage: 5,
  type: "loop",
  drag: "free",
  pagination: false,
  gap: "50px",
  breakpoints: {
    640: {
      perPage: 2,
      gap: "10px",
    },
    768: {
      perPage: 2,
      gap: "20px",
    },
    1024: {
      perPage: 3,
      gap: "40px",
    },
    1280: {
      perPage: 4,
      gap: "40px",
    },
    1536: {
      perPage: 4,
      gap: "40px",
    },
  },
};

export interface HeaderProps {
  session: Session | null; // Use the proper type for session, and allow null
}

const Header: FC<HeaderProps> = ({ session }) => {
  const pathname = usePathname();
  const isRegisterPage = pathname.startsWith("/auth/register");
  const isLoginPage = pathname.startsWith("/auth/login");

  // Handle session refresh after sign-out
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false }); // Prevent automatic redirection
      const refreshedSession = await getSession(); // Refresh the session after sign-out
      console.log("Session after sign-out:", refreshedSession); // Should be null or updated
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (isRegisterPage || isLoginPage) {
    return null; // Return nothing if it's a register or login page
  }

  return (
    <div className="nc-Header my-2 sticky inset-x-0 top-0 z-50 bg-white">
      <div className="">
        <AutoScrollSlider trigger options={sliderOptions}>
          {headerBannerData.map((item) => (
            <SplideSlide key={item.title}>
              <div className="flex items-center mx-4 w-full gap-2">
                <p className="gradient-background min-w-max font-medium sm:rounded outline-2 rounded-full text-white whitespace-nowrap px-4 py-2 border-2 border-yellow-500">
                  {item.title}
                </p>
                <Image
                  src="/assets/logo/kenyanflag.png"
                  alt={item.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 mr-20 object-cover rounded-full border border-yellow-500"
                />
              </div>
            </SplideSlide>
          ))}
        </AutoScrollSlider>
      </div>

      {/* Pass the session and handleSignOut function to MainNav */}
      <MainNav session={session} onSignOut={handleSignOut} />
    </div>
  );
};

export default Header;
