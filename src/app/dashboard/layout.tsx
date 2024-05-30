"use client";

import Header from "@/components/Header";
import * as Styles from "@/app/dashboard/styles";

import type { IProps } from "@/types/wrapper.d";

function Layout({ children }: IProps) {
    return (
        <Styles.Container>
            <Header />

            {children}
        </Styles.Container>
    );
}

export default Layout;
