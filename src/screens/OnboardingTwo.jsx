import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { Intro, Proceed, Skip } from "../components";
import { styles } from "../../global.colors";
import bag from "../../assets/logos/bag.png";

export default OnboardingTwo = ({ navigation }) => {
  return (
    <SafeAreaView className="px-8 flex-1 justify-center items-center bg-white">
      <Skip />
      <Image source={bag} />
      <Intro
        name="See where your money is going"
        description="Stay on top by effortlessly tracking your subscriptions & bills"
        headerAlign="center"
        descriptionAlign="center"
        color={styles.colors.textPurple}
      />
      <View className="w-full flex flex-row justify-between items-center mt-20">
        <Text
          style={{ fontFamily: "inter-bold" }}
          className="text-lg text-purple-950"
        >
          2/3
        </Text>
        <Proceed
          name="NEXT"
          onPress={() => navigation.navigate("OnboardingThree")}
        />
      </View>
    </SafeAreaView>
  );
};
