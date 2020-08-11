import React from "react";
import { View, Text } from "react-native";
import { defaultImgUrl } from "../constants";
import AsyncImage from "../components/async.image";
import styles from "../styles/music.details.styles";

const MusicDetailHeaderView = ({ item }) => {
  return (
    <View style={styles.imgView}>
      <AsyncImage
        source={{
          uri: item ? item.artworkUrl100 : defaultImgUrl,
        }}
        width="100%"
        height={250}
        isCircle={false}
      />
      <View style={styles.trackView}>
        <Text style={styles.track}>{item ? item.trackCensoredName : ""}</Text>
      </View>
    </View>
  );
};

export default MusicDetailHeaderView;
