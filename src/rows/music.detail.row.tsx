import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/music.details.row.style";

const MusicDetailRow = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default MusicDetailRow;
