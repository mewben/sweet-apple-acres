import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils";
import { Toaster } from "~/components/ui/toaster";
import { Suspense } from "react";
import { ThemeProvider } from "~/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sweet Apple Acres",
  description: "Performant eCommerce site using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
