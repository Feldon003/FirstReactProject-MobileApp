import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.logo}>FELVA</Text>
      <View style = {styles.mainText}>
        <Text style = {styles.welcome}>Welcome to Felva</Text>
        <Text style = {styles.introduction}>We are very glad to have you here</Text>
        <Text style = {styles.option}>Sign-in OR Sign-up to join the felva community</Text>
      </View>
      <View style = {styles.buttons}>
      </View>
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
    marginTop: 80,
    textAlign: 'center', 
   
  },
  mainText: {
    flex: 1,
    flexDirection:'coloum',
    
  

  }, 
  welcome:{
    fontSize: 60,
    marginTop: 100,
    textAlign: 'center', 
    fontWeight: 'bold',
  },
  introduction: {
    textAlign: 'center',
    fontSize: 25,
  }, 
  option: {
    textAlign: 'center', 
    fontSize: 25, 
    fontWeight: 'bold',
    color: '#0000ff'
  }
});
