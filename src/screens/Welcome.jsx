import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import welcome from "../assets/welcome.png"
const Welcome = ({navigation}) => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <ScrollView>
        <View className="flex-col justify-center items-center h-screen">
          <Image source={welcome} />

          <Text className="text-3xl text-black font-bold text-center my-8">
            Stay on top of your {'\n'} finance with us.
          </Text>
          <Text className=" font-bold  text-center text-lg">
            We are your new financial Advisors {'\n'} to recommend the best
            investments {'\n'} you.
          </Text>

          <View>
            <TouchableOpacity className="bg-green-600 font-bold py-3 rounded-2xl mt-14 px-8">
              <View className="flex-row justify-center items-center w-full px-10">
                <Text className="text-white text-lg">Create account</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className=" font-bold py-4  rounded-xl flex-row justify-center" onPress={
              () => navigation.navigate("Home")
            }>
              <Text className="text-green-600 text-lg">Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
