"use client";

import { useId } from "react";
import * as Styles from "@/components/form/Checkbox/styles";

import type { IProps } from "@/components/form/Checkbox/index.d";

function Checkbox({ label, checked, onChange, required }: IProps) {
    const id = useId();

    return (
        <Styles.Container>
            <Styles.Input
                checked={checked}
                id={id}
                onChange={onChange}
                required={required}
                type="checkbox"
            />

            <Styles.Label htmlFor={id}>{label}</Styles.Label>
        </Styles.Container>
    );
}

export default Checkbox;
