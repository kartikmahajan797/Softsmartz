import type { Metadata } from "next";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

// Assuming you have a globals.css file for basic styles.
// If not, you can create one or remove this import.
import "./globals.css";

export const metadata: Metadata = {
  title: "Softsmartz",
  description: "Innovative Software Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}