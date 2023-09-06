import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Skip = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex flex-row justify-end items-center">
      <Text
        className="text-lg text-purple-950"
        style={{ fontFamily: "inter-bold" }}
        onPress={() => navigation.navigate("Welcome")}
      >
        SKIP
      </Text>
    </View>
  );
};
