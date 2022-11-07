import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold
} from "@expo-google-fonts/nunito-sans";

import Routes from "./src/routes";
import theme from "./src/themes/theme";
import Loading from "./src/components/Loading";

export default function App() {
	const [isFontLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold
	});

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor='transparent'
				translucent
			/>
			{isFontLoaded ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
