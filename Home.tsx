/* eslint-disable react-native/no-inline-styles */
import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";

const Home =()=> {
   const navigation = useNavigation();
   const []
  return (
    <View style={{ flex: 1}}>
          <Text>Home Screen</Text>
          <FlatList
          data={}
          />
     
    </View>
  );
}

export default Home;