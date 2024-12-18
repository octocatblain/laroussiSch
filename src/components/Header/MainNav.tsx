import { NavLinks } from '@/data/content';
import Logo from '@/shared/Logo/Logo';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiSearch2Line } from 'react-icons/ri';
import CartSideBar from '../CartSideBar';
import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

const MainNav = ({ session }: { session: any }) => {
  const router: any = useRouter();
  const isDashboardPage = router.pathname?.startsWith('/dashboard/user');

  return (
    <div className="container flex items-center justify-between">
      {/* Logo */}
      <div className="flex-1">
        <Logo />
      </div>

      {/* Navigation Links (Desktop View) */}
      <div className="hidden items-center gap-7 lg:flex">
        {NavLinks.map((item) => (
          <NavigationItem key={item.id} menuItem={item} />
        ))}
      </div>

      {/* Actions (Search, Auth, Cart) */}
      <div className="hidden flex-1 items-center justify-end gap-7 lg:flex">
        <RiSearch2Line className="text-2xl" />
        {session ? (
          <>
            {!isDashboardPage && (
              <button
                onClick={() => router.push('/dashboard/user')}
                className="text-lg text-blue-500 hover:underline"
              >
                Dashboard
              </button>
            )}
            <button
              onClick={() => signOut()}
              className="text-lg text-red-500 hover:underline"
            >
              Sign Out
            </button>
            <CartSideBar />
          </>
        ) : (
          <Link href="/api/auth/signin">
            <p className="text-lg">Login</p>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;