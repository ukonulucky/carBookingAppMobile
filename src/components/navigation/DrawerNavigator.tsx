import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
      <Drawer.Navigator
          screenOptions={{
              headerShown: false
          }}
      >
      <Drawer.Screen name="stackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
}