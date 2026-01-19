import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { HomeStyles } from "./styles/HomeStyles.module"
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';


export const Home = ()=>{

    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Rice 5kg",
            "price": 25.50
        },
        {
            "id": 2,
            "name": "Beans 1kg",
            "price": 8.00
        },
        {
            "id": 3,
            "name": "Soybean Oil 900ml",
            "price": 6.50
        },
        {
            "id": 4,
            "name": "Milk 1L",
            "price": 4.20
        },
        {
            "id": 5,
            "name": "Mozzarella Cheese 500g",
            "price": 15.00
        },
        {
            "id": 6,
            "name": "French Bread (unit)",
            "price": 0.50
        },
        {
            "id": 7,
            "name": "Whole Chicken (1kg)",
            "price": 12.00
        },
        {
            "id": 8,
            "name": "Potatoes 1kg",
            "price": 3.00
        },
        {
            "id": 9,
            "name": "Tomatoes 1kg",
            "price": 5.00
        },
        {
            "id": 10,
            "name": "Sugar 1kg",
            "price": 4.00
        }
    ])

    return(
        <View style={HomeStyles.container}>

            <View style={HomeStyles.cartContent}>

                <Text style={HomeStyles.title}>Lista de produtos</Text>

                <TouchableOpacity style={HomeStyles.cartButton}>

                    <View style={HomeStyles.dot}>

                        <Text style={HomeStyles.dotText}>3</Text>

                    </View>
                
                    <Ionicons name="cart-outline" size={40} color="black" />

                </TouchableOpacity>

            </View>

            

        </View>
    )
}