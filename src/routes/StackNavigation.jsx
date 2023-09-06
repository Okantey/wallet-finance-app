import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Splash,
  OnboardingOne,
  OnboardingTwo,
  OnboardingThree,
  Welcome,
  CreateAccount,
} from "../screens";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="RegisterStack" component={RegisterStack} />
    </Stack.Navigator>
  );
};

const OnBoarding = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
      <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
      <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

const RegisterStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export { MainStack, OnBoarding, RegisterStack };
