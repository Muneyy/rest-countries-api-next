'use client';

import { useEffect } from 'react';

function setInitialTheme() {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const hasNoPreference = !prefersLight && !prefersDark;
  if (prefersLight || hasNoPreference) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

export default function ThemeSetter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    setInitialTheme();
  }, []);

  return <>{children}</>;
}
