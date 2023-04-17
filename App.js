import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../Calculadora IMC ATZ/src/components/Logo';
import Form from '../Calculadora IMC ATZ/src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Form/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FD9D1',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
