import { useState, useEffect } from "react"
import * as Font from "expo-font";
import "react-native-gesture-handler";
import "react-native-safe-area-context";
import MainNavigation from "./src/routes/MainNavigation";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const loadFonts = async () => {
    await Font.loadAsync({
      "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
      "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
      "lato-black": require("./assets/fonts/Lato-Black.ttf"),
      "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
      "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
      "inter-semibold": require("./assets/fonts/Inter-SemiBold.ttf"),
      "inter-bold": require("./assets/fonts/Lato-Bold.ttf"),
      "inter-black": require("./assets/fonts/Lato-Black.ttf"),
    })
    setFontsLoaded(true)
  }
  useEffect(() => {
    loadFonts()
  }, [])

  return (
    fontsLoaded && <MainNavigation />
  )

}
