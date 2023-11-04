'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Providers = (props: React.PropsWithChildren) => {
  const children = props.children;

  /* Uncomment the line below to use NextAuth with Prisma adapter */
  //return <SessionProvider>{children}</SessionProvider>;
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default Providers;
