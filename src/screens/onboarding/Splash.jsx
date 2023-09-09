import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import logo from "../../../assets/logos/Logo.png";
import { Button } from "../../components";
import { styles } from "../../../global.colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import "react-native-reanimated";

export default Splash = () => {
  const navigation = useNavigation();
  const [display, setDisplay] = useState(false);
  setTimeout(() => {
    setDisplay(true);
  }, 2000);
  return (
    <SafeAreaView
      style={{ backgroundColor: styles.colors.primary }}
      className="flex-1 justify-center items-center"
    >
      <View className="w-full justify-center items-center px-6">
        <Image source={logo} />
        <Text
          style={{ fontFamily: "lato-black" }}
          className="text-white text-center mt-4 mb-1 text-5xl"
        >
          Wallet
        </Text>
        <Text
          style={{ fontFamily: "inter-bold" }}
          className="text-white text-center text-lg w-[70%] m-auto"
        >
          Money Transfer, Wallet & Finance UI Kit
        </Text>
        <View className="w-full">
          {display && (
            <Button
              name="Get Started Now"
              color={styles.colors.primary}
              bgColor={styles.colors.white}
              onPress={() => navigation.navigate("OnboardingOne")}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
