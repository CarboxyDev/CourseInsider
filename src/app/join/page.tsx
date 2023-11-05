'use client';

import { LoadingSpinner } from '@/components/Loading';
import { PageWrapper } from '@/components/PageWrapper';
import { notify } from '@/lib/notify';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type ApiResponse = {
  invalid: boolean;
  name?: string;
};

const JoinRequest = (props: {
  code: string;
  router: AppRouterInstance;
}): JSX.Element => {
  const { code, router } = props;
  const [redirect, setRedirect] = useState(false);
  const [exhaust, setExhausted] = useState(false);

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
      notify('Redirecting...', 'success');
      setTimeout(() => {
        router.push('/directory');
      }, 1500);
    }
  }, [redirect, router]);

  const { data, error, status } = useQuery({
    queryKey: ['join'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/join/?code=${code}`);
      return JSON.parse(data) as ApiResponse;
    },
  });

  if (status == 'pending') {
    return (
      <div className="mt-10">
        <div className="flex justify-center">
          <LoadingSpinner size={64} />
        </div>
      </div>
    );
  }

  if (status == 'error') {
    notify('You must login before joining', 'failure');
    return (
      <div className="mt-10">
        <div className="flex justify-center">
          <p className="text-2xl text-zinc-700">
            An error occured.{' '}
            <span
              className="underline hover:cursor-pointer"
              onClick={() => signIn('google')}
            >
              Login here.
            </span>
          </p>
        </div>
      </div>
    );
  }

  if (status == 'success' && data.invalid) {
    return (
      <div className="mt-10">
        <div className="flex justify-center">
          <p className="text-2xl text-danger-500">Invalid join code</p>
        </div>
      </div>
    );
  }

  if (status == 'success' && !data.invalid && !exhaust) {
    setRedirect(true);
    setExhausted(true);
    return (
      <div className="mt-10">
        <div className="flex justify-center">
          <p className="text-5xl magic-text font-semibold">
            Joined {data.name} !
          </p>
        </div>
      </div>
    );
  }

  return <></>;
};

export default function JoinPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code') ?? 'invalid';

  const [input, setInput] = useState('');

  const handleJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push(`/join?code=${input}`);
  };

  return (
    <PageWrapper>
      <div className="mt-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-600 mr-6">
          Join your college
        </h1>
      </div>
      <div className="mt-20 md:mt-48">
        {code === 'invalid' && (
          <>
            <div className="flex flex-row items-center gap-x-4 justify-center">
              <input
                type="text"
                className="h-12 w-40 md:w-64 lg:w-80 px-4 text-lg placeholder:text-zinc-500 appearance-none focus:outlin-primary-500 placeholder:font-light text-zinc-600 border border-zinc-300 bg-zinc-100 rounded-md"
                placeholder="College code"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={(e) => handleJoin(e)}
                className="rounded-md h-12 w-32 text-lg font-medium text-white bg-primary-400"
              >
                JOIN
              </button>
            </div>
            <div className="text-center mt-24 font-light text-amber-400">
              Note: You need to login before you can join a college group.{' '}
              <span
                onClick={() => signIn('google')}
                className="underline hover:cursor-pointer hover:text-primary-500"
              >
                Login here
              </span>
            </div>
            <div className="text-center mt-1 font-light text-sm text-zinc-400">
              Pssst, by the way, you can join IIIT Delhi with the code
              b4bf48cf7955
            </div>
          </>
        )}
        {code != 'invalid' && <JoinRequest code={code} router={router} />}
      </div>
    </PageWrapper>
  );
}
