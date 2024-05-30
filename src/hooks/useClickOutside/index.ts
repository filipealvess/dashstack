import { useCallback, useEffect } from "react";

function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    callback: () => void
) {
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                ref.current !== null &&
                ref.current.contains(event.target as Node) === false
            ) {
                callback();
            }
        },
        [callback, ref]
    );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        () => document.removeEventListener("click", handleClickOutside);
    }, [handleClickOutside]);
}

export default useClickOutside;
