import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TollywoodScreen from '../screens/TollywoodScreen';
import BollywoodScreen from '../screens/BollywoodScreen';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="TollywoodScreen">
            <Tab.Screen
                name="TollywoodScreen"
                component={TollywoodScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#ADD8E6', 
                    },
                    headerTintColor: '#000000', 
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                    },
                    headerTitleAlign:'center',
                    
                }}
            />
            <Tab.Screen
                name="BollywoodScreen"
                component={BollywoodScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#ADD8E6', 
                    },
                    headerTintColor: '#000000', 
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                    },
                    headerTitleAlign:'center'
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabStack;