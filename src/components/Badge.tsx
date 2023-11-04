import { cn } from '@/lib/util';

interface BadgeProps {
  text: string;
  size: 'md' | 'lg';
  color: 'neutral' | 'success' | 'primary';
}

export const Badge = (props: BadgeProps) => {
  const { text, size } = props;

  return (
    <span
      className={cn(
        'rounded-[4px] border bg-transparent transition delay-300 duration-300 ease-in',
        size == 'md' && 'px-[6px] py-[2px]',
        size == 'lg' && 'px-[8px] py-[4px]',
        'border-primary-500 text-xs text-primary-500 hover:border-transparent hover:bg-primary-500 hover:text-white'
      )}
    >
      {text}
    </span>
  );
};
