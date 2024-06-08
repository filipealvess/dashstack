import { IProps } from "@/types/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team - DashStack",
};

function Layout({ children }: IProps) {
    return children;
}

export default Layout;
