import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ReportBoard() {
  return (
    <View style={styles.container}>
        <View style={{ padding: 5 }}>
        {/* Add content for the second view */}
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Repos
        </Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' ,textAlign: 'center' }}>
          8
        </Text>
      </View>
      <View style={{ padding: 5 }}>
        {/* Add content for the second view */}
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Followers
        </Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'  ,textAlign: 'center'}}>
          3647
        </Text>
      </View>
      <View style={{ padding: 5 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Following
        </Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' ,textAlign: 'center' }}>
          10
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3, // Change flex to a number
    backgroundColor: '#b5bcc9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
