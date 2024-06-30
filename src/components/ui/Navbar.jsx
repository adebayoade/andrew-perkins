'use client';

import Hamburger from '../icons/Hamburger';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/logo';
import { Menu } from 'lucide-react';
import { menuLinks } from '@/constants/menu-links';

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="pb-[20px]">
      <div className="desktop hidden xl:flex justify-between">
        <Link href={'/'} className="">
          <Logo />
        </Link>

        <div className="mt-5 flex gap-[70px]">
          {menuLinks.map((link, index) => (
            <Link
              className={`${
                currentRoute === link.href ? 'active-link' : 'non-active-link'
              } uppercase text-white hover:border-b-2 border-[#0CA900] h-[30px] max-w-max group transition duration-500 ease-in-out`}
              key={index}
              href={link?.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mobile xl:hidden flex justify-between">
        <Link href={'/'} className="w-[150px]">
          <Logo />
        </Link>

        <Menubar className="bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger className="p-0 account-menu">
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 20 20"
                  fill="#ffff"
                >
                  <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
                </svg>
              </span>
            </MenubarTrigger>

            <MenubarContent className="px-2 py-5 mt-5">
              {menuLinks.map((item, index) => (
                <Link
                  className={currentRoute === item.href ? 'active-link' : 'non-active-link'}
                  href={item?.href}
                  key={index}
                >
                  <MenubarItem className="link capitalize cursor-pointer text-md">
                    {item?.name}
                  </MenubarItem>
                </Link>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}
