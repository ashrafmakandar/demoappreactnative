/* eslint-disable react-native/no-inline-styles */
import {  Text } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";
import { Dimensions, Image, ScrollView, } from "react-native";

export default function Details() {
const route = useRoute();
  const { album } = route.params;
 const { width } = Dimensions.get("window");
 const imageSize = width * 0.75;
  return (
    <ScrollView style={{ flex: 1,}}
     contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 15 }}
    
    >
         <Image
        source={{ uri: album.artworkUrl100.replace("100x100bb", "600x600bb") }}
        style={{   width: imageSize,
            height: imageSize,borderRadius: 10 ,justifyContent:'center', alignSelf:'center', marginTop:20}}
      />
        <Text style={{ fontSize: width * 0.055, marginTop: 5 }}>{album.artistName}</Text>
    
    
      <Text style={{ fontSize: width * 0.045, marginTop: 10 }}>
        {album.longDescription ?? "No Description Available"}
      </Text>
    
    </ScrollView>
  );
}