import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable } from 'react-native';

const laptops = [
  { id: '1', name: 'Dell Inspiron 15', price: 699 },
  { id: '2', name: 'HP Pavilion 14', price: 549 },
  { id: '3', name: 'Lenovo ThinkPad E14', price: 799 },
  { id: '4', name: 'ASUS VivoBook 15', price: 599 },
  { id: '5', name: 'MacBook Air M2', price: 1099 },
];

export default function ProductsScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Header */}
      <View className="bg-cyan-400 px-6 py-8">
        <Text className="text-3xl font-bold text-black">
          Our Laptops 💻
        </Text>
      </View>

      {/* Products List */}
      <View className="px-6 py-6">
        {laptops.map((item) => (
          <View key={item.id} className="mb-4 rounded-2xl bg-white p-5">
            <Text className="text-xl font-bold text-gray-900">
              {item.name}
            </Text>
            <Text className="mt-2 text-lg font-bold text-cyan-600">
              ${item.price}
            </Text>
          </View>
        ))}
      </View>

      {/* Go Back Button */}
      <View className="items-center pb-8">
        <Pressable
          className="rounded-xl bg-black px-8 py-4"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-lg font-bold text-white">
            Go Back
          </Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}