
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import { COLORS } from '../assets/constants/theme';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
        className="flex-row pb-4 mb-7"
        style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
        }}
    >
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          className="flex-1"
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: COLORS.blue5, fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}