import { data } from "./data";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: `${data?.name} | ${data?.description}`,
  description: data?.description,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  image: [
    {
      url: "/logo.svg",
      alt: data?.name,
    },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
