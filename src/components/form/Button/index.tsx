import * as Styles from "@/components/form/Button/styles";

import type { IProps } from "@/components/form/Button/index.d";

function Button({ disabled, onClick, styles, text, type = "primary" }: IProps) {
    return (
        <Styles.Container
            $type={type}
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
