import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { Intro, Proceed, Skip } from "../../components";
import money from "../../../assets/logos/money.png";
import { styles } from "../../../global.colors";

export default OnboardingThree = ({ navigation }) => {
  return (
    <SafeAreaView className="px-8 flex-1 justify-center items-center bg-white">
      <Skip />
      <Image source={money} />
      <Intro
        name="Reach your goals with ease"
        description="Use the smart saving features to manage your future goals and needs"
        headerAlign="center"
        descriptionAlign="center"
        color={styles.colors.textPurple}
      />
      <View className="w-full flex flex-row justify-between items-center mt-20">
        <Text
          style={{ fontFamily: "inter-bold" }}
          className="text-lg text-purple-950"
        >
          3/3
        </Text>
        <Proceed name="NEXT" onPress={() => navigation.navigate("Welcome")} />
      </View>
    </SafeAreaView>
  );
};
