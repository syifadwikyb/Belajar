import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScreenContent } from '../components/ScreenContent';

export default function QuestScreen() {
  return (
    <>
      <ScreenContent title="Quest" path="screens/QuestScreen.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
