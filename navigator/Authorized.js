import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import JournalsScreen from "../screens/JournalsScreen";
import NewsScreen from "../screens/NewsScreen";
import DogScreen from "../screens/DogScreen";
import Icon from "react-native-vector-icons/Ionicons";
import CryptoScreen from "../screens/CryptoScreen";

const Tab = createBottomTabNavigator();

const Authorized = () => {
  return (
    <Tab.Navigator initialRouteName="Journals"
                   screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                      let iconName = 'newspaper';
                      switch(route.name) {
                        case 'News':
                          iconName = 'newspaper';
                          break;
                        case 'Journals':
                          iconName = 'journal';
                          break;
                        case 'Dogs':
                          iconName = 'camera';
                          break;
                        case 'Crypto':
                          iconName = 'logo-bitcoin';
                          break;
                      }
                      return <Icon name={iconName} size={24} color={focused ? 'blue' : 'black'}/>
                    },
                    tabBarLabelStyle: {
                      fontSize: 14,
                    },
                   }) }>
        <Tab.Screen component={JournalsScreen} name='Journals' />
        <Tab.Screen component={NewsScreen} name='News' />
        <Tab.Screen component={DogScreen} name='Dogs' />
        <Tab.Screen component={CryptoScreen} name='Crypto' />

    </Tab.Navigator>
  )
}

export default Authorized