import { View, Text, TouchableOpacity } from "react-native";

export default Socials = () => {
  return (
    <View className="flex flex-row justify-between items-center my-6">
      <TouchableOpacity className="bg-gray p-4 shadow-lg rounded-lg flex-1 mr-4">
        <Text
          style={{ fontFamily: "inter-bold" }}
          className="text-center text-textPurple"
        >
          GOOGLE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray p-4 shadow-lg rounded-lg flex-1">
        <Text
          style={{ fontFamily: "inter-bold" }}
          className="text-center text-textPurple"
        >
          FACEBOOK
        </Text>
      </TouchableOpacity>
    </View>
  );
};
