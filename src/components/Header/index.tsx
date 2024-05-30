import { Menu } from "react-feather";
import SearchInput from "@/components/form/Input/Search";
import * as Styles from "@/components/Header/styles";
import Languages from "@/components/Menu/Languages";
import Notifications from "@/components/Menu/Notifications";
import User from "@/components/Menu/User";
import { Spacer } from "@/components/styled/Spacer";

function Header() {
    return (
        <Styles.Container>
            <Styles.MenuButton>
                <Menu size={18} />
            </Styles.MenuButton>

            <SearchInput />

            <Spacer $expand />

            <Notifications />

            <Languages />

            <User />
        </Styles.Container>
    );
}

export default Header;
