'use client';

import setColorTheme from '@/helperFunctions/setColorTheme';
import { useEffect } from 'react';

export default function ThemeSetter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    setColorTheme(window);
  }, []);

  return <>{children}</>;
}
