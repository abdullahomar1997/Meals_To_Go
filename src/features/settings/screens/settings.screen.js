import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { Text } from '../../../components/typography/text.components';
import { SafeArea } from '../../../components/utils/safe-area.components2';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
`

const AvatarContainer = styled.View`
    align-items:center;
`

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext)
    return (
        <SafeArea>
            <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                <Avatar.Icon size={180} icon="human" backgroundColor="#218280" />
            </TouchableOpacity>
                <Spacer position="top" size="large" >
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
}