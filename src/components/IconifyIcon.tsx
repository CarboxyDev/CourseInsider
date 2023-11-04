'use client';

import { cn } from '@/lib/util';
import { Icon } from '@iconify/react';

interface IconifyIconProps {
  icon: string;
  className?: string;
}

const IconifyIcon = (props: IconifyIconProps) => {
  const { icon, className } = props;
  return <Icon icon={icon} className={cn(className)}></Icon>;
};

export default IconifyIcon;
