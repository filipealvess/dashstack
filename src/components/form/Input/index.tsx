import { useId } from "react";
import * as Styles from "@/components/form/Input/styles";

import type { IProps } from "@/components/form/Input/index.d";

function Input({
    onChange,
    label,
    placeholder,
    required,
    type,
    value,
}: IProps) {
    const id = useId();

    return (
        <Styles.Container>
            <Styles.Label htmlFor={id}>{label}:</Styles.Label>

            <Styles.Input
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}
            />
        </Styles.Container>
    );
}

export default Input;
