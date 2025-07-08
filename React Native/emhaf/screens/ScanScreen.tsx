import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScreenContent } from '../components/ScreenContent';

export default function ScanScreen() {
  return (
    <>
      <ScreenContent title="Scan" path="screens/ScanScreen.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
