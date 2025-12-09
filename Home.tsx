/* eslint-disable react-native/no-inline-styles */
import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { Album } from "./Album";
import { useEffect,useState } from "react";

const Home =()=> {
 //  const navigation = useNavigation();
   const [albums, setAlbums] = useState<Album[]>([]);
const [loading,setLoading]= useState<boolean>(false);
   useEffect(()=>{
setLoading(true);
    fetchAlbums();
    
   },[]);

const albumview=({item}: {item: Album})=>{
  return(
    <View style={{padding:15, borderBottomWidth:1,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.90,
        shadowRadius:2,
     borderBottomColor:'#ccc',elevation:10, margin:5, borderRadius:10, backgroundColor:'#f9f9f9'}}>
          <Text 
          numberOfLines={1} ellipsizeMode="tail"
          style={{
            fontSize:17,fontWeight:"semibold"
          }}>{item.artistName}</Text>
      <Text 
      numberOfLines={2} ellipsizeMode="tail"
      style={{fontSize:16, fontWeight:"300"}}>{item.shortDescription!=null?item.shortDescription:"No description"}</Text>
    
    </View>
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
          data={albums}
         
          renderItem={albumview}
          keyExtractor={(item) => item.collectionId?.toString()} 
          />
     
    </View>
  );
}

export default Home;