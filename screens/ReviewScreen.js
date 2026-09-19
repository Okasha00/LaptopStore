import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable } from 'react-native';

export default function ReviewScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-50">

      <View className="items-center justify-center bg-cyan-400 px-6 py-12">
        <Text className="text-4xl font-bold text-black">
          💻 Customer Reviews
        </Text>

        <Text className="mt-2 text-center text-base font-medium text-gray-800">
          What our amazing customers say about us!
        </Text>
      </View>

      <View className="px-6 py-4">

        <View className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Sameer Khan
            </Text>
            <Text className="text-sm">⭐⭐⭐⭐⭐</Text>
          </View>

          <Text className="leading-6 text-gray-600">
            "Highly recommended! The laptop delivery was super fast and the packaging was excellent."
          </Text>
        </View>

        <View className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Saad Ahmed
            </Text>
            <Text className="text-sm">⭐⭐⭐⭐⭐</Text>
          </View>

          <Text className="leading-6 text-gray-600">
            "Genuine products and very friendly customer service. Got a great discount on my HP laptop!"
          </Text>
        </View>

        <View className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Anas Ali
            </Text>
            <Text className="text-sm">⭐⭐⭐⭐⭐</Text>
          </View>

          <Text className="leading-6 text-gray-600">
            "Best laptop quality ever used. Battery timing and performance are exactly as specified."
          </Text>
        </View>

        <View className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Akmal Raza
            </Text>
            <Text className="text-sm">⭐⭐⭐⭐
            </Text>
          </View>

          <Text className="leading-6 text-gray-600">
            "Very good products they are selling. Satisfied with my gaming laptop purchase."
          </Text>
        </View>

        <View className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Saeed Anwar
            </Text>
            <Text className="text-sm">⭐⭐⭐⭐⭐</Text>
          </View>

          <Text className="leading-6 text-gray-600">
            "Really premium quality laptops are available here. Definitely buying again in the future!"
          </Text>
        </View>

        <View className="mt-8 items-center pb-9">
          <Pressable
            className="rounded-2xl bg-black px-8 py-4 active:opacity-80"
            onPress={() => navigation.navigate('Introduction')}
          >
            <Text className="text-lg font-bold text-white">
              Back To Home Screen
            </Text>
          </Pressable>
        </View>

      </View>

      <StatusBar style="auto" />

    </ScrollView>
  );
}