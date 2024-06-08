import { PieChart, Users } from "react-feather";
import Link from "@/components/Sidebar/Link";
import * as Styles from "@/components/Sidebar/styles";

import type { IProps } from "@/components/Sidebar/index.d";

function Sidebar({ visible }: IProps) {
    return (
        <Styles.Container $visible={visible}>
            <Styles.Logo>
                <span>Dash</span>
                <span>Stack</span>
            </Styles.Logo>

            <Styles.Links>
                <Link route="/dashboard">
                    <PieChart size={16} />
                    <Link.Text>Dashboard</Link.Text>
                </Link>

                <Link route="/dashboard/team">
                    <Users size={16} />
                    <Link.Text>Team</Link.Text>
                </Link>
            </Styles.Links>
        </Styles.Container>
    );
}

export default Sidebar;
