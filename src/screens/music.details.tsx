import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import MusicDetailRow from "../rows/music.detail.row";
import { prepareMusicDetails } from "../models/music.detail.model";
import MusicDetailHeaderView from "../views/music.detail.header";

const MusicDetails = (props) => {
  const { route } = props;
  let temp: any;
  const [item, setItem] = useState(temp);
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
    if (route.params) {
      let result = prepareMusicDetails(route.params.item);
      setDetailsData(result);
      setItem(route.params.item);
    }
  }, [route.params]);

  return (
    <View>
      <FlatList
        data={detailsData}
        keyExtractor={({ id }) => Number(id).toString()}
        renderItem={({ item }) => <MusicDetailRow item={item} />}
        ListHeaderComponent={<MusicDetailHeaderView item={item} />}
      />
    </View>
  );
};

export default MusicDetails;
