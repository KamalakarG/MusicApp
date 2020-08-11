import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncImage from "../components/async.image";
import styles from "../styles/music.list.row";

const MusicListRow = (props) => {
  const { item, navigation } = props;

  const moveToDetailsView = () => {
    navigation.navigate("Music Details", {
      item: item,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={moveToDetailsView}>
      <View style={styles.rowAlign}>
        <View style={styles.row}>
          <AsyncImage
            source={{
              uri: item.artworkUrl60,
            }}
            width={60}
            height={60}
            isCircle={true}
          />
          <View style={styles.details}>
            <Text style={styles.title}>{item.trackCensoredName}</Text>
            <Text style={styles.collection} numberOfLines={1}>
              {item.collectionCensoredName}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {item.artistName}
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/right-arrow.png")}
          style={styles.imgArrow}
        />
      </View>
      <View style={[styles.rowAlign, { marginLeft: 5, marginTop: 5 }]}>
        <Text style={styles.dateStr}>{item.releaseDate}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>{item.trackPrice}</Text>
          <Text style={styles.price}> {item.currency}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

export default MusicListRow;
