/* eslint-disable react-native/no-inline-styles */
import {  Text } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, } from "react-native";

export default function Details() {
const route = useRoute();
  const { album } = route.params;

  return (
    <ScrollView style={{ flex: 1,}}
     contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 15 }}
    
    >
         <Image
        source={{ uri: album.artworkUrl100.replace("100x100bb", "600x600bb") }}
        style={{ width: 300, height: 300, borderRadius: 10 ,justifyContent:'center', alignSelf:'center', marginTop:20}}
      />
        <Text style={{ fontSize: 18, marginTop: 5 }}>{album.artistName}</Text>
    
    
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        {album.longDescription ?? "No Description Available"}
      </Text>
    
    </ScrollView>
  );
}