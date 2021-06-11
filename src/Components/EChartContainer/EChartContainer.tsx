import React from "react";

// import for ECharts
import * as echarts from "echarts/core";
import { BarSeriesOption, ScatterSeriesOption } from "echarts/charts";
import {
  TitleComponentOption,
  GraphicComponentOption,
} from "echarts/components";

// import for showing ECharts
import ReactECharts from "echarts-for-react";

// new type for props
type PropsType = {
  X: number[];
  Y: number[];
  type: "bar" | "scatter";
  titleName: string;
};

const EChartContainer = ({ X, Y, type, titleName }: PropsType) => {
  //Creating the type for bar or Scatter
  type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | ScatterSeriesOption
    | TitleComponentOption
    | GraphicComponentOption
  >;

  // This is the option that schema pass the data to ReactEChart
  let option: ECOption = {
    title: {
      text: titleName,
    },
    tooltip: {},
    xAxis: {
      data: X,
    },
    yAxis: {},
    series: [
      {
        name: "Data",
        type: type,
        data: Y,
      },
    ],
  };

  return (
    <div>
      {/* adding EChart to the page  */}
      <ReactECharts option={option} />
    </div>
  );
};

export default EChartContainer;
