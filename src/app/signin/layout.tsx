import { IProps } from "@/types/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign in - DashStack",
};

function Layout({ children }: IProps) {
    return children;
}

export default Layout;
