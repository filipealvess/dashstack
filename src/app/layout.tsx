import "@/styles/global.css";
import StyledJsxRegistry from "@/registry";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

export const metadata: Metadata = {
    title: "DashStack",
    description: "Painel de controle",
};

const font = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={font.className}>
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </body>
        </html>
    );
}
