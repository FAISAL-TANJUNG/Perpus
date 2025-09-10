import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Aplikasi */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Nama & Versi */}
      <Text style={styles.appName}>📚 Perpus App</Text>
      <Text style={styles.version}>Versi 1.0.0</Text>

      {/* Deskripsi */}
      <Text style={styles.description}>
        Perpus App adalah aplikasi sederhana untuk memudahkan pengelolaan
        perpustakaan. Dibangun dengan ❤️ menggunakan React Native agar membaca
        dan belajar jadi lebih mudah.
      </Text>

      {/* Developer */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>👨‍💻 Developer</Text>
        <Text style={styles.cardText}>Nama: Faisal Tanjung</Text>
        <Text style={styles.cardText}>Email: faisal@example.com</Text>
      </View>

      {/* Mitra */}
<View style={styles.card}>
  <Text style={styles.cardTitle}>🤝 Mitra</Text>
  <View style={styles.mitraRow}>
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/888/888879.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/888/888840.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/888/888857.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/888/888828.png' }} style={styles.mitraLogo} />
    {/* 2 Logo tambahan */}
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/888/888822.png' }} style={styles.mitraLogo} />
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/888/888823.png' }} style={styles.mitraLogo} />
  </View>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eef3f9',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  version: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  mitraRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mitraLogo: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 6,
  },
});
