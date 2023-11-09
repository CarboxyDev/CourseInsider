'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = (props: ProvidersProps) => {
  const children = props.children;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
