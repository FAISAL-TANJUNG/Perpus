import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, Modal, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Portal, Provider, Button, TextInput, DefaultTheme } from 'react-native-paper'; // Tambahkan DefaultTheme di sini

// Import screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibraryScreen from './screens/LibraryScreen';
import AboutScreen from './screens/AboutScreen';
import DetailScreen from './screens/DetailScreen';
import AskScreen from './screens/AskScreen';

// --- BAGIAN BARU: TEMA KUSTOM UNTUK WARNA BIRU ---
const blueTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4a90e2', // Ini warna biru yang akan digunakan untuk tombol
  },
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// --- BAGIAN BARU: KOMPONEN POP-UP LOGIN/REGISTER ---
const AuthModal = ({ visible, onClose }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const toggleAuthMode = () => {
    setIsLoginMode(prevMode => !prevMode);
  };

  const handleLogin = () => {
    console.log('Login dengan:', { email, password });
    onClose();
  };

  const handleRegister = () => {
    console.log('Daftar dengan:', { username, email, password });
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {isLoginMode ? 'Login' : 'Daftar'}
          </Text>

          {!isLoginMode && (
            <TextInput
              label="Nama Pengguna"
              value={username}
              onChangeText={setUsername}
              mode="outlined"
              style={styles.input}
            />
          )}
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            label="Sandi"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={isLoginMode ? handleLogin : handleRegister}
            style={styles.mainButton}
          >
            {isLoginMode ? 'Login' : 'Daftar'}
          </Button>

          <Button
            mode="text"
            onPress={toggleAuthMode}
            style={styles.toggleButton}
          >
            {isLoginMode ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Login'}
          </Button>

          <Button
            mode="text"
            onPress={onClose}
            style={styles.closeButton}
          >
            Tutup
          </Button>
        </View>
      </View>
    </Modal>
  );
};

// --- KOMPONEN HEADER USER DENGAN MODAL BARU ---
const HeaderUserIcon = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <TouchableOpacity onPress={openModal} style={{ marginRight: 15 }}>
        <Icon name="person-circle-outline" size={28} color="#4a90e2" />
      </TouchableOpacity>
      <AuthModal visible={modalVisible} onClose={closeModal} />
    </>
  );
};

// Stack untuk Tab Home dengan ikon user baru
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          title: 'Perpus',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
          headerRight: () => <HeaderUserIcon />,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack untuk Tab Library
function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LibraryMain"
        component={LibraryScreen}
        options={{
          title: 'Buku',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack untuk Tab Profile
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack untuk Tab About
function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutMain"
        component={AboutScreen}
        options={{
          title: 'Tentang',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack untuk Tab Tanya
function AskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AskMain"
        component={AskScreen}
        options={{
          title: 'Tanya',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#f7f7f7' },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4a90e2',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: { backgroundColor: '#eef3f9', paddingBottom: 5, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Library') {
            iconName = 'library-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'About') {
            iconName = 'information-circle-outline';
          } else if (route.name === 'Ask') {
            iconName = 'chatbox-ellipses-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Library" component={LibraryStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="About" component={AboutStack} />
      <Tab.Screen name="Ask" component={AskStack} />
    </Tab.Navigator>
  );
}

// App Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <Provider theme={blueTheme}> {/* Terapkan tema kustom di sini */}
        <MainTabs />
      </Provider>
    </NavigationContainer>
  );
}

// Styles untuk modal
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'stretch',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    marginBottom: 10,
  },
  mainButton: {
    marginTop: 10,
  },
  toggleButton: {
    marginTop: 5,
  },
  closeButton: {
    marginTop: 20,
  },
});