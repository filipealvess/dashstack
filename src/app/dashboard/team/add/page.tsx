"use client";

import { useRouter } from "next/navigation";
import { useId } from "react";
import { Camera } from "react-feather";
import options from "@/app/dashboard/team/add/mock";
import * as Styles from "@/app/dashboard/team/add/styles";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { Routes } from "@/constants/routes";

function Index() {
    const id = useId();
    const router = useRouter();

    return (
        <Styles.Container>
            <Styles.Header>
                <h1>Add Team Member</h1>

                <Button
                    danger
                    onClick={() => router.push(Routes.team)}
                    text="Cancel"
                    type="secondary"
                />
            </Styles.Header>

            <Styles.Form onSubmit={(event) => event.preventDefault()}>
                <Styles.Avatar>
                    <Styles.Image htmlFor={id}>
                        <Camera />
                    </Styles.Image>

                    <label htmlFor={id}>Upload Photo</label>

                    <input type="file" id={id} />
                </Styles.Avatar>

                <Styles.Grid>
                    <Input
                        label="First Name"
                        placeholder="Enter your first name"
                    />

                    <Input
                        label="Last Name"
                        placeholder="Enter your last name"
                    />

                    <Input
                        label="Your email"
                        placeholder="Enter your email"
                        type="email"
                    />

                    <Input
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        type="tel"
                    />

                    <Input label="Position" placeholder="CEO" />

                    <Select label="Gender" options={options} />
                </Styles.Grid>

                <Button styles={Styles.submit} text="Add Now" />
            </Styles.Form>
        </Styles.Container>
    );
}

export default Index;
