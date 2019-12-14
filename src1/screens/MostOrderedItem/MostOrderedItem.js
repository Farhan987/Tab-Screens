import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import SideBar from "../../component/sideBar/sideBar";

class OrderHistory extends Component {
  state = { selectDate: false, showAll: true, clicked: 1 };
  toggleData = data => {
    this.setState({ clicked: data });
  };

  render() {
    const data = {
      labels: [
        "Cream Pie 7",
        "Coffee",
        "Burgur",
        "Cupcake",
        "Cream Pie 6",
        "11 Mufin Apperizer w jam",
        "Grilled Chicken",
        "Frutie Pie",
        "Breakfast Casserole",
        "Mac and Cheese"
      ],
      datasets: [
        {
          data: [
            1022,
            966,
            508,
            421,
            398,
            378,
            357,
            351,
            312,
            291,

            274,
            272,
            258,
            254,
            237,
            224
          ]
        }
      ]
    };
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar selectTab={5} navigation={this.props.navigation} />
            <View style={styles.view2}>
              <View
                style={{
                  flex: 1.4,
                  borderTopLeftRadius: 15,
                  backgroundColor: "white"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    paddingLeft: 50,
                    flexDirection: "row",
                    paddingRight: 50
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 25 }}>Most Ordered Item</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-end",
                      flexDirection: "row"
                    }}
                  >
                    {this.state.showAll ? (
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showAll: false });
                        }}
                      >
                        <View style={styles.radioButtonUnfilled}></View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity>
                        <View
                          style={[
                            styles.radioButtonUnfilled,
                            {
                              borderColor: "red",
                              alignItems: "center",
                              justifyContent: "center"
                            }
                          ]}
                        >
                          <View style={styles.radioButtonFilled}></View>
                        </View>
                      </TouchableOpacity>
                    )}
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 17, color: "#656565" }}>
                      Show All
                    </Text>
                    <View style={{ width: 30 }}></View>

                    <View style={{ width: 10 }}></View>
                    {this.state.showAll ? (
                      <TouchableOpacity>
                        <View
                          style={[
                            styles.radioButtonUnfilled,
                            {
                              borderColor: "red",
                              alignItems: "center",
                              justifyContent: "center"
                            }
                          ]}
                        >
                          <View style={styles.radioButtonFilled}></View>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showAll: true });
                        }}
                      >
                        <View style={styles.radioButtonUnfilled}></View>
                      </TouchableOpacity>
                    )}
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 17, color: "#656565" }}>
                      Select a Date
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 8,
                  paddingLeft: "4%",
                  paddingRight: "4%"
                }}
              >
                <View style={{ height: 35 }}></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 23, color: "gray" }}>Total:</Text>
                  <View style={{ width: 10 }}></View>
                  <Text style={{ fontSize: 23, color: "black" }}>$550</Text>
                </View>

                <BarChart
                  //   style={graphStyle}
                  data={data}
                  width={800} // from react-native
                  height={450}
                  // yAxisLabel={"$"}
                  style={{
                    marginVertical: 8,
                    borderRadius: 16
                  }}
                  chartConfig={{
                    backgroundColor: "gray",
                    backgroundGradientFrom: "gray",
                    backgroundGradientTo: "white",
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255)`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                  verticalLabelRotation={90}
                />
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default OrderHistory;

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
    height: 40,
    justifyContent: "center",
    alignSelf: "center"
  },
  marginTopWhiteSpace: {
    height: 20,
    justifyContent: "center",
    alignSelf: "center"
  },

  tableHeader: {
    flex: 1,

    justifyContent: "center"
  },
  headerText: {
    fontSize: 16,
    color: "#656565"
  },
  radioButtonUnfilled: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: "#656565",
    borderRadius: 10
  },
  radioButtonFilled: {
    backgroundColor: "red",
    height: 4,
    width: 4,
    borderRadius: 10,
    padding: 3
  },
  bottomLine: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "red",
    width: 170,
    height: 1
  }
});
