import { cn } from '@/lib/util';

/** This component is used to wrap contents of a page for adjusting the layout spacing in different devices */
export const PageWrapper = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <>
      <div className="mx-4 md:mx-16 lg:mx-25 2xl:mx-44">
        <main className="flex flex-col">{children}</main>
        <div className="mt-24"></div>
      </div>
    </>
  );
};

export const FullPageWidthContainer = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <>
      <div className={cn('-mx-4 md:-mx-16 lg:-mx-25 2xl:-mx-44', className)}>
        {children}
      </div>
    </>
  );
};
