import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le clin d’œil des Corbières",
  description: "Le clin d'oeil des corbières vous accueillent pour vous offrir un grand choix de montures de qualité pour vos lunettes de vue. N'hésitez pas à prendre rendez-vous avec nous",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
