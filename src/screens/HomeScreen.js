import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Image 
          source={require('../assets/perpus.jpg')} 
          style={styles.heroImage}
          resizeMode="cover" 
        />
        <View style={styles.heroOverlay} />
        <Text style={styles.heroText}>📚 Selamat Datang di Perpus App!</Text>
      </View>

      <Text style={styles.subtitle}>
        Aplikasi perpustakaan modern untuk membaca, meminjam, dan belajar lebih mudah.
      </Text>

      {/* Fitur Unggulan */}
      <View style={[styles.card, styles.cardPrimary]}>
        <Text style={styles.cardTitle}>✨ Fitur Utama</Text>
        <Text style={styles.cardText}>🔹 Pinjam & kembalikan buku cepat.</Text>
        <Text style={styles.cardText}>🔹 Simpan daftar bacaan favorit.</Text>
        <Text style={styles.cardText}>🔹 Profil pribadi untuk aktivitas Anda.</Text>
      </View>

      {/* Jam Operasional */}
      <View style={[styles.card, styles.cardSecondary]}>
        <Text style={styles.cardTitle}>⏰ Jam Operasional</Text>
        <Text style={styles.cardText}>Senin - Jumat: 08.00 - 17.00</Text>
        <Text style={styles.cardText}>Sabtu: 09.00 - 14.00</Text>
        <Text style={styles.cardText}>Minggu: Tutup</Text>
      </View>

      {/* Layanan */}
      <View style={[styles.card, styles.cardPrimary]}>
        <Text style={styles.cardTitle}>💼 Layanan Kami</Text>
        <Text style={styles.cardText}>📖 Pinjam & kembalikan buku digital & fisik.</Text>
        <Text style={styles.cardText}>📚 Rekomendasi buku sesuai minat.</Text>
        <Text style={styles.cardText}>👨‍🏫 Workshop & event literasi.</Text>
        <Text style={styles.cardText}>📝 Catatan & tracking aktivitas membaca.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  heroContainer: {
    width: width,
    height: width * 0.55,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  heroText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    paddingHorizontal: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
    lineHeight: 22,
  },
  card: {
    padding: 22,
    marginBottom: 20,
    width: '95%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  cardPrimary: {
    backgroundColor: '#ffffff',
  },
  cardSecondary: {
    backgroundColor: '#eef2ff',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
    fontFamily: 'sans-serif-medium',
  },
  cardText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 22,
  },
});
