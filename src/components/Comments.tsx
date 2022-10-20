import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  img: {};
  name: string;
  date: string;
  text: string;
}

export const Comments = ({ img, name, date, text }: Props) => {
  return (
    <View style={styles.containerComments}>
      <View style={styles.subContainerComement}>
        <Image style={styles.person} source={img} />
        <Text style={styles.nomberUser}>{name}</Text>
        <Text style={styles.fecha}>{date}</Text>
      </View>
      <View>
        <Text style={styles.comment}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
