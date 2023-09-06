import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, TouchableOpacity } from "react-native";
import { Intro } from "../components";
import lock from "../../assets/logos/lock.png";
import { styles } from "../../global.colors";
import { Ionicons } from "@expo/vector-icons";

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
        <TouchableOpacity className="flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-2xl shadow-indigo-900">
          <Ionicons
            name="arrow-forward"
            size={35}
            color={styles.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
