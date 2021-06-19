import React from 'react';
import EChartContainer from '../EChartContainer/EChartContainer';
import data from "../../Data/Data.json";
import AverageFinder from '../../Utility/AverageFinder';

const MalicAcidChart = () => {
    return (
        // this is the malic acid vs alcohol graph showing model 
        <EChartContainer X={data.Alcohol} Y={AverageFinder(data.MalicAcid)} titleName="Malic Acid VS Alcohol" type='bar' />
    );
};

export default MalicAcidChart;