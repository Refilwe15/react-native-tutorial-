import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
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
