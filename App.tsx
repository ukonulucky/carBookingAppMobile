import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { DrawerNavigator } from './src/components/navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  
  return (
    <NavigationContainer>
     <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
