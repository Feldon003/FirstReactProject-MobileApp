import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.logo}>QUADZ™</Text>
      <View style = {styles.mainText}>
        <Text style = {styles.welcome}>Welcome to Quadz</Text>
        <Text style = {styles.introduction}>We are very glad to have you here</Text>
        <Text style = {styles.option}>Sign-in OR Sign-up to join the Quadz Family</Text>
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {styles.button} 
        onPress={() => console.log("Sign-in button pressed")}>
          <Text style = {styles.buttonText}>Sign-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}
        onPress={() => console.log("Sign-up button pressed")}>
          <Text style = {styles.buttonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  
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
    color: '#ffffff',
    padding: 12,
  }, 
  buttonContainer:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    // backgroundColor: '#0000ff',
    // marginBottom: 150,
    height: 55,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15, 
    width: 175, 
    height: 50, 
    // justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  }, 
  buttonText: {
    color: '#000000',
    fontSize: 24,
    // backgroundColor: '#ff0000',
    width: 175,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center', 
  }
});
