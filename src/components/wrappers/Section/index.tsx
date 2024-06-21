import * as Styles from "@/components/wrappers/Section/styles";

import type { IProps } from "@/components/wrappers/Section/index.d";

function SectionWrapper({ children, title }: IProps) {
    return (
        <Styles.Container>
            <Styles.Header>
                <p>{title}</p>
            </Styles.Header>

            {children}
        </Styles.Container>
    );
}

export default SectionWrapper;
