import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>LolaKien</Text>
        <Text style={styles.parrent}>BLA BlA bla </Text>
        <Text style={styles.child}>aaaaaaaaaaaaa aa </Text>
      </View>
      <Text style={styles.helo1}>Helo word Kiennnnn!</Text>
      <Text>Helo word LOLA Kiennnnn!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helo1: {
    color: "aqua", fontSize: 40,
    borderColor: "red",
    borderWidth: 2,
    padding: 10
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  parrent: {
    fontSize: 40,
    color: "green"
  },
  child: {
    fontSize: 20,
    color: "yellow"
  }
});
