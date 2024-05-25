import { Check } from "react-feather";
import * as Styles from "@/components/Dropdown/styles";

import type { IProps } from "@/components/Dropdown/index.d";

function Dropdown({
    footer,
    items,
    onClick = () => null,
    selected,
    title,
    visible,
}: IProps) {
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
                    <Styles.ItemWrapper
                        key={item.id}
                        onClick={() => onClick(item.id)}
                    >
                        <Styles.Item>
                            <p>{item.title}</p>

                            {item.description !== undefined && (
                                <span>{item.description}</span>
                            )}
                        </Styles.Item>

                        {item.id === selected && <Check size={18} />}
                    </Styles.ItemWrapper>
                ))}
            </Styles.List>

            {footer}
        </Styles.Container>
    );
}

export default Dropdown;
