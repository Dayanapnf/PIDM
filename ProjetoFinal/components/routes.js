import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Home from './pages/Home/Home'
import AddTask from './pages/AddTask/AddTask'
import FraseMotivacional from './pages/FraseMotivacional/FraseMotivacional'
import Perfil from './pages/Perfil/Perfil'
import Pomodoro from './pages/Pomodoro/Pomodoro'

import ButtonAdd from "./buttons/ButtonAdd";

import {Entypo, Feather} from '@expo/vector-icons'

const CustomTabLabel = ({ focused, color, label }) => (
    <Text style={{ color, fontSize: 10,  width: 80, textAlign: 'center', paddingTop: 1 , height: 20}}>{label}</Text>
  );
const Tab = createBottomTabNavigator();

const  Routes = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "#78C2A4",
            tabBarInactiveTintColor: "#121212",
            tabBarItemStyle: {
              paddingTop:3,
              flex: 1,
            },
            tabBarStyle: {
              display: "flex",
            },
            labelStyle: {
                fontSize: 8, 
              },
          }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon:({size, color}) => (
                    <Entypo name="home" size={size} color={color}/>

                ),
                tabBarLabel: ({ focused, color }) => (
                  <CustomTabLabel focused={focused} color={color} label="Home" />
                ),
            }}
            />
            <Tab.Screen 
            name="Pomodoro" 
            component={Pomodoro}
            options={{
                tabBarIcon:({size,color}) => (
                    <Entypo name="clock" size={size} color={color}/>
                ),
                tabBarLabel: ({ focused, color }) => (
                  <CustomTabLabel focused={focused} color={color} label="Pomodoro" />
                ),
            }}
            />
            <Tab.Screen 
            name="Add" 
            component={AddTask}
            options={{
                tabBarLabel:'',
                tabBarIcon:({focused, size,color}) => (
                    <ButtonAdd focused={focused} size={size} color={color}/>
                )
                
            }}
            />
            <Tab.Screen 
            name="Motivacional" 
            component={FraseMotivacional}
            options={{
                tabBarIcon:({size,color}) => (
                    <Entypo name="message" size={size} color={color}/>
                ),
                tabBarLabel: ({ focused, color }) => (
                  <CustomTabLabel focused={focused} color={color} label="Motivacional" />
                ),
            }}
            />
            <Tab.Screen 
            name="Perfil" 
            component={Perfil}
            options={{
                tabBarIcon:({size,color}) => (
                    <Entypo name="user" size={size} color={color}/>
                ),
                tabBarLabel: ({ focused, color }) => (
                  <CustomTabLabel focused={focused} color={color} label="Perfil" />
                ),
            }}/>
        </Tab.Navigator>
    )
}
export default Routes;