import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: </Text>
      <View style={{flexDirection: "row", gap: 30}}>
        <Pressable 
          style={{backgroundColor: "black", padding: 20, borderRadius: 15}}
        >
            <Text style={{fontSize: 25, fontWeight: "600", color: "white"}}>
              +
            </Text>
        </Pressable>
        <Pressable 
          style={{backgroundColor: "black", padding: 20, borderRadius: 15}}
        >
            <Text style={{fontSize: 25, fontWeight: "600", color: "white" }}>
              -
            </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
