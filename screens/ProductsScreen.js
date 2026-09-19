import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable, Image } from 'react-native';
import DellImg from '../assets/products/Dell.png';
import HPImg from '../assets/products/HP.png';
import LenovoImg from '../assets/products/Lenovo.png';
import AsusImg from '../assets/products/Asus.png';
import MacBookImg from '../assets/products/MacBook.png';

const laptops = [
  { id: '1', name: 'Dell Inspiron 15', price: 699, image: DellImg },
  { id: '2', name: 'HP Pavilion 14', price: 549, image: HPImg },
  { id: '3', name: 'Lenovo ThinkPad E14', price: 799, image: LenovoImg },
  { id: '4', name: 'ASUS VivoBook 15', price: 599, image: AsusImg },
  { id: '5', name: 'MacBook Air M2', price: 1099, image: MacBookImg },
];

export default function ProductsScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Header */}
      <View className="bg-cyan-400 px-6 py-8">
        <Text className="text-3xl font-bold text-black">
          Our Laptops 💻
        </Text>
        <Text className="text-2xl font-normal text-blue-600">Here is the our amazing products</Text>
      </View>

      {/* Products List */}
      <View className="px-6 py-6">
        {laptops.map((item) => (
          <View key={item.id} className="mb-4 rounded-2xl bg-white p-5">
            <Image
              source={item.image}
              className="mb-3 h-40 w-full rounded-xl"
              resizeMode="contain"
            />

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