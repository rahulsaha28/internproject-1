
import React from 'react';
import EChartContainer from '../EChartContainer/EChartContainer';

import data from "../../Data/Data.json";

const HueChart = () => {
    return (
        // this is the Hue Vs Color intensity showing model
        <EChartContainer X={data.ColorIntensity} Y={data.Hue} titleName="Hue VS Color Intensity" type='scatter' />
    );
};

export default HueChart;