import { NavLinks } from '@/data/content';
import Logo from '@/shared/Logo/Logo';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import CartSideBar from '../CartSideBar';
import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

interface MainNavProps {
  session: any;
  onSignOut?: () => void; // Optional callback for additional actions on sign-out
}

const MainNav: React.FC<MainNavProps> = ({ session, onSignOut }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage = pathname?.startsWith('/dashboard/user');

  // Sign-out handler
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false }); // Prevent automatic redirect
      if (onSignOut) {
        onSignOut(); // Invoke the custom sign-out callback if provided
      }
      router.push('/'); // Redirect to the home page after sign-out
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

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
        {/* <RiSearch2Line className="text-2xl" /> */}
        {session ? (
          <>
            {/* Dashboard Button (if not on the dashboard page) */}
            {!isDashboardPage && (
              <button
                onClick={() => router.push('/dashboard/user')}
                className="text-lg text-blue-500 hover:underline"
              >
                Dashboard
              </button>
            )}
            {/* Sign-Out Button */}
            <button
              onClick={handleSignOut}
              className="text-lg text-red-500 hover:underline"
            >
              Sign Out
            </button>
            {/* Cart Sidebar */}
            <CartSideBar />
          </>
        ) : (
          // Login Link (if no session)
          <Link href="/auth/login">
            <p className="text-lg flex gap-3 items-center justify-center">Login <FaArrowUpRightFromSquare/></p>
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
