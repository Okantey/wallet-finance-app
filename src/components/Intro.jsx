import { View, Text } from "react-native";

export default Intro = ({
  name,
  description,
  headerAlign,
  descriptionAlign,
  color,
}) => {
  return (
    <View className="w-full flex justify-center items-center">
      <Text
        className="text-4xl w-full my-4"
        style={{
          fontFamily: "lato-bold",
          textAlign: headerAlign,
          color: color,
        }}
      >
        {name}
      </Text>
      <Text
        className="text-lg w-full"
        style={{
          fontFamily: "lato-regular",
          textAlign: descriptionAlign,
          color: color,
        }}
      >
        {description}
      </Text>
    </View>
  );
};
