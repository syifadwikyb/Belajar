// App.jsx
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native'; // Import View, Text, dan SafeAreaView
import { StatusBar } from 'expo-status-bar'; // Untuk mengelola status bar

import './global.css'; // Penting untuk NativeWind/Tailwind CSS

export default function App() {
  return (
    // SafeAreaView membantu memastikan konten tidak tumpang tindih dengan notch atau status bar
    <SafeAreaView className="flex-1 bg-blue-50">
      {/* View sebagai container utama dengan styling Tailwind CSS */}
      {/* Menambahkan kelas 'flex-1', 'justify-center', 'items-center', dan 'p-6' */}
      {/* agar konten berada di tengah dan memiliki padding */}
      <View className="flex-1 justify-center items-center p-6 bg-black">
        <Text className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">
          Hello world
        </Text>
      </View>

      {/* StatusBar untuk mengontrol tampilan status bar di perangkat */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
