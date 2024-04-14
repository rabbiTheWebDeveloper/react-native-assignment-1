import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'red',borderRadius: 50 }} >
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 80, height: 80}} />
      </View>
      <View>
      <Text style={{fontSize: 20 , fontWeight: 'bold'}}>The Cat</Text>
      <Text style={{fontSize: 20, color: 'gray'}}>@cotcat</Text>
      <Text style={{fontSize: 20,  color: '#4e6366'}}>Joined 25 Jan 2024</Text>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginEnd: 20,
  },
});
