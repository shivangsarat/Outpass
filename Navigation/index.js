import { createStackNavigator, createAppContainer } from "react-navigation";

import HomePage from '../Components/HomePage';
import Signin from '../Components/Signin';

export default createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    Signin: {
        screen: Signin,
        navigationOptions: {
            header: null
        }
    },
});