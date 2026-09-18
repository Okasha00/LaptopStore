import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable } from 'react-native';
import ProductsScreen from './ProductsScreen';

export default function IntroductionScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Header */}
      <View className="items-center justify-center bg-cyan-400 px-6 py-12">
        <Text className="text-4xl font-bold text-black">
          💻 Laptop Store
        </Text>

        <Text className="mt-4 text-center text-base text-gray-900">
          Find the perfect laptop for work, study, or gaming!
        </Text>
      </View>

      {/* Features Section */}
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold text-gray-900">
          Why Choose Us? 🚀
        </Text>

        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
          <Text className="text-lg font-bold text-gray-900">
            ✅ Best Prices
          </Text>
          <Text className="mt-1 text-gray-600">
            Competitive pricing on all top brands.
          </Text>
        </View>

        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
          <Text className="text-lg font-bold text-gray-900">
            🚚 Fast Delivery
          </Text>
          <Text className="mt-1 text-gray-600">
            Get your laptop delivered within 2-3 days.
          </Text>
        </View>

        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
          <Text className="text-lg font-bold text-gray-900">
            🛡️ Warranty Included
          </Text>
          <Text className="mt-1 text-gray-600">
            All laptops come with 1-year official warranty.
          </Text>
        </View>

        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
        <Text className="text-lg font-extrabold text-gray-500">Best Home Service</Text>
        <Text>We provide 1 year home services!</Text>
          
        </View>
        
      </View>

      {/* Call to Action */}
      <View className="items-center pb-10">
        <Pressable className="rounded-xl bg-black px-10 py-4"
        onPress={() => navigation.navigate('Products')}>
          
          <Text className="text-lg font-bold text-white">
            Get Started
          </Text>
        </Pressable>
      </View>

      
    </ScrollView>
  );
}