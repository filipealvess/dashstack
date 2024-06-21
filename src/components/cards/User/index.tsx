import * as Styles from "@/components/cards/User/styles";

import type { IProps } from "@/components/cards/User/index.d";

function UserCard({ avatar, email, name, role }: IProps) {
    return (
        <Styles.Container>
            <Styles.Avatar
                alt={`${name}'s avatar image`}
                height={100}
                placeholder="blur"
                src={avatar}
                width={100}
            />

            <Styles.Infos>
                <strong>{name}</strong>
                <p>{role}</p>
                <span>{email}</span>
            </Styles.Infos>
        </Styles.Container>
    );
}

export default UserCard;
