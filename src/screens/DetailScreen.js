// Import library yang diperlukan dari React dan React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definisikan komponen fungsional bernama DetailScreen
const DetailScreen = () => {
  return (
    // Gunakan View sebagai wadah utama
    <View style={styles.container}>
      {/* Tampilkan teks judul */}
      <Text style={styles.title}>Halaman Detail</Text>
      
      {/* Tampilkan teks deskripsi */}
      <Text style={styles.description}>
        Ini adalah contoh halaman detail. Konten spesifik akan ditampilkan di sini.
      </Text>
    </View>
  );
};

// Buat stylesheet untuk mengatur tampilan komponen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Mengisi seluruh ruang yang tersedia
    justifyContent: 'center', // Pusatkan konten secara vertikal
    alignItems: 'center', // Pusatkan konten secara horizontal
    backgroundColor: '#F5FCFF', // Warna latar belakang
  },
  title: {
    fontSize: 24, // Ukuran font judul
    fontWeight: 'bold', // Ketebalan font
    marginBottom: 10, // Jarak bawah
  },
  description: {
    fontSize: 16, // Ukuran font deskripsi
    textAlign: 'center', // Pusatkan teks
    marginHorizontal: 20, // Margin di sisi kiri dan kanan
  },
});

// Ekspor komponen agar bisa diimpor di file lain (misalnya AppNavigator.js)
export default DetailScreen;