import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.logo}>FELVA</Text>
      <Text style = {styles.mainText}>
        <Text>Welcome to Felva</Text>
        <Text>We are very glad to have you here</Text>
        <Text>Sign-in OR Sign-up to join the felva community</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
  
  },
  logo:{
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center', 
   
  },
});
