import { useState } from "react";
import { Menu, Search } from "react-feather";
import SearchInput from "@/components/form/Input/Search";
import * as Styles from "@/components/Header/styles";
import Languages from "@/components/Menu/Languages";
import Notifications from "@/components/Menu/Notifications";
import User from "@/components/Menu/User";

import type { IProps } from "@/components/Header/index.d";

function Header({ toggleSidebar }: IProps) {
    const [searchVisible, setSearchVisible] = useState(false);

    function toggleSearch() {
        setSearchVisible((prevState) => !prevState);
    }

    return (
        <Styles.Container>
            <Styles.Main>
                <Styles.Content>
                    <Styles.MenuButton onClick={toggleSidebar}>
                        <Menu size={18} />
                    </Styles.MenuButton>

                    <SearchInput />
                </Styles.Content>

                <Styles.SearchButton onClick={toggleSearch}>
                    <Search size={18} />
                </Styles.SearchButton>

                <Notifications />

                <Languages />

                <User />
            </Styles.Main>

            {searchVisible === true && (
                <Styles.Footer>
                    <SearchInput />
                </Styles.Footer>
            )}
        </Styles.Container>
    );
}

export default Header;
