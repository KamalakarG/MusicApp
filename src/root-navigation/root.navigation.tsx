import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "../store/store";
import MusicList from "../screens/music.list";
import MusicDetails from "../screens/music.details";
import { NAV_BAR } from "../constants";

const HomeStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator screenOptions={NAV_BAR}>
          <HomeStack.Screen name="Music List" component={MusicList} />
          <HomeStack.Screen name="Music Details" component={MusicDetails} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
