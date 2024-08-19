import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Config } from "./config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VC EAD",
  description:
    "Plataforma de comunicação interna do Acampamento Voluntários de Cristo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Config>{children}</Config>
      </body>
    </html>
  );
}
