import React from 'react'
import { 
  View, 
  Text, 
  SafeAreaView, 
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={require("../../assets/background.jpg")}
        resizeMode='repeat'
        style={{ flex: 1, justifyContent: 'flex-start' }}
      >

      </ImageBackground>
    </SafeAreaView>
  )
}