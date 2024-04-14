import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import Info from './component/Info';
import ReportBoard from './component/ReportBoard';
import Footer from './component/Footer';
import Contract from './component/Contract';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_boday}>
      <Header/>
      <Info/>
      <ReportBoard/>
      <Contract/>
      <Footer/>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5bcc9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container_boday: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    margin : 20,
    borderRadius: 8,
  }

});
