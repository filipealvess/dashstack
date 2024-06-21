import { usePathname } from "next/navigation";
import * as Styles from "@/components/Sidebar/Link/styles";

import type { IProps } from "@/components/Sidebar/Link/index.d";

function Link({ route, children, onClick, paths }: IProps) {
    const path = usePathname();

    const isActive = paths?.includes(path) ?? path === route;

    return (
        <Styles.Container>
            {isActive === true && <Styles.Badge />}

            <Styles.Link onClick={onClick} $active={isActive} href={route}>
                {children}
            </Styles.Link>
        </Styles.Container>
    );
}

Link.Text = Styles.Text;

export default Link;
