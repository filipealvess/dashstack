import { useCallback, useEffect } from "react";
import { PieChart, Users } from "react-feather";
import Link from "@/components/Sidebar/Link";
import { TABLET_WIDTH } from "@/constants/responsive";
import * as Styles from "@/components/Sidebar/styles";

import type { IProps } from "@/components/Sidebar/index.d";

function Sidebar({ onClose, visible }: IProps) {
    const handleClose = useCallback(() => {
        if (window.innerWidth <= TABLET_WIDTH) {
            onClose();
        }
    }, []);

    useEffect(() => {
        handleClose();

        window.addEventListener("resize", handleClose);

        () => window.removeEventListener("resize", handleClose);
    }, [handleClose]);

    return (
        <>
            <Styles.Overlay $visible={visible} onClick={onClose} />

            <Styles.Container $visible={visible}>
                <Styles.Logo>
                    <span>Dash</span>
                    <span>Stack</span>
                </Styles.Logo>

                <Styles.Links>
                    <Link onClick={handleClose} route="/dashboard">
                        <PieChart size={16} />
                        <Link.Text>Dashboard</Link.Text>
                    </Link>

                    <Link onClick={handleClose} route="/dashboard/team">
                        <Users size={16} />
                        <Link.Text>Team</Link.Text>
                    </Link>
                </Styles.Links>
            </Styles.Container>
        </>
    );
}

export default Sidebar;
