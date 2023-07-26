import type { Metadata } from "next";
import { Providers } from "./_chakra/providers";
import { Navbar } from "./components/Navbar";
export const metadata: Metadata = {
  title: "Christopher Guerrero - Homepage",
  description:
    "Christopher is a fullstack developer with a passion for all things new.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
