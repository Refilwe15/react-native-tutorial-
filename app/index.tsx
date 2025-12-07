import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
//Hooks are functions in react that allow you to interact with the state  , life cycles and other react features that 
//functional components do not have access to.

// use state => state object in class components , for data inputs , data storage(temporart)
//use effect => life cycle methods in class components , side effects , data fetching , subscriptions , manually changing the DOM in react web

export default function Index() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    //fetching data from an api
    console.log("Username changed:", username);
    
},[username])

useEffect(() => {

  //add event listener

  return () => {
    // remove event listners
    //removing : slow processing . since its running in background
    //cleaning up
    //ondestroy life cycle , unmount life cycle
  }
},[])

return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
        }}
        style={styles.image}
      />

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        placeholderTextColor="grey"
        onChangeText={(text) => setUsername(text)}
      />

      {/* Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    color: "black",
    padding: 10,
    width: "80%",
    borderRadius: 6,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "rgb(50,60,100)",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
