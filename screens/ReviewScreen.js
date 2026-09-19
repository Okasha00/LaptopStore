import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable } from 'react-native';


export default function ReviewScreen(navigation) {

    return(
        <ScrollView>
            {/* Header */}
      <View className="items-center justify-center bg-cyan-400 px-6 py-12">
        <Text className="text-4xl font-bold text-black">
          💻 Reviews
        </Text>

        <Text className="mt-4 text-center text-base text-gray-900">
          Our Valuable customer Reviews!
        </Text>
      </View>

      {/* Products List */}


        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
          <Text className="text-lg font-bold text-gray-900">
            ✅ Sameer
          </Text>
          <Text className="mt-1 text-gray-600">
            Very Good products they are selling!
          </Text>
        </View>


        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
          <Text className="text-lg font-bold text-gray-900">
            ✅ Saad
          </Text>
          <Text className="mt-1 text-gray-600">
            Very Good products they are selling!
          </Text>
        </View>

        <View className="mt-4 rounded-2xl bg-cyan-100 p-5">
          <Text className="text-lg font-bold text-gray-900">
            ✅ Anas
          </Text>
          <Text className="mt-1 text-gray-600">
            Very Good products they are selling!
          </Text>
        </View>

      
      <View />

        </ScrollView>
    )
}