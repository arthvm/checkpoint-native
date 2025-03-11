import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Form } from './components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Checkpoint 1 | React Native</Text>
          <Text style={styles.subtitle}>Arthur Mariano - RM 554742</Text>
        </View>
        <Form />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1408',
    color: "#e9f2e7",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 16
  },
  titleContainer: {
    flex: 1,
    gap: 8,
    justifyContent: 'flex-start',
  },
  title: {
    color: "#e9f2e7",
    fontSize: 24
  },
  subtitle: {
    color: "#e9f2e7",
    fontSize: 16
  }
});
