import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <AntDesign
          style={styles.arrowLeft}
          name="arrowleft"
          size={30}
          color="white"
        />
        <FontAwesome5 style={styles.bell} name="bell" size={28} color="white" />
        <Image
          style={styles.imgHeader}
          source={require("../images/person1.jpg")}
        />
        <Ionicons name="reorder-three-outline" size={35} color="white" />
      </View>
      <View style={styles.containerB}>
        <View style={styles.addComentAndImage}>
          <FontAwesome name="user-circle-o" size={40} color="#3399FF" />
          <View style={styles.addComent}>
            <TextInput
              style={styles.inputAddComent}
              placeholder="Add a Comment ..."
            />
            <Entypo name="emoji-happy" size={24} color="#3399FF" />
            <Ionicons
              style={styles.send}
              name="send"
              size={24}
              color="#3399FF"
            />
          </View>
        </View>
        <View style={styles.textComent}>
          <Text style={styles.text87}>87 Comments</Text>
        </View>
        <View style={styles.containerComments}>
          <View style={styles.subContainerComement}>
            <Image
              style={styles.person}
              source={require("../images/person2.jpg")}
            />
            <Text style={styles.nomberUser}>David Green</Text>
            <Text style={styles.fecha}> - 20 Apr. 2021</Text>
          </View>
          <View>
            <Text style={styles.comment}>
              Polygon has raised $450 million from strategic investors acco
              rding to a press release sent to Bitcoin.com News on February 7.
            </Text>
          </View>
        </View>
        <View style={styles.containerComments}>
          <View style={styles.subContainerComement}>
            <Image
              style={styles.person}
              source={require("../images/person3.jpeg")}
            />
            <Text style={styles.nomberUser}>Michel Ganri</Text>
            <Text style={styles.fecha}> - 20 Apr. 2021</Text>
          </View>
          <View>
            <Text style={styles.comment}>
              During the weekend, when bitcoin rose to a two week high, it was
              Gala that stole the show.
            </Text>
          </View>
        </View>
        <View style={styles.containerComments}>
          <View style={styles.subContainerComement}>
            <Image
              style={styles.person}
              source={require("../images/person4.jpg")}
            />
            <Text style={styles.nomberUser}>Kim Dranco</Text>
            <Text style={styles.fecha}> - 20 Apr. 2021</Text>
          </View>
          <View>
            <Text style={styles.comment}>
              During the weekend, when bitcoin rose to a two week high, it was
              Gala that stole the show.
            </Text>
          </View>
        </View>
        <View style={styles.containerComments}>
          <View style={styles.subContainerComement}>
            <Image
              style={styles.person}
              source={require("../images/person5.jpg")}
            />
            <Text style={styles.nomberUser}>Scot Donavan</Text>
            <Text style={styles.fecha}> - 20 Apr. 2021</Text>
          </View>
          <View>
            <Text style={styles.comment}>
              Polygon has raised $450 million from strategic investors acco
              rding to a press release sent to Bitcoin.com News on February 7.
            </Text>
          </View>
        </View>
        <View style={styles.containerComments}>
          <View style={styles.subContainerComement}>
            <Image
              style={styles.person}
              source={require("../images/person2.jpg")}
            />
            <Text style={styles.nomberUser}>David Green</Text>
            <Text style={styles.fecha}> - 20 Apr. 2021</Text>
          </View>
          <View>
            <Text style={styles.comment}>
              Polygon has raised $450 million from strategic investors acco
              rding to a press release sent to Bitcoin.com News on February 7.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerFoother}>
        <AntDesign
          style={styles.iconFoother}
          name="home"
          size={30}
          color="white"
        />
        <MaterialCommunityIcons
          style={styles.iconFoother}
          name="card-bulleted-outline"
          size={30}
          color="white"
        />
        <Ionicons
          style={styles.iconFoother}
          name="book"
          size={30}
          color="white"
        />
        <FontAwesome5
          style={styles.iconFoother}
          name="users"
          size={30}
          color="#3399FF"
        />
        <MaterialCommunityIcons
          style={styles.iconFoother}
          name="bookmark-minus"
          size={30}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28333F",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 15,
    marginTop: 18,
    marginBottom: 24,
  },
  bell: {
    marginTop: 5,
  },
  arrowLeft: {
    position: "absolute",
    left: 10,
  },
  imgHeader: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  containerB: {
    backgroundColor: "#2F3C50",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
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
  textComent: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  text87: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerComments: {
    borderBottomWidth: 1,
    borderColor: "#aaaa",
    marginHorizontal: 15,
    marginTop: 10,
  },
  subContainerComement: {
    flexDirection: "row",
    marginTop: 10,
  },
  person: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 15,
  },
  nomberUser: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
  },
  fecha: {
    color: "#c6c6c6",
    fontSize: 14,
    marginTop: 2,
  },
  comment: {
    color: "#c6c6c6",
    marginLeft: 50,
    marginBottom: 15,
  },
  containerFoother: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
    position: "absolute",
    bottom: 5,
  },
  iconFoother: {
    marginHorizontal: 26,
  },
});
