import * as Styles from "@/components/Dropdown/styles";

import type { IProps } from "@/components/Dropdown/index.d";

function Dropdown({ footer, items, title, visible }: IProps) {
    if (visible === false) {
        return null;
    }

    return (
        <Styles.Container>
            {title !== undefined && (
                <Styles.Header>
                    <p>{title}</p>
                </Styles.Header>
            )}

            <Styles.List>
                {items.map((item) => (
                    <Styles.Item key={item.id}>
                        <p>{item.title}</p>

                        {item.description !== undefined && (
                            <span>{item.description}</span>
                        )}
                    </Styles.Item>
                ))}
            </Styles.List>

            {footer}
        </Styles.Container>
    );
}

export default Dropdown;
