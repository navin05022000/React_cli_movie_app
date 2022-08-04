import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Likes from './screens/LikesScreen';
import WatchLater from './screens/WatchLaterScreen';
import Saved from './screens/SavedScreen';
import BottomTabStack from './navigations/TabScreen';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#FFA500',
                    itemStyle: { marginVertical: 5 }
                }}>
                <Drawer.Screen
                    name="Welcome"
                    options={{
                         drawerLabel: 'Welcome',
                         headerShown: false }}
                    component={BottomTabStack}
                />
                <Drawer.Screen
                    name="Likes"
                    options={{ 
                        drawerLabel: 'Liked videos',
                        headerShown: false }}
                    component={Likes}
                />
                <Drawer.Screen
                    name="WatchLater"
                    options={{ 
                        drawerLabel: 'WatchLater Videos',
                        headerShown: false }}
                    component={WatchLater}
                />
                <Drawer.Screen
                    name="Saved"
                    options={{ 
                        drawerLabel: 'Saved Videos',
                        headerShown: false }}
                    component={Saved}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
