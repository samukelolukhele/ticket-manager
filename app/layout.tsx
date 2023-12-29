import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar";
import ReactQueryClientProvider from "./components/ReactQueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket Manager",
  description: "Manage & Track Workflows Efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
        <ReactQueryDevtools initialIsOpen />

        <BootstrapClient />
      </html>
    </ReactQueryClientProvider>
  );
}
