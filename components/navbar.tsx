"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
// import { Button } from "./ui/button";
// import { LogOut } from "lucide-react";

export default function Navbar() {
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);
  // const router = useRouter();
  const pathname = usePathname();

  const handleToogleMenu = () => {
    setToogleMenu((prev) => !prev);
  };

  // const linkClasses: string =
  //   "mx-2 transition-colors font-normal text-sm text-white hover:text-white cursor-pointer ";
  // const hamburgerMenuLinkClasses: string =
  //   "p-4 text-base font-medium border-b last:border-none border-border/40 block";

  const navlinks = [
    // {
    //   name: "About",
    //   link: "/about"
    // },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "SPEAKERS",
      link: "/speakers",
    },
    {
      name: "SPONSORS",
      link: "/sponsors",
    },
    {
      name: "REGISTER",
      link: "/register",
    },
  ];

  return (
    <div className="flex flex-col gap-5 fixed bg-black text-white inset-x-0 top-0  border-border/40 z-30">
      <nav className="md:grid grid-cols-12 top-0 flex items-center justify-between h-14 px-3 md:pl-5">
        <Link href="/" className="w-[7rem]">
          <Image src="/logo-white.png" width={200} height={50} alt="" />
        </Link>
        <div
          className="md:col-span-11 flex items-center
         justify-end relative"
        >
          <ul className="md:flex hidden items-center gap-5">
            {navlinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className={clsx("mx-2 cursor-pointer text-sm", {
                      "text-white": pathname !== link.link,
                      "text-thunderbird-500 transition-colors  duration-150 ease-in-out":
                        pathname === link.link,
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            {/* <li>
              <Link href="/about" className={linkClasses}>
                About
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className={linkClasses}>
                Sponsors
              </Link>
            </li> */}
          </ul>
          <div>
            <Menu
              className="text-white overflow-hidden block md:hidden cursor-pointer"
              onClick={handleToogleMenu}
            />
          </div>
        </div>
      </nav>
      <div className="fixed top-[50px] left-0 px-4 mx-auto w-full h-auto md:hidden z-[100] bg-black">
        {toogleMenu && (
          <div className="md:hidden block animate-menu-animation transform-gpu transition-transform duration-200ms ease-in-out">
            {navlinks.map((link) => {
              return (
                <Link
                  href={link.link}
                  key={link.name}
                  className={clsx(
                    "p-4 text-base font-medium border-b  last:border-none border-border/40 block transition-colors duration-150 ease-in-out",
                    {
                      "text-white": pathname !== link.link,
                      "text-thunderbird-500": pathname === link.link,
                    },
                  )}
                >
                  <div>{link.name}</div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
