import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-cyan-400">
      <Text className="text-3xl font-bold text-black">
        Welcome to Laptop Store
      </Text>
      
    </View>
  );
}