import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

export const AddComment = () => {
  return (
    <View style={styles.addComentAndImage}>
      <FontAwesome name="user-circle-o" size={40} color="#3399FF" />
      <View style={styles.addComent}>
        <TextInput
          style={styles.inputAddComent}
          placeholder="Add a Comment ..."
        />
        <Entypo name="emoji-happy" size={24} color="#3399FF" />
        <Ionicons style={styles.send} name="send" size={24} color="#3399FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addComentAndImage: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginTop: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  addComent: {
    backgroundColor: "#4a5669",
    width: "80%",
    height: 50,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginLeft: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  inputAddComent: {
    position: "absolute",
    left: 10,
    fontSize: 15,
    color: "#c6c6c6",
  },
  send: {
    marginRight: 13,
    marginLeft: 13,
  },
});
