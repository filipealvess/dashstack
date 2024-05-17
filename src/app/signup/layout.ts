import type { Metadata } from "next";
import type { IProps } from "@/types/wrapper.d";

export const metadata: Metadata = {
    title: "Sign up - DashStack",
};

function Layout({ children }: IProps) {
    return children;
}

export default Layout;
