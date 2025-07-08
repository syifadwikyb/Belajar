import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-green-600">
      <Text className="text-white text-2xl font-bold mb-4">Halaman Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        className="bg-white px-4 py-2 rounded-lg"
      >
        <Text className="text-green-600 font-semibold">Ke Profil</Text>
      </TouchableOpacity>
    </View>
  );
}
