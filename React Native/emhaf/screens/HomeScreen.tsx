import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScreenContent } from '../components/ScreenContent';

export default function HomeScreen() {
  return (
    <>
      <ScreenContent title="Home" path="screens/HomeScreen.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
