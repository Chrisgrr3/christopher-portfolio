import type { Metadata } from "next";
import { Providers } from "../lib/chakra/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
