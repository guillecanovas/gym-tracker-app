import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

/* Estático */
const workout_cats = [
    {
        id: 1,
        name: "Push",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    },
    {
        id: 2,
        name: "Pull",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    },
    {
        id: 3,
        name: "Legs",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    },
    {
        id: 4,
        name: "Arms",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    }, 
    {
        id: 5,
        name: "Shoulders",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    },
    {
        id: 6,
        name: "Glutes",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    },
    {
        id: 7,
        name: "Abs",
        image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png"
    }
]

const Categories = () => {

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal 
            showsHorizontalScrollIndicator={false}
        >
            {/* Category Card */}
            {workout_cats.map((category) => (
                <CategoryCard 
                    key={category._id}
                    imgUrl={category.image}
                    title={category.name}
                />
            ))}

        </ScrollView>
    )
}

export default Categories
