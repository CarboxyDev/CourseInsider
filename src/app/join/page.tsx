'use client';

import { LoadingSpinner } from '@/components/Loading';
import { PageWrapper } from '@/components/PageWrapper';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { redirect, useSearchParams } from 'next/navigation';

type ApiResponse = {
  invalid: boolean;
  name?: string;
};

const JoinRequest = (props: { code: string }): JSX.Element => {
  const { code } = props;

  const { data, error, status } = useQuery({
    queryKey: ['join'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/join/?code=${code}`);
      return JSON.parse(data) as ApiResponse;
    },
  });

  if (status == 'pending') {
    return (
      <div className="mt-20 md:mt-48">
        <div className="flex justify-center">
          <LoadingSpinner size={64} />
        </div>
      </div>
    );
  }

  if (status == 'error') {
    return (
      <div className="mt-20 md:mt-48">
        <div className="flex justify-center">
          <p className="text-2xl text-red-500">An error occured</p>
        </div>
      </div>
    );
  }

  if (status == 'success' && data.invalid) {
    return (
      <div className="mt-20 md:mt-48">
        <div className="flex justify-center">
          <p className="text-2xl text-danger-500">Invalid join code</p>
        </div>
      </div>
    );
  }

  if (status == 'success' && !data.invalid) {
    return (
      <div className="mt-20 md:mt-48">
        <div className="flex justify-center">
          <p className="text-4xl text-zinc-700 font-semibold">
            Joined {data.name}
          </p>
        </div>
      </div>
    );
  }

  return <></>;
};

export default function JoinPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? 'invalid';

  if (code === 'invalid') {
    redirect('/');
  }

  return (
    <PageWrapper>
      <div className="mt-20 md:mt-48">
        <JoinRequest code={code} />
      </div>
    </PageWrapper>
  );
}
