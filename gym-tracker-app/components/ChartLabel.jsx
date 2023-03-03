import { View, Text, Image } from 'react-native'
import React from 'react'

const ChartLabel = ({ icon, currency, code}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{uri: icon}}
        resizeMode="cover"
        style={{
            width: 25,
            height: 25,
            marginTop: 5
        }}
      />

      <View style={{ marginLeft: 8 }}>
        <Text>{currency}</Text>
        <Text style={{ color: "gray" }}>{code}</Text>
      </View>

    </View>
  )
}

export default ChartLabel