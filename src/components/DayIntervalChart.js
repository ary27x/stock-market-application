import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/Data.css"
export default function DayIntervalChart(props)
{
    const stuff = props.id == "first" ? {
        labels : props.dayIntervalData.newDayIntervalDataLabels,
        datasets : [
            {
                label : "HIGH",
                data : props.dayIntervalData.newDayIntervalDataHighDataSet,
                borderColor : "green",
                backgroundColor : "green"
            },
            {
                label : "LOW",
                data : props.dayIntervalData.newDayIntervalDataLowDataSet,
                borderColor : "red",
                backgroundColor : "red"
            },
        ]
    }
     :
     {
        labels : props.dayIntervalData.newDayIntervalDataLabels,
        datasets : [
            {
                label : "OPEN",
                data : props.dayIntervalData.newDayIntervalDataOpenDataSet,
                borderColor : "blue",
                backgroundColor : "blue"
            },
            {
                label : "CLOSE",
                data : props.dayIntervalData.newDayIntervalDataCloseDataSet,
                borderColor : "black",
                backgroundColor : "black"
            },
        ]
    }
    
    
    return (
        <React.Fragment>
        <Line data = {stuff} id="day-interval-data-wrapper" className="chart-wrapper"/>

        </React.Fragment>
    )
}