import React from 'react';
import { Text, View, Button, Image, Pressable, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScreenContent } from '../components/ScreenContent';

type DataType = {
  text: string;
};

const data: DataType = {
  text: 'halomasse'
};

const items = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
  { id: '5', name: 'Item 5' },
  { id: '6', name: 'Item 6' },
  { id: '7', name: 'Item 7' },
  { id: '8', name: 'Item 8' },
  { id: '9', name: 'Item 9' },
  { id: '10', name: 'Item 10' },
];

const ChildrenComp = () => (
  <View className="flex-1 w-full">
    <Text className="w-full mb-4 text-xl text-center text-black">{data.text}</Text>
    
    <View className="w-full mb-4">
      <Button 
        title="Press Me" 
        onPress={() => alert('Button pressed!')}
        color="#3b82f6"
      />
    </View>
    
    <Pressable
      className="px-4 py-2 mt-12 mb-4 bg-blue-500 rounded-lg"
      onPress={() => alert('Pressable clicked!')}
    >
      <Text className="text-center text-white">Custom Button</Text>
    </Pressable>
    
    <View className="items-center mb-4">
      <Image
        className="w-32 h-32 rounded-full"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </View>
    
    <View className="w-full">
      <Text className="mb-2 text-lg font-bold">List Items:</Text>
      <FlatList
        data={items}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-3 mb-2 bg-gray-100 rounded">
            <Text className="text-black">{item.name}</Text>
          </View>
        )}
      />
    </View>
  </View>
);

export default function CompletedScreen() {
  return (
    <>
      <ScreenContent title="Completed" path="screens/CompletedScreen.tsx">
        <ChildrenComp />
      </ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}