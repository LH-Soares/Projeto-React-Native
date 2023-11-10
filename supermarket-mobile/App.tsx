import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import CreateAccount from "./src/pages/createAccount/CreateAccount";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import Home from "./src/pages/home/Home";
import Icon from "react-native-vector-icons/AntDesign";
import { Text } from "react-native";
import ShoppingCart from "./src/pages/shoppingCart/ShoppingCart";

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} ></Stack.Screen>
      <Stack.Screen options={({navigation}) => {
        return{
          headerBackVisible:false, 
          headerTitleAlign: "center",
          title: "Ofertas",
          headerRight: () => (
            <>  
            <Icon onPress={() => (navigation.navigate('ShoppingCart'))} name="shoppingcart" size={28}></Icon>
            <Text onPress={() => (navigation.navigate('Login'))} style={{marginLeft: "10%", fontSize: 20}}>Sair</Text>
            </>      
          )
        }
      }}name="Home" component={Home} ></Stack.Screen>
      <Stack.Screen name="CreateAccount" component={CreateAccount} ></Stack.Screen>
      <Stack.Screen options={{title:'Cancelar', headerTintColor:'#000'}}name="ForgotPassword" component={ForgotPassword} ></Stack.Screen>
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} ></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


export default App;