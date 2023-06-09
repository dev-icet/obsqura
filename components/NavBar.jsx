import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaHamburger } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible && <MobileNav setInvisible={setIsVisible} />}
      <div className="flex z-[10] flex-row scroll-smooth items-center justify-between">
        <Link href="/">
          <h1 className="text-white-100 text-sm">
            National Techno Cultural Fiesta of ICET
          </h1>
        </Link>
        <FaBars
          onClick={() => {
            setIsVisible(true);
          }}
          className="text-white-1000 focus:transform focus:rotate-90 z-[2000] block rounded-md md:hidden bg-shark-950 p-1 w-8 h-8"
        />
        <div className="flex-row gap-4 px-8 rounded-lg hidden md:flex bg-shark-950">
          <Link
            href="/"
            className={
              router.pathname === "/" ? "text-green-400" : " text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold  transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-green-400">
              Home
            </p>
          </Link>
          <Link
            href="#events"
            className={
              router.pathname === "/#events"
                ? "text-blue-ribbon-400"
                : "text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-blue-ribbon-400">
              Events
            </p>
          </Link>
          <Link
            href="#faqs"
            className={
              router.pathname === "/#faqs" ? "text-red-500" : "text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-red-500">
              FAQS
            </p>
          </Link>
          <Link
            href="#contact"
            className={
              router.pathname === "/#contact"
                ? "text-yellow-500"
                : "text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold 0 transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-yellow-500">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
