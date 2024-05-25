import { useState } from "react";
import { Globe } from "react-feather";
import Dropdown from "@/components/Dropdown";
import languages from "@/components/Menu/Languages/mock";
import * as Styles from "@/components/Menu/Languages/styles";

function Languages() {
    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState<string | undefined>("0");

    function handleSelect(id: string) {
        setSelected(id);
    }

    function toggle() {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <Styles.Container>
            <Styles.ToggleButton onClick={toggle}>
                <Globe size={18} />
            </Styles.ToggleButton>

            <Dropdown
                items={languages}
                onClick={handleSelect}
                selected={selected}
                visible={isVisible}
                title="Select language"
            />
        </Styles.Container>
    );
}

export default Languages;
