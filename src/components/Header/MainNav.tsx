'use client';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { NavLinks } from '@/data/content';
import Logo from '@/shared/Logo/Logo';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { RiSearch2Line } from 'react-icons/ri';
import CartSideBar from '../CartSideBar';
import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

const MainNav = () => {
  const session: any = getServerSession(options);
  return (
    <div className="container flex items-center justify-between">
      <div className="flex-1">
        <Logo />
      </div>

      <div className="hidden items-center gap-7 lg:flex">
        {NavLinks.map((item) => (
          <NavigationItem key={item.id} menuItem={item} />
        ))}
      </div>

      <div className="hidden flex-1 items-center justify-end gap-7 lg:flex">
        <RiSearch2Line className="text-2xl" />

        {session ? (
          <>
            <button
              onClick={() => signOut()}
              className="text-lg text-red-500 hover:underline"
            >
              Sign Out
            </button>
            <CartSideBar />
          </>
        ) : (
          <Link href="/login">
            <p className="text-lg">Login</p>
          </Link>
        )}
      </div>

      <div className="lg:hidden">
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;
