import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Socials } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components";
import { styles } from "../../global.colors";
export default CreateAccount = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <SafeAreaView className="bg-white w-full flex-1 px-6 mt-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full flex-1"
      >
        <Text
          style={{ fontFamily: "lato-bold" }}
          className="text-3xl text-textPurple"
        >
          Register
        </Text>
        <Socials />
        <Text style={{ fontFamily: "inter-bold", textAlign: "center" }}>
          Or
        </Text>
        <TextInput
          placeholder="Full name"
          style={{ fontFamily: "inter-regular" }}
          className="w-full p-5 text-base mt-6 mb-2 bg-gray text-shade rounded-lg"
        />
        <TextInput
          placeholder="Enter email address"
          keyboardType="email-address"
          style={{ fontFamily: "inter-regular" }}
          className="w-full p-5 text-base my-2 bg-gray text-shade rounded-lg"
        />
        <View className="w-full flex my-2 flex-1 bg-gray rounded-lg p-5 flex-row justify-between items-center">
          <TextInput
            placeholder="Password"
            secureTextEntry={passwordVisible ? false : true}
            style={{ fontFamily: "inter-regular" }}
            className="flex-1 text-base text-shade"
          />
          <Ionicons
            className="flex-1"
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color="gray"
            onPress={handleVisibility}
          />
        </View>
        <View className="w-full flex my-2 flex-1 bg-gray rounded-lg p-5 flex-row justify-between items-center">
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={passwordVisible ? false : true}
            style={{ fontFamily: "inter-regular" }}
            className="flex-1 text-base text-shade"
          />
          <Ionicons
            className="flex-1"
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color="gray"
            onPress={handleVisibility}
          />
        </View>
        <Text
          style={{
            fontFamily: "inter-bold",
            textAlign: "center",
            color: "gray",
          }}
          className="my-2"
        >
          I have read and agreed to the{" "}
          <Text className="text-primary">terms</Text> of{" "}
          <Text className="text-primary">privacy policy</Text>
        </Text>
        <Button
          name="Next"
          bgColor={styles.colors.primary}
          color={styles.colors.white}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
