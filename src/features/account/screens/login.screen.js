import React, { useState, useContext } from "react";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/typography/text.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { onLogin, error } = useContext(AuthenticationContext)

    return (
        <AccountBackground >
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="Email"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large" />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(u) => setPassword(u)}
                />
                {
                    error && (
                        <ErrorContainer size="large">
                            <Text variant="error">{error}</Text>
                        </ErrorContainer>
                    )
                }

                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
            </AccountContainer>
            <Spacer size="large" >
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    )
}