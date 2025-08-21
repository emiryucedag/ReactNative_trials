import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";


const Title = (props) => {
   
    return (
        <View>
            <Text style={[styles.Title,{color: props.color}]}>
                 {props.numberOfLines} - {props.text} 
            </Text>
        </View>
    );
};

const styles= StyleSheet.create({
    Title: {
        fontSize: 60,
 
    },
});

Title.PropTypes={
    text: PropTypes.string,
};

export default Title;