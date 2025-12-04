
import { Text, View ,StyleSheet, Dimensions,Button, Pressable} from "react-native";

export default function Index() {
{/*Button Component*/}

return (
    <Pressable style={styles.button}>
      <Text>Submit</Text>
    </Pressable>
)
}

const styles = StyleSheet.create({
  button:{
    backgroundColor : 'rgb(50,60,100)',
    borderRadius : 8,
    padding: 10,
    justifyContent : 'center',
    alignItems : 'center',
    

  },


})

