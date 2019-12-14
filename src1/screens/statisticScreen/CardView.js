import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon, Badge, Textarea } from "native-base";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import ItemComponent from "../../component/ItemComponent/ItemComponent";
class BoxView extends Component {
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
    summeryList1: [
      { _id: 0, value: "1X chicken" },
      { _id: 1, value: "1X burgur" },
      { _id: 2, value: "1X twister" },
      { _id: 3, value: "1X chicken" },
      { _id: 4, value: "1X Nudget" }
    ],
    summeryList2: [
      { _id: 0, value: "1X chicken" },
      { _id: 1, value: "1X burgur" },
      { _id: 2, value: "1X twister" },
      { _id: 3, value: "1X chicken" },
      { _id: 4, value: "1X Nudget" }
    ]
  };
  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };
  data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };

  //  barWidth = Dimensions.get('screen').width - 30;
  render() {
    return (
      <View style={Styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "flex-start"
          }}
        >
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Badge style={Styles.bigBadge}>
              <Text style={Styles.bigBadgeText}>Accept All Delay</Text>
            </Badge>
          </TouchableOpacity>
          <View style={{ height: 10, width: 10 }}></View>
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Badge style={Styles.bigBadge}>
              <Text style={Styles.bigBadgeText}>Accept All</Text>
            </Badge>
          </TouchableOpacity>
          <View style={{ height: 10, width: 10 }}></View>
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Badge style={Styles.cancleBadge}>
              <Text style={Styles.bigBadgeText}>Cancle All</Text>
            </Badge>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5 }}>
          <View style={{ height: 20 }} />
          <View style={{ height: 20 }}>
            <Text style={{ fontSize: 10 }}>ORDER SUMMARY</Text>
          </View>
          <View style={{ flex: 4, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              {this.state.summeryList1.map(data => (
                <ItemComponent
                  cancleFunction={() => {
                    const array = this.state.summeryList1.filter(
                      element => element._id !== data._id
                    );
                    this.setState({ summeryList1: array });
                  }}
                  dataList={data}
                />
              ))}
            </View>

            <View style={{ flex: 1, paddingLeft: 30 }}>
              {this.state.summeryList2.map(data => (
                <ItemComponent
                  cancleFunction={() => {
                    const array = this.state.summeryList2.filter(
                      element => element._id !== data._id
                    );
                    this.setState({ summeryList2: array });
                  }}
                  dataList={data}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 10 }}>EXTRA INSTRUCTION</Text>
          </View>

          <View style={{ flex: 5 }}>
            <Textarea
              style={{
                borderWidth: 1,
                borderColor: "#d3d3d3",
                borderRadius: 4
              }}
            />
            <View style={{ height: 10 }}></View>

            <ProgressBarAnimated
              width={390}
              value={this.state.progress}
              backgroundColorOnComplete="#e94046"
              backgroundColor="#e94046"
            />
          </View>
        </View>
      </View>
    );
  }
}
export default BoxView;
const Styles = StyleSheet.create({
  container: {
    width: "97%",
    alignSelf: "center",
    minHeight: 400,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.6,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 7,
    padding: 20
  },
  bigBadge: {
    height: 28,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8bbd50"
  },
  cancleBadge: {
    height: 26,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e94046"
  },
  bigBadgeText: {
    alignSelf: "center",
    fontSize: 12,
    color: "white",
    paddingLeft: 7,
    paddingRight: 7
  }
});
