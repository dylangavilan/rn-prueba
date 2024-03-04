import LoginScreen from "../screens/LoginScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const Unauthorized = () => {

  return (
    <Tab.Navigator>
        <Tab.Screen name='login' component={LoginScreen} />
    </Tab.Navigator>
  )
}

export default Unauthorized