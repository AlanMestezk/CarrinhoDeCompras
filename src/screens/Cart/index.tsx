import { View, Text } from "react-native"
import { CartStyles } from "./styles/CartStyles.module"

export const Cart = ()=>{

    return(
        <View style={CartStyles.container}>

            <Text>Cart Page - Carrinho de compras</Text>

        </View>
    )
}