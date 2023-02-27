import * as React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export const RestaurantAccordion = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView>
            <List.Section>
                <List.Accordion
                    title="Breakfast"
                    left={props => <List.Icon {...props} icon="bread-slice" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    left={props => <List.Icon {...props} icon="hamburger" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    left={props => <List.Icon {...props} icon="food-variant" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    left={props => <List.Icon {...props} icon="cup" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>
        </ScrollView>
    );
};
