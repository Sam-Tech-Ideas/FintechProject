import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Welcome"
        options={{headerShown: false}}
      component={Welcome} />
      <Stack.Screen name="Home" component={Home}
      options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
