import "@/styles/global.css";
import StyledJsxRegistry from "@/registry";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DashStack",
    description: "Painel de controle",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </body>
        </html>
    );
}
