import * as Styles from "@/components/form/Select/styles";

import type { IProps } from "@/components/form/Select/index.d";

function Select({ label, options }: IProps) {
    return (
        <Styles.Container>
            <Styles.Label>{label}:</Styles.Label>

            <Styles.Select defaultValue="default">
                <option disabled value="default">
                    Select
                </option>

                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.text}
                    </option>
                ))}
            </Styles.Select>
        </Styles.Container>
    );
}

export default Select;
