import { Text, TouchableOpacity } from "react-native";

export default Button = ({ name, onPress, color, bgColor }) => {
  return (
    <TouchableOpacity
      className="py-4 my-12 rounded-md"
      style={{ backgroundColor: bgColor }}
      onPress={onPress}
    >
      <Text
        className="text-center text-xl"
        style={{ color: color, fontFamily: "lato-bold" }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
