import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Icon, List} from 'react-native-paper';
import dollar from '../assets/dollar.png';
import pound from '../assets/pound.png';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="p-6 h-full bg-white">
      <View className="flex-row items-center justify-between">
        <View>
          <Icon source="menu" size={24} />
        </View>
        <View>
          <TouchableOpacity>
            <Icon source="bell-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Navigation /> */}

      <Text className="text-2xl py-6 font-bold text-black">
        Welcome, Jessie.
      </Text>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View className="flex-col justify-center">
          <View className="h-28 rounded-2xl w-full bg-green-600 flex-col items-center justify-center px-8 my-8">
            <Text className="w-full font-bold text-white">
              Your total asset portfolio
            </Text>
            <View className="flex-row justify-between w-full items-center">
              <Text className="text-2xl font-bold text-white">N203,935</Text>
              <TouchableOpacity className="bg-white px-6 py-2 rounded-xl">
                <Text className="font-bold text-green-600">Invest now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between items-center w-full ">
            <Text className="text-xl font-bold text-black">Best Plans</Text>

            <TouchableOpacity className="flex-row gap-1 items-center">
              <Text className="text-lg font-semibold text-red-500">
                See All
              </Text>
              <View>
                <Icon source="arrow-right" size={24} color="red" />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex-row justify-between items-center w-full py-8 gap-6">
              <ImageBackground
                className=" h-36 w-32 rounded-xl  bg-yellow-600 "
                source={dollar}
                resizeMode="cover">
                <View className="p-4">
                  <Text className="text-white  font-bold">Gold</Text>
                  <Text className=" text-white">30% return</Text>
                </View>
              </ImageBackground>
              <ImageBackground
                className=" h-36 w-32 rounded-xl  bg-gray-400"
                source={pound}
                resizeMode="cover">
                <View className="p-4">
                  <Text className="text-white  font-bold">Silver</Text>
                  <Text className=" text-white">60% return</Text>
                </View>
              </ImageBackground>

              <ImageBackground
                className=" h-36 w-32 rounded-xl  bg-violet-600 "
                source={pound}
                resizeMode="cover">
                <View className="p-4">
                  <Text className="text-white  font-bold">Platinum</Text>
                  <Text className=" text-white">90% return</Text>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
          <View className="flex-row justify-between items-center w-full py-4">
            <Text className="text-xl font-bold text-black">
              Investment Guide
            </Text>
          </View>
          <View className="flex-row justify-between  items-center  ">
            <View className="w-2/3">
              <Text className="text-lg font-bold text-black">
                Basic type of investments
              </Text>
              <Text>
                This is how you set your foot for 2020 Stock market recession.
                What's next...
              </Text>
            </View>
            <View className="">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1701115825470-f505d4c64546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
                }}
                className="h-14 w-16 rounded-full"
              />
            </View>
          </View>
          <View className="flex-row justify-between  items-center  py-4">
            <View className="w-2/3">
              <Text className="text-lg font-bold text-black">
                How much should you start with?
              </Text>
              <Text>
                What do you like to see? It's very different market from 2018.
                The way...
              </Text>
            </View>
            <View className="">
              <Image
                className="h-14 w-16 rounded-full"
                source={{
                  uri: 'https://images.unsplash.com/photo-1701115825470-f505d4c64546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
