
import { Image, StyleSheet, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Contract() {
  return (
    <View style={styles.container}>
      <View>
        <View  style={{ flexDirection : 'row'}}>
        <Octicons style={{marginRight: 15}}  name="location" size={24} color="black" />
        <Text style={{fontSize: 20 , fontWeight: 'bold'}}>Dhaka Bangladesh</Text>
        </View>
        <View  style={{ flexDirection : 'row'}}>
        <AntDesign style={{marginRight: 15}}  name="link" size={24} color="black" />
        <Text style={{fontSize: 20 , fontWeight: 'bold'}}>https://github.com/login</Text>
        </View>
        <View  style={{ flexDirection : 'row'}}>
        <Entypo style={{marginRight: 15}} name="github" size={24} color="black" />
        <Text style={{fontSize: 20 , fontWeight: 'bold'}}>@github</Text>
        </View>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginBottom: 50,
  marginTop: 50,
  marginLeft: 50,
  marginRight: 50,
  backgroundColor: '#fff',
  alignItems: 'center',
  },
});
