import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

//Renderizar la categoria
const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="w-24 h-24 mr-2">
            <Image 
                source={{
                    uri: imgUrl,
                }}
                className="h-20 w-20 rounnded"
            />
            <Text className="-mt-2 left-1 font-bold">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
