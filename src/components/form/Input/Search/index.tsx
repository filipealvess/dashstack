import { useRef } from "react";
import { Search as SearchIcon } from "react-feather";
import * as Styles from "@/components/form/Input/Search/styles";

function Search() {
    const inputRef = useRef<HTMLInputElement>(null);

    function focus() {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }

    return (
        <Styles.Container onClick={focus}>
            <SearchIcon size={14} opacity={0.5} />

            <Styles.Input type="search" placeholder="Search" ref={inputRef} />
        </Styles.Container>
    );
}

export default Search;
