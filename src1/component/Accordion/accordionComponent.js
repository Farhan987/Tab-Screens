import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  ScrollView
} from "react-native";
// import { Colors } from "./Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import MenuItem from "../Accordion/MenuItem";
export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false
    };
  }
  onClick = index => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    return (
      <View>
        <View
          style={[
            styles.row,
            {
              borderBottomLeftRadius: this.state.expanded ? 0 : 15,
              borderBottomRightRadius: this.state.expanded ? 0 : 15
            }
          ]}
          onPress={() => this.toggleExpand()}
        >
          <TouchableOpacity onPress={() => this.toggleExpand()}>
            <Icon
              name={
                this.state.expanded
                  ? "keyboard-arrow-up"
                  : "keyboard-arrow-down"
              }
              style={{ width: 25 }}
              size={30}
              color={"gray"}
            />
          </TouchableOpacity>
          <View style={{ width: 7 }}></View>
          <Text style={[styles.title, { flex: 1 }]}>{this.props.title}</Text>
        </View>
        <View style={styles.parentHr} />

        {this.state.expanded && (
          <ScrollView>
            <MenuItem />
            <View style={styles.grayColor}>
              <View style={styles.lineColor}></View>
            </View>
            <MenuItem />
            <View style={styles.grayColor}>
              <View style={styles.lineColor}></View>
            </View>
            <MenuItem />
          </ScrollView>
        )}
        <View style={{ height: 20 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grayColor: {
    height: 3,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "white"
  },
  lineColor: {
    borderRadius: 0.3,
    borderColor: "gray",
    height: 0.2,
    backgroundColor: "gray"
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "100%",
    height: 70,

    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray"
  },
  itemActive: {
    fontSize: 12,
    color: "green"
  },
  itemInActive: {
    fontSize: 12,
    color: "gray"
  },
  btnActive: {
    borderColor: "green"
  },
  btnInActive: {
    borderColor: "gray"
  },
  row: {
    flexDirection: "row",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "white"
  },
  childRow: {
    backgroundColor: "white"
  },
  parentHr: {
    height: 1,
    color: "white",
    width: "100%"
  },
  childHr: {
    height: 0.4,
    backgroundColor: "gray",
    width: "100%"
  },
  colorActive: {
    borderColor: "green"
  },
  colorInActive: {
    borderColor: "gray"
  }
});
