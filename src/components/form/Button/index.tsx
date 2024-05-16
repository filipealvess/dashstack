import * as Styles from "@/components/form/Button/styles";

import type { IProps } from "@/components/form/Button/index.d";

function Button({ disabled, onClick, styles, text }: IProps) {
    return (
        <Styles.Container
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
