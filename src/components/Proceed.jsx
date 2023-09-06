import { Text, TouchableOpacity } from "react-native";

export default Proceed = ({ onPress, name }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex justify-center items-center w-20 h-20 bg-primary rounded-full shadow-2xl shadow-indigo-900"
    >
      <Text className="text-white text-lg" style={{ fontFamily: "inter-bold" }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
