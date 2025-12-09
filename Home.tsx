/* eslint-disable react-native/no-inline-styles */
import {  Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Album } from "./Album";
import { useEffect,useState } from "react";

const Home =()=> {
   const navigation = useNavigation();
   const [albums, setAlbums] = useState<Album[]>([]);
const [loading,setLoading]= useState<boolean>(false);
   useEffect(()=>{
setLoading(true);
    fetchAlbums();
    
   },[]);

const albumview=({item}: {item: Album})=>{
  return(
    <TouchableOpacity 
    onPress={()=>{
        navigation.navigate('Details',{album:item});
        
    }}
    
    style={{padding:15, borderBottomWidth:1,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.90,
        shadowRadius:2,
     borderBottomColor:'#ccc',elevation:10, margin:5, borderRadius:10, backgroundColor:'#fff'}}>
            <Image
            resizeMode="contain"                source={{ uri: item.artworkUrl100.replace("100x100bb", "600x600bb") }}
                style={{ width: 200, height: 200, borderRadius: 10 ,borderWidth:1, borderColor:'#ddd'}}
              />
          <Text 
          numberOfLines={1} ellipsizeMode="tail"
          style={{
            fontSize:17,fontWeight:"semibold",padding:5
          }}>{item.artistName}</Text>
      <Text 
      numberOfLines={2} ellipsizeMode="tail"
      style={{fontSize:16, fontWeight:"300",padding:5}}>{item.shortDescription!=null?item.shortDescription:"No description"}</Text>
    
    </TouchableOpacity>
  )
}

const fetchAlbums=async()=>{
  try{
    console.log('Fetching albums...');
    setLoading(true);
    
    const response=await fetch('https://itunes.apple.com/search?term=jack+johnson');
    console.log('Response received',response);
    const json=await response.json();
    console.warn("json-->",json.results);
    setLoading(false);
    setAlbums(json.results);
  }catch(error){
    console.log("ee",error)
    setLoading(false);
    console.error(error);
  }
}

  return (
    <View style={{ flex: 1}}>
         
          {loading ?<Text>Loading...</Text>:null  }
          <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 100 }}
          data={albums}
         
          renderItem={albumview}
          keyExtractor={(item) => item.collectionId?.toString()} 
        
          />
     
    </View>
  );
}

export default Home;