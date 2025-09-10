import React, { useState, useEffect } from 'react';
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, 
  ActivityIndicator, Alert, Keyboard, ScrollView 
} from 'react-native';
import axios from 'axios'; // ✅ pakai axios

export default function AskScreen() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ useEffect pertama: jalan sekali saat screen dibuka
  useEffect(() => {
    console.log("AskScreen dibuka ✅");
  }, []);

  // ✅ useEffect kedua: jalan setiap kali answer berubah
  useEffect(() => {
    if (answer) {
      console.log("Jawaban baru:", answer);
    }
  }, [answer]);

  const handleAsk = async () => {
    if (!question.trim()) {
      Alert.alert('Peringatan', 'Pertanyaan tidak boleh kosong.');
      return;
    }

    setLoading(true);
    setAnswer('');
    Keyboard.dismiss();

    try {
      const response = await axios.post(
        'https://faisalapi.smartcube.biz.id/ask',
        { question }, 
        { headers: { 'Content-Type': 'application/json' } }
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
      Alert.alert('Gagal', 'Terjadi kesalahan. Silakan coba lagi.');
      setAnswer('Maaf, tidak dapat menemukan jawaban saat ini.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.outerContainer} contentContainerStyle={styles.contentContainer}>
      {!answer && !loading && (
        <View style={styles.textContainer}>
          <Text style={styles.title}>💬 Tanyakan Sesuatu</Text>
          <Text style={styles.subtitle}>
            Cari informasi atau kirim pertanyaan kepada staf perpustakaan.
          </Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ketik pertanyaan Anda di sini..."
          placeholderTextColor="#999"
          value={question}
          onChangeText={setQuestion}
          multiline
        />
        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]} 
          onPress={handleAsk}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Kirim Pertanyaan</Text>
          )}
        </TouchableOpacity>
      </View>

      {answer ? (
        <View style={styles.answerContainer}>
          <Text style={styles.answerTitle}>Jawaban:</Text>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#eef3f9',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 15,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#8fbce6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  answerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  answerText: {
    fontSize: 16,
    color: '#555',
  },
});
