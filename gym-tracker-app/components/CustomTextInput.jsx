import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import React, { useState } from "react";
import Colors from "../assets/constants/Colors";
import FontSize from "../assets/constants/FontSize";
import Spacing from "../assets/constants/Spacing";

const CustomTextInput = ({ nombre }) => {
    
    const [focused, setFocused] = useState(false);

    return (
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholderTextColor={Colors.darkText}
            style={[
                {
                fontFamily: "PoppinsRegular",
                fontSize: FontSize.small,
                padding: Spacing * 2,
                backgroundColor: Colors.lightPrimary,
                borderRadius: Spacing,
                marginVertical: Spacing,
                },
                focused && {
                borderWidth: 3,
                borderColor: Colors.primary,
                shadowOffset: { width: 4, height: Spacing },
                shadowColor: Colors.primary,
                shadowOpacity: 0.2,
                shadowRadius: Spacing,
                },
            ]}
            placeholder={nombre}
        />
    )
}

export default CustomTextInput