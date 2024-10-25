import type { Metadata } from "next";
import { Config } from "./config";

export const metadata: Metadata = {
  title: "VC EAD",
  description:
    "Plataforma de comunicação interna do Acampamento Voluntários de Cristo",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Config>{children}</Config>
      </body>
    </html>
  );
}
