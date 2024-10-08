import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux"
import { store } from "./redux/store";
import TelaTeste from "./src/telas/TelaTeste";
import Tela2 from "./src/telas/Tela2";
import RecuperarSenha from "./src/telas/RecuperarSenha";
import Relatorio from "./src/telas/Relatorio"
import NovaConta from "./src/telas/NovaConta"
import NovaPesquisa from "./src/telas/NovaPesquisa";
import LoginScreen from "./src/telas/Login";

const Stack = createStackNavigator()


const App = () => {
    return(
        <Provider store = {store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#2b1d62'}, headerTintColor: '#573fba', headerTitleStyle: {color: '#ffffff', fontSize: 26} }}>
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="NovaConta" component={NovaConta}/>
                    <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
                    <Stack.Screen name="TelaTeste" component={TelaTeste} />
                    <Stack.Screen name="Relatorio" component={Relatorio}/>
                    <Stack.Screen name="NovaPesquisa" component={NovaPesquisa}/>
                    <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen}/>                  
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


export default App