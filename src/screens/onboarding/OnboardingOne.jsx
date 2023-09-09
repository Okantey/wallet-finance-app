import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { Intro, Proceed, Skip } from "../../components";
import { styles } from "../../../global.colors";
import hands from "../../../assets/logos/hands.png";

export default OnboardingOne = ({ navigation }) => {
  return (
    <SafeAreaView className="px-8 flex-1 justify-center items-center bg-white">
      <Skip />
      <Image source={hands} />
      <Intro
        name="Take hold of your finances"
        description="Running your finances is easier with xyz"
        headerAlign="center"
        descriptionAlign="center"
        color={styles.colors.textPurple}
      />
      <View className="w-full flex flex-row justify-between items-center mt-20">
        <Text
          style={{ fontFamily: "inter-bold" }}
          className="text-lg text-purple-950"
        >
          1/3
        </Text>
        <Proceed
          name="NEXT"
          onPress={() => navigation.navigate("OnboardingTwo")}
        />
      </View>
    </SafeAreaView>
  );
};
