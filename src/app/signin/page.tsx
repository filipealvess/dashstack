"use client";

import Link from "next/link";
import { useState } from "react";
import * as Styles from "@/app/signin/styles";
import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
import { Spacer } from "@/components/styled/Spacer";
import Auth from "@/components/wrappers/Auth";
import { Routes } from "@/constants/routes";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberPassword, setRememberPassword] = useState(true);

    const disabled = email.trim().length === 0 || password.trim().length === 0;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <Auth>
            <Auth.Title>Login to Account</Auth.Title>

            <Auth.Subtitle>
                Please enter your email and password to continue
            </Auth.Subtitle>

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
                    onChange={({ target: { value } }) => setPassword(value)}
                    label="Password"
                    placeholder="**********"
                    required
                    type="password"
                    value={password}
                />

                <Spacer $height={16} />

                <Checkbox
                    checked={rememberPassword}
                    label="Remember password"
                    onChange={() =>
                        setRememberPassword((prevState) => !prevState)
                    }
                />

                <Spacer $height={40} />

                <Button
                    disabled={disabled}
                    styles={Styles.button}
                    text="Sign in"
                />

                <Spacer $height={16} />

                <Auth.Navigation>
                    <p>Don&#39;t have an account?</p>

                    <Link href={Routes.signup}>Create Account</Link>
                </Auth.Navigation>
            </form>
        </Auth>
    );
}

export default Login;
