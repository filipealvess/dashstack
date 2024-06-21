import * as Styles from "@/components/form/Button/styles";

import type { IProps } from "@/components/form/Button/index.d";

function Button({
    danger = false,
    disabled,
    onClick,
    styles,
    text,
    type = "primary",
}: IProps) {
    return (
        <Styles.Container
            $type={type}
            $danger={danger}
            disabled={disabled}
            onClick={onClick}
            style={styles}
            type="submit"
        >
            {text}
        </Styles.Container>
    );
}

export default Button;
