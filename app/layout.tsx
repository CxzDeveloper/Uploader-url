import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CXZTOURL — Upload. Share. Done.",
  description: "Fast image, video and audio to URL uploader.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
