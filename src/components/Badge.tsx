import { cn } from '@/lib/util';

interface BadgeProps {
  text: string;
  size: 'md' | 'lg';
  color: 'neutral' | 'success' | 'primary' | 'warning' | 'danger';
  emphasizeText?: boolean;
}

export const Badge = (props: BadgeProps) => {
  const { text, color, size, emphasizeText } = props;

  return (
    <span
      className={cn(
        'rounded-[4px] border bg-transparent transition delay-300 duration-300 ease-in text-xs',
        emphasizeText && 'font-semibold',
        size == 'md' && 'px-[6px] py-[2px]',
        size == 'lg' && 'px-[8px] py-[4px]',
        color == 'primary' &&
          'border-primary-500 text-primary-500 hover:border-transparent hover:bg-primary-500 hover:text-white',
        color == 'neutral' &&
          'border-zinc-500 text-zinc-500 hover:border-transparent hover:bg-zinc-500 hover:text-white',
        color == 'success' &&
          'border-success-500 text-success-500 hover:border-transparent hover:bg-success-500 hover:text-white',
        color == 'warning' &&
          'border-warning-500 text-warning-500 hover:border-transparent hover:bg-warning-500 hover:text-white',
        color == 'danger' &&
          'border-danger-500 text-danger-500 hover:border-transparent hover:bg-danger-500 hover:text-white'
      )}
    >
      {text}
    </span>
  );
};
