import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Elegir la cena",
  description: "Generated by acee",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return(
    <ClerkProvider>
    <html lang="en">
      <body className="font-sans flex flex-col gap-4">
        <TopNav />
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
