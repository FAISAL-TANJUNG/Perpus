// src/screens/LibraryScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const HORIZONTAL_PADDING = 16;
const GAP = 12;
const CARD_WIDTH = (width - HORIZONTAL_PADDING * 2 - GAP) / 2;

const books = [
  {
    id: '1',
    title: 'Belajar React Native Untuk Pemula dan Mahir',
    author: 'John Doe',
    year: 2021,
    stock: 5,
    cover: 'https://covers.openlibrary.org/b/id/9874665-L.jpg',
  },
  {
    id: '2',
    title: 'Pemrograman Android Kotlin Lanjutan',
    author: 'Jane Smith',
    year: 2020,
    stock: 3,
    cover: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
  },
  {
    id: '3',
    title: 'Dasar-dasar Database',
    author: 'Albert Tan',
    year: 2019,
    stock: 7,
    cover: 'https://covers.openlibrary.org/b/id/240727-L.jpg',
  },
  {
    id: '4',
    title: 'JavaScript Modern Untuk Web Developer',
    author: 'Michael Lee',
    year: 2022,
    stock: 4,
    cover: 'https://covers.openlibrary.org/b/id/10523456-L.jpg',
  },
  {
    id: '5',
    title: 'Algoritma dan Struktur Data Lengkap',
    author: 'Samantha Brown',
    year: 2021,
    stock: 6,
    cover: 'https://covers.openlibrary.org/b/id/10987654-L.jpg',
  },
  {
    id: '6',
    title: 'Desain UI/UX Untuk Aplikasi Mobile',
    author: 'David Wilson',
    year: 2020,
    stock: 2,
    cover: 'https://covers.openlibrary.org/b/id/10734567-L.jpg',
  },
];

export default function LibraryScreen() {
  const renderItem = ({ item }) => (
    <View style={[styles.bookCard, { width: CARD_WIDTH }]}>
      <Image source={{ uri: item.cover }} style={styles.bookCover} />
      <Text style={styles.bookTitle} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.bookAuthor}>✍️ {item.author}</Text>
      <Text style={styles.bookYear}>📅 {item.year}</Text>
      <Text style={styles.bookStock}>Stok: {item.stock}</Text>

      {/* Tombol Keranjang & Pesan Sekarang */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Icon name="cart-outline" size={14} color="#fff" />
          <Text style={styles.buttonText}>Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orderButton]}>
          <Icon name="send-outline" size={14} color="#fff" />
          <Text style={styles.buttonText}>Pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: HORIZONTAL_PADDING },
  listContent: { paddingBottom: 24 },
  row: {
    justifyContent: 'space-between',
    marginBottom: GAP,
  },
  bookCard: {
    backgroundColor: '#eef3f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start', // teks rata kiri
    elevation: 2,
  },
  bookCover: {
    width: '100%',
    height: CARD_WIDTH * 1.4,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#34495e',
    textAlign: 'left',
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 11,
    color: '#7f8c8d',
    textAlign: 'left',
  },
  bookYear: {
    fontSize: 11,
    color: '#2980b9',
    textAlign: 'left',
    marginTop: 1,
  },
  bookStock: {
    marginTop: 4,
    fontSize: 11,
    color: '#27ae60',
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'left',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 4,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4f46e5',
    paddingVertical: 4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  orderButton: {
    backgroundColor: '#10b981',
  },
  buttonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 3,
  },
});
