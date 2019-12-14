import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { Rating, AirbnbRating } from "react-native-ratings";
class ReviewScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 120, paddingLeft: 20 }}>
          <View
            style={{
              height: 40,
              flexDirection: "row",

              alignItems: "center"
            }}
          >
            <Image
              resizeMode="stretch"
              style={{ height: 35, width: 35, borderRadius: 17 }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhnYvffH6b9n4JUIUQBbXJOqrhIYWe0fyOGCyynzAaz2uxdoIbA&s"
              }}
            ></Image>
            <View style={{ width: 12 }}></View>
            <Text style={{ fontSize: 18 }}> Angelina Caroline</Text>
            <View style={{ width: 12 }}></View>
            <AirbnbRating showRating={false} size={20} />
          </View>
          <View style={{ height: 6 }}></View>
          <View
            style={{
              flex: 1,

              paddingLeft: 50
            }}
          >
            <Text style={{ fontSize: 16, color: "#222222" }}>
              A truely local space with the artist flare. Greate coffee, fresh
              nagor,and traditionally javaness coffee.
            </Text>
            <View style={{ height: 10 }}></View>
            <Text style={{ color: "#656565" }}> 1 day ago</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default ReviewScreen;

styles = StyleSheet.create({});
