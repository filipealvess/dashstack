"use client";

import Link from "next/link";
import { useState } from "react";
import * as Styles from "@/app/signup/styles";
import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
import { Spacer } from "@/components/styled/Spacer";
import Auth from "@/components/wrappers/Auth";
import { Routes } from "@/constants/routes";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    const disabled =
        email.trim().length === 0 ||
        password.trim().length === 0 ||
        name.trim().length === 0 ||
        acceptTerms === false;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <Auth>
            <Auth.Title>Create an Account</Auth.Title>

            <Auth.Subtitle>Create a account to continue</Auth.Subtitle>

            <form onSubmit={handleSubmit}>
                <Input
                    onChange={({ target: { value } }) => setEmail(value)}
                    label="Email address"
                    placeholder="example@email.com"
                    required
                    type="email"
                    value={email}
                />

                <Spacer $height={32} />

                <Input
                    onChange={({ target: { value } }) => setName(value)}
                    label="Username"
                    placeholder="John Doe"
                    required
                    value={name}
                />

                <Spacer $height={32} />

                <Input
                    onChange={({ target: { value } }) => setPassword(value)}
                    label="Password"
                    placeholder="**********"
                    required
                    type="password"
                    value={password}
                />

                <Spacer $height={16} />

                <Checkbox
                    checked={acceptTerms}
                    label="I accept terms and conditions"
                    onChange={() => setAcceptTerms((prevState) => !prevState)}
                    required
                />

                <Spacer $height={40} />

                <Button
                    disabled={disabled}
                    styles={Styles.button}
                    text="Sign up"
                />

                <Spacer $height={16} />

                <Auth.Navigation>
                    <p>Already have an account?</p>

                    <Link href={Routes.signin}>Login</Link>
                </Auth.Navigation>
            </form>
        </Auth>
    );
}

export default Signup;
