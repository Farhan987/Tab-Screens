import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import SideBar from "../../component/sideBar/sideBar";
import Accordion from "../../component/Accordion/accordionComponent";
class EditMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "Menu",
          data: [
            {
              startTime: 10,
              endTime: 10,
              price: 0.7,
              timeCulate: 0.35,
              status: "false"
            },
            {
              startTime: 10,
              endTime: 10,
              price: 0.7,
              timeCulate: 0.35,
              status: "false"
            },
            {
              startTime: 10,
              endTime: 10,
              price: 0.7,
              timeCulate: 0.35,
              status: "false"
            }
          ]
        },
        {
          title: "Menu",
          data: [
            {
              startTime: 10,
              endTime: 10,
              price: 0.7,
              timeCulate: 0.35,
              status: "false"
            },
            {
              startTime: 10,
              endTime: 10,
              price: 0.7,
              timeCulate: 0.35,
              status: "false"
            },
            {
              startTime: 10,
              endTime: 10,
              price: 0.7,
              timeCulate: 0.35,
              status: "false"
            }
          ]
        }
      ]
    };
  }
  renderAccordians = () => {
    const items = [];
    for (item of this.state.menu) {
      items.push(<Accordion title={item.title} data={item.data} />);
    }
    return items;
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar navigation={this.props.navigation} selectTab={2} />
            <View style={styles.view2}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderTopLeftRadius: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    height: 50,

                    width: "90%",
                    borderRadius: 40,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#e0e0e0",
                    borderWidth: 0.5
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icon name="search" size={23} color="#e9404e" />
                  </View>
                  <View
                    style={{
                      flex: 9,
                      justifyContent: "center"
                    }}
                  >
                    <TextInput
                      placeholder="Search by Item"
                      style={{ height: 40, fontSize: 18 }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flex: 8, padding: 40 }}>
                <ScrollView>{this.renderAccordians()}</ScrollView>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default EditMenuScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9404e"
  },
  IconView: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: {
    color: "#ec7b8f"
  },

  view2: {
    flex: 9,
    backgroundColor: "#fcf6f6",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20

    // zIndex: 999
  },
  containerView: {
    flex: 1,
    flexDirection: "row"
  },
  marginTop: {
    height: 30,
    justifyContent: "center",
    alignSelf: "center"
  }
});
