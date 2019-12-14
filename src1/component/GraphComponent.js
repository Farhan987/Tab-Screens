import React, { Component } from "react";
import { ProgressChart } from "react-native-chart-kit";

class GraphComponent extends Component {
  state = {};

  render() {
    const data = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [this.props.dataValue]
    };
    return (
      <ProgressChart
        data={data}
        width={100}
        height={100}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",

          color: (opacity = 0.9) => `rgba(220,60,69,0.7)`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
      />
    );
  }
}

export default GraphComponent;
