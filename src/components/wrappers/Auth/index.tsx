"use client";

import * as Styles from "@/components/wrappers/Auth/styles";

import type { IProps } from "@/types/wrapper.d";

function AuthWrapper({ children }: IProps) {
    return (
        <Styles.Container>
            <Styles.Content>{children}</Styles.Content>
        </Styles.Container>
    );
}

AuthWrapper.Title = Styles.Title;
AuthWrapper.Subtitle = Styles.Subtitle;
AuthWrapper.Navigation = Styles.Navigation;

export default AuthWrapper;
