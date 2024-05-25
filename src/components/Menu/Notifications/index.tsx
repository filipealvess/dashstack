import { useState } from "react";
import { Bell } from "react-feather";
import Dropdown from "@/components/Dropdown";
import notifications from "@/components/Menu/Notifications/mock";
import * as Styles from "@/components/Menu/Notifications/styles";

function Notifications() {
    const [isVisible, setIsVisible] = useState(false);

    function toggle() {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <Styles.Container>
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
