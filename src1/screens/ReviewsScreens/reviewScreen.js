import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import SideBar from "../../component/sideBar/sideBar";
import { Rating, AirbnbRating } from "react-native-ratings";
import ReviewsComponent from "../../component/ReviewComponent/ReviewComponent";

class ReviewScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar selectTab={5} navigation={this.props.navigation} />
            <View style={styles.view2}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderTopLeftRadius: 15,
                  backgroundColor: "white"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 50
                  }}
                >
                  <Text style={{ fontSize: 25 }}>Reviews</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flex: 0.5,

                      justifyContent: "center",
                      alignItems: "flex-end"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25
                      }}
                    >
                      4.7
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <AirbnbRating showRating={false} size={20} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start"
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "#656565" }}>
                      10 reviews
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 8, paddingLeft: "4%", paddingRight: "4%" }}>
                <View style={styles.marginTop}></View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: 400,
                    borderRadius: 10
                  }}
                >
                  <View style={styles.marginTopWhiteSpace}></View>
                  <ScrollView>
                    <ReviewsComponent />
                    <View style={styles.Line}>
                      <View
                        style={{ borderWidth: 0.2, backgroundColor: "gray" }}
                      ></View>
                    </View>
                    <ReviewsComponent />
                    <View style={styles.Line}>
                      <View
                        style={{ borderWidth: 0.2, backgroundColor: "gray" }}
                      ></View>
                    </View>
                    <ReviewsComponent />
                    <View style={styles.Line}>
                      <View
                        style={{ borderWidth: 0.2, backgroundColor: "gray" }}
                      ></View>
                    </View>
                    <ReviewsComponent />
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default ReviewScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9404e"
  },
  view2: {
    flex: 9,
    backgroundColor: "#f3e0e7",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.6,
    zIndex: 999
  },
  containerView: {
    flex: 1,
    flexDirection: "row"
  },
  marginTop: {
    height: 30,
    justifyContent: "center",
    alignSelf: "center"
  },
  marginTopWhiteSpace: {
    height: 20,
    justifyContent: "center",
    alignSelf: "center"
  },
  Line: {
    height: 3,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 5,
    paddingBottom: 22
  }
});
