// import {View, Text, ScrollView, SafeAreaView, Image, Touchable, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
// import React from 'react';
// import Welcome from './src/screens/Welcome';
// import Home from './src/screens/Home';
// import { Icon, List } from 'react-native-paper';
// import {createDrawerNavigator} from '@react-navigation/drawer';



// const Drawer = createDrawerNavigator();

// const App = () => {

//   return (
// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Welcome" component={Welcome} />
//     <Stack.Screen name="Home" component={Home} />
//   </Stack.Navigator>

  

// </NavigationContainer>
   
//   );
// };

// export default App;


import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/components/navigation'

const App = () => {
  return (
   <>
   <Navigation/>
   </>
  )
}

export default App
