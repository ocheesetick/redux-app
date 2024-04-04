import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'

export default function TabOneScreen() {
  const count = useSelector((state: RootState) => state.value)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>

      <View style={{ flexDirection: "row", gap: 30 }}>
        <Pressable
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.text}> - </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.text}> + </Text>
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
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 15
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: "white"
  }
});
