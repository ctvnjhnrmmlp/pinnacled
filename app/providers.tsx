'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={query}>
      <NextThemesProvider
        enableSystem={false}
        disableTransitionOnChange={true}
        defaultTheme='dark'
        attribute='class'
      >
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
