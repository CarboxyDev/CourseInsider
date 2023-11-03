'use client';

const Providers = (props: React.PropsWithChildren) => {
  const children = props.children;

  /* Uncomment the line below to use NextAuth with Prisma adapter */
  //return <SessionProvider>{children}</SessionProvider>;
  return <>{children}</>;
};

export default Providers;
