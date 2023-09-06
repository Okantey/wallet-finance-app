import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { Intro, Proceed, Skip } from "../components";
import lock from "../../assets/logos/lock.png";
import { styles } from "../../global.colors";

export default Welcome = ({ navigation }) => {
  return (
    <SafeAreaView className="px-8 flex-1 justify-center items-center bg-primary">
      <Image source={lock} />
      <Intro
        name="Welcome"
        description="Stay on top by effortlessly tracking your subscriptions & bills"
        headerAlign="left"
        descriptionAlign="left"
        color={styles.colors.white}
      />
      <View className="w-full flex flex-row justify-center items-center mt-20">
        <Proceed name="NEXT" />
      </View>
    </SafeAreaView>
  );
};
