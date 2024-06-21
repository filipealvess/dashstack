"use client";

import { useRouter } from "next/navigation";
import users from "@/app/dashboard/team/mock";
import * as Styles from "@/app/dashboard/team/styles";
import UserCard from "@/components/cards/User";
import Button from "@/components/form/Button";
import { Routes } from "@/constants/routes";

function Index() {
    const router = useRouter();

    return (
        <Styles.Container>
            <Styles.Header>
                <h1>Team</h1>

                <Button
                    onClick={() => router.push(Routes.addMember)}
                    text="Add Member"
                />
            </Styles.Header>

            <Styles.Grid>
                {users.map((user) => (
                    <UserCard key={user.email} {...user} />
                ))}
            </Styles.Grid>
        </Styles.Container>
    );
}

export default Index;
