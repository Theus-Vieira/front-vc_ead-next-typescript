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
      </head>
      <body>
        <Config>{children}</Config>
      </body>
    </html>
  );
}
