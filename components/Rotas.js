import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from './Home';
import OnePiece from './OnePiece';
import OnePunch from './OnePunch';
import Naruto from './Naruto';

export default function Rotas() {

  return (

    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      
      <Tab.Screen name="Home" 
                  component={ Home }
                  options={{ tabBarIcon:({color, size})=> <MaterialCommunityIcons name="home"
                                                                                  color={ color }
                                                                                  size={ size } />  }} 
      />

      <Tab.Screen name="OnePiece" 
                  component={ OnePiece }
                  options={{ tabBarIcon:({color, size})=> <MaterialCommunityIcons name="diamond"
                                                                                  color={ color }
                                                                                  size={ size } />  }} 
      />

      
      <Tab.Screen name="OnePunch" 
                  component={ OnePunch }
                  options={{ tabBarIcon:({color, size})=> <MaterialCommunityIcons name="fireplace"
                                                                                  color={ color }
                                                                                  size={ size } />  }} 
      />

      <Tab.Screen name="Naruto" 
                  component={ Naruto }
                  options={{ tabBarIcon:({color, size})=> <MaterialCommunityIcons name="spa"
                                                                                  color={ color }
                                                                                  size={ size } />  }} 
      />
    </Tab.Navigator>

  );

}