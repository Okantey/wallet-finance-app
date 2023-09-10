import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { transactions, tabItems } from "../../data/Data";

export default MainScreen = () => {
  return (
    <SafeAreaView className="bg-white w-full flex-1 px-4 pt-2">
      <View className="w-full flex flex-row justify-between items-center">
        <TouchableOpacity className="bg-[#fff] rounded-xl p-4 shadow-sm shadow-[#fff]">
          <Octicons name="apps" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#fff] rounded-xl p-4 shadow-sm shadow-[#fff]">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View className="my-4 bg-[#F5F6FA] relative p-10 rounded-lg flex justify-center items-center">
        <View className="absolute top-[-50%]">
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=740&t=st=1694195712~exp=1694196312~hmac=1c7100ae8a3b6078b0d35776b77806525d7a2f33526a4a563644562034a5a12e",
            }}
            className="w-16 h-16 object-cover rounded-xl"
          />
        </View>
        <View className="flex justify-center items-center mt-2">
          <Text style={{ fontFamily: "lato-bold" }} className="text-2xl">
            Domhnall Gleeson
          </Text>
          <Text style={{ fontFamily: "lato-regular" }} className="text-lg">
            account ending with 1545
          </Text>
        </View>
      </View>
      <View className="w-full mb-6">
        <FlatList
          data={tabItems}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex justify-center items-center">
              <View className="bg-[#F4F5F9] p-4 rounded-full">{item.icon}</View>
              <Text
                style={{ fontFamily: "inter-semibold", color: "#151940" }}
                className="text-base"
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        />
      </View>
      <View className="w-full flex flex-row justify-between items-center">
        <View className="bg-[#7A7AFD] rounded-xl shadow-2xl shadow-primary mr-4 flex-1 p-3 justify-center items-center">
          <Text
            style={{ fontFamily: "inter-bold" }}
            className="text-white text-lg"
          >
            Salary
          </Text>
          <Text
            style={{ fontFamily: "lato-bold" }}
            className="text-white text-2xl"
          >
            $255,000
          </Text>
        </View>
        <View className="bg-[#5771F9] rounded-xl shadow-2xl shadow-primary flex-1 p-3 justify-center items-center">
          <Text
            style={{ fontFamily: "inter-bold" }}
            className="text-white text-lg"
          >
            Transfers
          </Text>
          <Text
            style={{ fontFamily: "lato-bold" }}
            className="text-white text-2xl"
          >
            $42,500
          </Text>
        </View>
      </View>
      <Text className="my-4 text-2xl" style={{ fontFamily: "lato-bold" }}>
        Recent Transactions
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {transactions.map((data) => {
          return (
            <View
              key={data.id}
              className="flex flex-row justify-between items-center"
            >
              <View className="flex flex-row items-center my-1">
                <View className="bg-white">
                  <Image
                    source={data.logo}
                    className="w-16 h-14 object-cover rounded-md bg-white mix-blend-multiply"
                  />
                </View>
                <View className="ml-4">
                  <Text
                    style={{ fontFamily: "inter-bold" }}
                    className="text-xl"
                  >
                    {data.title}
                  </Text>
                  <Text
                    className="text-base"
                    style={{ fontFamily: "inter-semibold" }}
                  >
                    {data.date}
                  </Text>
                </View>
              </View>
              <Text
                style={{ fontFamily: "lato-black" }}
                className="text-xl text-secondary"
              >
                {data.amount}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
