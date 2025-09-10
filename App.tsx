import 'react-native-gesture-handler'; // HARUS paling atas
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import AppNavigator from './src/AppNavigator';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#222' : '#4a90e2'}
      />
      <AppNavigator /> {/* Navigator menangani semua screen */}
    </SafeAreaProvider>
  );
}



