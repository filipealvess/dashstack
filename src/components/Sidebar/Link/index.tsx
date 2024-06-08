import { usePathname } from "next/navigation";
import * as Styles from "@/components/Sidebar/Link/styles";

import type { IProps } from "@/components/Sidebar/Link/index.d";

function Link({ route, children }: IProps) {
    const path = usePathname();

    return (
        <Styles.Container>
            {path === route && <Styles.Badge />}

            <Styles.Link $active={path === route} href={route}>
                {children}
            </Styles.Link>
        </Styles.Container>
    );
}

Link.Text = Styles.Text;

export default Link;
