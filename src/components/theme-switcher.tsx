"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2 mt-12">
      <Button onClick={() => setTheme("light")} variant="outline" size="icon">
        <SunIcon />
      </Button>
      <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
        <MoonIcon />
      </Button>
      <Button onClick={() => setTheme("system")} variant="outline" size="icon">
        <DesktopIcon />
      </Button>
    </div>
  );
};
