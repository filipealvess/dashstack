import { useState } from "react";
import { User as UserIcon } from "react-feather";
import Dropdown from "@/components/Dropdown";
import options from "@/components/Menu/User/mock";
import * as Styles from "@/components/Menu/User/styles";
import { useRouter } from "next/navigation";

function User() {
    const [isVisible, setIsVisible] = useState(false);

    const router = useRouter();

    function handleClick(id: string) {
        if (id === "3") {
            router.push("/signin");
        }
    }

    function toggle() {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <Styles.Container>
            <Styles.ToggleButton onClick={toggle}>
                <UserIcon size={18} />
            </Styles.ToggleButton>

            <Dropdown
                items={options}
                onClick={handleClick}
                visible={isVisible}
            />
        </Styles.Container>
    );
}

export default User;
