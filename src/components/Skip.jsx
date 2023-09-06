import { View, Text } from "react-native";

export default Skip = () => {
  return (
    <View className="w-full flex flex-row justify-end items-center">
      <Text
        className="text-lg text-purple-950"
        style={{ fontFamily: "inter-bold" }}
      >
        SKIP
      </Text>
    </View>
  );
};
