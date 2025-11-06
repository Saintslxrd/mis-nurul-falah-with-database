import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pilih style yang kamu pakai
});

export const metadata: Metadata = {
  title: "MIS Nurul Falah Areman",
  description: "Website resmi sekolah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
