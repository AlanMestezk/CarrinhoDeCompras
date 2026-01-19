
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { Cart } from "../screens/Cart";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function Routes() {

    return(

        <Stack.Navigator>

            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Carrinho de compras" 
                component={Cart} 
            />   

        </Stack.Navigator>
    )

}