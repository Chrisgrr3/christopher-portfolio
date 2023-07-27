import type { Metadata } from "next";
import { Chakra } from "./_chakra/Chakra";
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
        <Chakra>
          <Navbar />
          {children}
        </Chakra>
      </body>
    </html>
  );
}
