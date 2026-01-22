import { Anton, Geist_Mono } from "next/font/google";

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
