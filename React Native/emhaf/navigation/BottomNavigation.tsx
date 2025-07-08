import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import QuestScreen from '../screens/QuestScreen';
import ScanScreen from '../screens/ScanScreen';
import CompletedScreen from '../screens/CompletedScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1f2937' }, // Tailwind: bg-gray-800
        tabBarLabelStyle: { color: 'white' },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quest" component={QuestScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
}
