import localFont from "next/font/local";
import "@/styles/global.css";
import StyledJsxRegistry from "@/registry";

import type { Metadata } from "next";

const font = localFont({
    src: [
        {
            path: "../assets/fonts/NunitoSans-Regular.ttf",
            weight: "400",
        },
        {
            path: "../assets/fonts/NunitoSans-SemiBold.ttf",
            weight: "600",
        },
        {
            path: "../assets/fonts/NunitoSans-Bold.ttf",
            weight: "700",
        },
    ],
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

export const metadata: Metadata = {
    title: "DashStack",
    description: "Painel de controle",
};
