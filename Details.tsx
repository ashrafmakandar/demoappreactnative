import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export default function Details() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details... again
      </Button>
    </View>
  );
}