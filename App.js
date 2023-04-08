import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './presentation/HomeScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 30
    }
});
