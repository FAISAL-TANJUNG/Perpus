import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Linking, 
  ScrollView, 
  SafeAreaView, 
  ActivityIndicator, 
  TouchableOpacity 
} from 'react-native';

export default function ProfileScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </SafeAreaView>
    );
  }
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Background */}
      <View style={styles.headerBackground} />

      {/* Foto & Nama */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Faisal Tanjung</Text>
      </View>

      {/* Data Diri */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧑 Data Diri</Text>
        <Text style={styles.cardText}>📧 faisal@example.com</Text>
        <Text style={styles.cardText}>📱 +62 812-3456-7890</Text>
      </View>

      {/* Data Kampus */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎓 Data Kampus</Text>
        <Text style={styles.cardText}>Universitas Teknologi Bandung</Text>
        <Text style={styles.cardText}>💡 Keahlian: React Native, Web Dev, UI/UX</Text>
      </View>

      {/* Media Sosial */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌐 Media Sosial</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#333'}]} 
            onPress={() => Linking.openURL('https://github.com/faisaltanjung')}
          >
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#0e76a8'}]} 
            onPress={() => Linking.openURL('https://linkedin.com/in/faisaltanjung')}
          >
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#1da1f2'}]} 
            onPress={() => Linking.openURL('https://twitter.com/faisaltanjung')}
          >
            <Text style={styles.socialText}>Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#eef3f9',
    paddingBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef3f9',
  },
  headerBackground: {
    width: '100%',
    height: 120,
    backgroundColor: '#4a90e2',
    position: 'absolute',
    top: 0,
  },
  avatarContainer: {
    marginTop: 40,
    alignItems: 'center',
    zIndex: 1,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  socialText: {
    color: '#fff',
    fontWeight: '600',
  },
});
