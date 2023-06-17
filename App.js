import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntegrantList from './src/components/IntegrantList';
import IntegrantDetails from './src/components/IntegrantDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntegrantList"
          component={IntegrantList}
          options={{headerTitle: 'Lista de Integrantes'}}
        />
        <Stack.Screen
          name="IntegrantDetails"
          component={IntegrantDetails}
          options={{headerTitle: 'Detalhes do Integrante'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
