import { data } from "./data";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: data?.name,
  description: data?.description,
  // icons: [
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "32x32",
  //     url: "/favicon-32x32.png",
  //   },
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "16x16",
  //     url: "/favicon-16x16.png",
  //   },
  //   {
  //     rel: "apple-touch-icon",
  //     sizes: "180x180",
  //     url: "/apple-touch-icon.png",
  //   },
  // ],
  image: [
    {
      url: "/logo.svg",
      alt: data?.name,
    },
  ],
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
