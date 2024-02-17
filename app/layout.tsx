import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "coming soon website",
  description: "A coming soon website by Posi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
    suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      {children}
       </ThemeProvider>
     </body>
    </html>
  );
}
