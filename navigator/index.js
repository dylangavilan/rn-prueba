// import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Authorized from "./Authorized";
// import Unauthorized from "./Unauthorized";
// import { useSelector } from "react-redux";
// import { getAuthState } from "../app/auth";

const Navigator = () => {
    // const auth  = useSelector((state) => state.auth)
    // const isAuthenticated = useSelector(state => getAuthState(state).isAuthenticated);

    return (
        <NavigationContainer>
            <Authorized /> 
        </NavigationContainer>
    )
}
export default Navigator;