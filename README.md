
## IMPORTING STYLESHEET
===================================================
import { Text, View ,StyleSheet, Dimensions} from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={styles.heading}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    height : 450,
    width : Dimensions.get('window').width /2,
    backgroundColor : 'red'
  },
  heading : {
    fontSize : 36,
    fontWeight : 'bold'
  }

})

## Lesson 2 - 3 (Text Component)
===========================================================

import { Text, View ,StyleSheet, Dimensions} from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={styles.heading}>Edit <Text style={styles.span}>app/index.tsx</Text> to edit this screen.</Text>
    </View>
  );
}
{/*Override*/}
const styles = StyleSheet.create({
  view:{
    height : 450,
    width : Dimensions.get('window').width /2,
    backgroundColor : 'red'
  },
  heading : {
    fontSize : 36,
    fontWeight : 'bold',
    color : 'blue'
  },
  span : {
    color : 'red',
    fontSize : 40
  }

})


## Lesson 2 - 4 Button Component
=============================================================
(could'nt use this button component because of styling restrictions)
-------------------------------------------------------------

import { Text, View ,StyleSheet, Dimensions,Button} from "react-native";

export default function Index() {
{/*Button Component*/}

return (
     <Button title="Submit" />
)
}

## LESSON 2 - 5 PRESENTABLE COMPONENT
=============================================================
