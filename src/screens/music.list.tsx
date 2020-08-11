import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { getMusicListCall } from "../actions/music.actions";
import { connect } from "react-redux";
import MusicListRow from "../rows/music.list.row";
import LoadingSpinner from "../components/loading.spinner";

const MusicList = (props) => {
  const { getMusicListCall, musicData, showSpinner, navigation } = props;

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getMusicListCall();
  }, []);

  useEffect(() => {
    if (!showSpinner) {
      setRefreshing(false);
    }
  }, [showSpinner]);

  const onRefresh = () => {
    setRefreshing(true);
    getMusicListCall();
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <LoadingSpinner isVisible={showSpinner && !refreshing} />
      <FlatList
        style={{ backgroundColor: "#fff", marginVertical: 10 }}
        data={musicData}
        keyExtractor={({ trackId }) => trackId.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <MusicListRow item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  showSpinner: state.musicReducers.showSpinner,
  musicData: state.musicReducers.musicData,
});

const mapDispatchToProps = (dispatch) => ({
  getMusicListCall: () => dispatch(getMusicListCall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
