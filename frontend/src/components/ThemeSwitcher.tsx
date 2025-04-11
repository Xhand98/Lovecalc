'use client'; // Uncomment if using Next.js App Directory

import { useTheme } from "@heroui/use-theme";
import { Button } from '@heroui/button'; // Replace with your UI library's button if not using shadcn/ui

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isLight = theme === 'light-red';
  const isDark = theme === 'purple-dark';

  return (
    <div className="flex flex-col gap-2 items-start p-4 border rounded-2xl shadow-md w-fit">
      <p className="text-sm text-muted-foreground">
        Current theme: <span className="font-semibold text-primary">{theme}</span>
      </p>
      <div className="flex gap-2">
        <Button
          variant={isLight ? 'solid' : 'bordered'}
          onPress={() => setTheme('light-red')}
          disabled={isLight}
          aria-label="Switch to light mode"
        >
          Light Mode
        </Button>
        <Button
          variant={isDark ? 'solid' : 'bordered'}
          onPress={() => setTheme('purple-dark')}
          disabled={isDark}
          aria-label="Switch to dark mode"
        >
          Dark Mode
        </Button>
      </div>
    </div>
  );
};
