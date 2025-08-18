import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View>
            <Text style={styles.Header}>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        fontSize: 100,
    },
});

export default Header;