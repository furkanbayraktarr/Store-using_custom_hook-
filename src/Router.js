import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products/Products";
import Detail from "./pages/Detail/Detail";

const Stack = createNativeStackNavigator()

 function Router() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductsPage' component={Products} 
                options={{
                    title:'Store',
                    headerStyle:{backgroundColor:'orange'},
                    headerTitleStyle:{color:'white',fontSize:23}
                }} />
                <Stack.Screen name='DetailPage' component={Detail} 
                options={{
                    title:'Detail',
                    headerStyle:{backgroundColor:'orange'},
                    headerTitleStyle:{color:'white',fontSize:23},
                    headerTintColor:'white',
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
