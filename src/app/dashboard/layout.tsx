"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import * as Styles from "@/app/dashboard/styles";

import type { IProps } from "@/types/wrapper.d";

function Layout({ children }: IProps) {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    function toggleSidebar() {
        setSidebarVisible((prevState) => !prevState);
    }

    return (
        <Styles.Container>
            <Sidebar
                onClose={() => setSidebarVisible(false)}
                visible={sidebarVisible}
            />

            <Styles.Content $sidebarVisible={sidebarVisible}>
                <Header toggleSidebar={toggleSidebar} />

                {children}
            </Styles.Content>
        </Styles.Container>
    );
}

export default Layout;
