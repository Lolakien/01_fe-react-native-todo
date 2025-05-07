import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("Lola");
  const [test, setTest] = useState({
    name: "lolakien",
    age: 22
  });
  const [count, setCout] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60, fontWeight: "600" }}>{name} + Ha loooo Kien</Text>
      <Text style={{ fontSize: 60, color: 'green' }}>{test.name}+ {test.age}</Text>
      <Text style={{ fontSize: 60, color: 'red' }}>{JSON.stringify(test)}</Text>
      <Text style={{ fontSize: 60, color: 'red' }}>Count : {count}</Text>
      <View>
        <Button color={"black"} title='Increase' onPress={() => setCout(count + 1)} />
      </View>
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
});
