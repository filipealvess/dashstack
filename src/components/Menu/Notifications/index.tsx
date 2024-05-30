import { useRef, useState } from "react";
import { Bell } from "react-feather";
import Dropdown from "@/components/Dropdown";
import notifications from "@/components/Menu/Notifications/mock";
import * as Styles from "@/components/Menu/Notifications/styles";
import useClickOutside from "@/hooks/useClickOutside";

function Notifications() {
    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef<HTMLElement>(null);

    useClickOutside(ref, () => setIsVisible(false));

    function toggle() {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <Styles.Container ref={ref}>
            <Styles.ToggleButton onClick={toggle}>
                <Bell size={18} />
            </Styles.ToggleButton>

            <Dropdown
                footer={
                    <Styles.ShowMoreButton>
                        See all notifications
                    </Styles.ShowMoreButton>
                }
                items={notifications}
                visible={isVisible}
                title="Notifications"
            />
        </Styles.Container>
    );
}

export default Notifications;
