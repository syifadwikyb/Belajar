import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-blue-600">
      <Text className="text-white text-2xl font-bold mb-4">Halaman Profil</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-white px-4 py-2 rounded-lg"
      >
        <Text className="text-blue-600 font-semibold">Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}
