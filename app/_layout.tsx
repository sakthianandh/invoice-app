import { Stack } from "expo-router";
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider
} from 'react-native-paper';
import { Colors } from '../constants/colors';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? { ...MD3DarkTheme, colors: Colors.dark } : { ...MD3LightTheme, colors: Colors.light }
  return (
    <PaperProvider theme={theme}>
      <Stack />
    </PaperProvider>
  )
}
