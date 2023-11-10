'use client';

import { Badge } from '@/components/Badge';
import IconifyIcon from '@/components/IconifyIcon';
import { Logo } from '@/components/Logo';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Session } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ProfileDropdownMenuProps {
  setUserIsSigningOut: Dispatch<SetStateAction<boolean>>;
  userIsSignedIn: boolean;
}

const ProfileDropdownMenu = (props: ProfileDropdownMenuProps) => {
  const { setUserIsSigningOut, userIsSignedIn } = props;

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={12}
        collisionPadding={16}
        className="flex min-w-[120px] flex-col rounded-lg border border-zinc-300 bg-zinc-100 text-sm shadow-2xl"
      >
        <Link href={'/directory'}>
          <DropdownMenu.Item className="flex flex-row items-center gap-x-2 rounded-t-lg pb-3 pl-3 pt-4 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-zinc-300 hover:outline-none">
            <IconifyIcon
              icon="fluent:hat-graduation-16-filled"
              className="h-5 w-5 text-zinc-600"
            />
            <div className="text-zinc-700">Courses</div>
          </DropdownMenu.Item>
        </Link>
        <Link href={'/profile'}>
          <DropdownMenu.Item className="flex flex-row items-center gap-x-2 py-3 pl-3 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-zinc-300 hover:outline-none">
            <IconifyIcon
              icon="ri:profile-fill"
              className="h-5 w-5 text-zinc-600"
            />
            <div className="text-zinc-600">Profile</div>
          </DropdownMenu.Item>
        </Link>
        {userIsSignedIn && (
          <DropdownMenu.Item
            onClick={async () => {
              signOut({ callbackUrl: '/signout' });
              setUserIsSigningOut(true);
            }}
            className="flex flex-row items-center gap-x-2 rounded-b-lg pb-4 pl-3 pt-3 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-zinc-300 hover:outline-none"
          >
            <IconifyIcon
              icon="mdi:sign-out"
              className="h-5 w-5 text-zinc-600"
            />
            <div className="text-zinc-500">Sign out</div>
          </DropdownMenu.Item>
        )}
        {!userIsSignedIn && (
          <DropdownMenu.Item
            onClick={() => signIn('google')}
            className="flex flex-row items-center gap-x-2 rounded-b-lg pb-4 pl-3 pt-3 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-zinc-300 hover:outline-none"
          >
            <IconifyIcon icon="mdi:sign-in" className="h-5 w-5 text-zinc-600" />
            <div className="text-zinc-700">Sign in</div>
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};

type userSessionStatus = 'authenticated' | 'loading' | 'unauthenticated';
export type NavbarVariants = 'with-branding' | 'with-minimal-branding';

interface NavbarProps {
  variant?: NavbarVariants;
  drawDivider?: boolean;
  userSession?: {
    session: Session | null;
    status: userSessionStatus;
  };
}

const Navbar = (props: NavbarProps) => {
  const { variant, drawDivider } = props;
  const { data: session, status } = useSession();

  const [userIsSigningOut, setUserIsSigningOut] = useState(false);

  return (
    <>
      <div className="mt-4 flex w-full select-none flex-row items-center">
        {variant === 'with-branding' && (
          <Link href="/">
            <Logo className="mr-4 inline" hoverAnimation={true} />
            <Badge text="ALPHA" size="lg" color="primary" />
          </Link>
        )}
        {variant === 'with-minimal-branding' && (
          <Link href="/">
            <Badge text="ALPHA" size="lg" color="primary" />
          </Link>
        )}
        <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-transparent hover:cursor-pointer">
          {status === 'unauthenticated' && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="focus:outline-none border rounded-full border-zinc-200">
                <div className="flex h-10 w-10 items-center justify-center">
                  <IconifyIcon
                    icon="ep:user-filled"
                    className="h-5 w-5 text-zinc-500"
                  />
                </div>
              </DropdownMenu.Trigger>{' '}
              <ProfileDropdownMenu
                userIsSignedIn={false}
                setUserIsSigningOut={setUserIsSigningOut}
              />
            </DropdownMenu.Root>
          )}
          {status === 'loading' && (
            <div className="flex items-center justify-center">
              <Skeleton
                className="absolute bottom-[2px]"
                circle={true}
                height={40}
                width={40}
              />
            </div>
          )}
          {status === 'authenticated' && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="focus:outline-none">
                {!userIsSigningOut && (
                  <Image
                    width={40}
                    height={40}
                    src={session.user?.image || ''}
                    alt={'pfp'}
                    className="h-full w-full rounded-full"
                  />
                )}
                {userIsSigningOut && (
                  <div className="flex items-center justify-center">
                    <Skeleton
                      className="absolute bottom-[2px]"
                      circle={true}
                      height={40}
                      width={40}
                    />
                  </div>
                )}
              </DropdownMenu.Trigger>
              <ProfileDropdownMenu
                userIsSignedIn={true}
                setUserIsSigningOut={setUserIsSigningOut}
              />
            </DropdownMenu.Root>
          )}
        </div>
      </div>
      {drawDivider && <div className="mt-4 h-px bg-zinc-100 md:mt-6"></div>}
    </>
  );
};

export default Navbar;
