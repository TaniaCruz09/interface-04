import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Comments } from "../components/Comments";
import { AddComment } from "../components/AddComment";

export const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerB}>
        <AddComment />
        <View style={styles.textComent}>
          <Text style={styles.text87}>87 Comments</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          <Comments
            img={require("../../images/person2.jpg")}
            name={"David Green"}
            date={"- 20 Apr. 2021"}
            text={
              "Polygon has raised $450 million from strategic investors according to a press release sent to Bitcoin.com News on February 7."
            }
          />
          <Comments
            img={require("../../images/person3.jpeg")}
            name={"Michel Ganri"}
            date={"- 20 Apr. 2021"}
            text={
              "During the weekend, when bitcoin rose to a two week high, it was Gala that stole the show."
            }
          />
          <Comments
            img={require("../../images/person4.jpg")}
            name={"Kim Dranco"}
            date={"- 20 Apr. 2021"}
            text={
              "During the weekend, when bitcoin rose to a two week high, it was Gala that stole the show."
            }
          />
          <Comments
            img={require("../../images/person5.jpg")}
            name={"Scot Donavan"}
            date={"- 20 Apr. 2021"}
            text={
              "Polygon has raised $450 million from strategic investors according to a press release sent to Bitcoin.com News on February 7."
            }
          />
          <Comments
            img={require("../../images/person2.jpg")}
            name={"David Green"}
            date={"- 20 Apr. 2021"}
            text={
              "Polygon has raised $450 million from strategic investors according to a press release sent to Bitcoin.com News on February 7."
            }
          />
          <Comments
            img={require("../../images/person2.jpg")}
            name={"David Green"}
            date={"- 20 Apr. 2021"}
            text={
              "Polygon has raised $450 million from strategic investors according to a press release sent to Bitcoin.com News on February 7."
            }
          />
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28333F",
  },
  containerB: {
    backgroundColor: "#2F3C50",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  scrollview: {
    height: 600,
  },
});
