import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { Icon, colors } from 'react-native-elements';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
      <Drawer.Navigator
          screenOptions={{
              headerShown: false
          }}
      >
          <Drawer.Screen name="stackNavigator" component={StackNavigator}
              options={{
                  title: "Home",
                  drawerIcon: ({ focused, size }) => <Icon
                      type='material-community'
                      name='home'
                      color={focused ? "#7cc" : colors.grey3}
                      size={size}
                  />

              }}
          />
    </Drawer.Navigator>
  );
}