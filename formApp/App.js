import { StyleSheet, Text, View } from 'react-native';
import FormWFormik from './components/FormWFormik';


export default function App() {
  return (
    <View style={styles.container}>
      <FormWFormik></FormWFormik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8541c',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
