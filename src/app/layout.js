import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/SocialSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileFooter from "@/components/MobileFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Njuguna Kelvin (Vin)",
  description: "Software Engineer || AI/ML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocialSidebar />
        <RightSidebar />
        {children}
        <MobileFooter />
      </body>
    </html>
  );
}
