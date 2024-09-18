import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le clin d’œil des Corbières",
  description: "Votre opticien ",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.jpg" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
