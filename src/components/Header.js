import React  , { useEffect }from "react"
import axios from "axios"
import "chart.js/auto"
import { Line } from "react-chartjs-2"
import "../styles/Header.css"
import { Data } from "../Data"
export default function Header(props)
{
    useEffect(() => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&interval=5min&apikey=NC5QYUKSL49HP9MU`).then(data => {
            const newDayIntervalDataLabels = []
            const newDayIntervalDataOpenDataSet = []
            const newDayIntervalDataHighDataSet = []
            const newDayIntervalDataLowDataSet = []
            const newDayIntervalDataCloseDataSet = []
            
            for (const [key , value] of Object.entries(Data["Time Series (Daily)"]))
            {
                newDayIntervalDataLabels.push(key.slice(5 , key.length))
                newDayIntervalDataOpenDataSet.push(value["1. open"])
                newDayIntervalDataHighDataSet.push(value["2. high"])
                newDayIntervalDataLowDataSet.push(value["3. low"])
                newDayIntervalDataCloseDataSet.push(value["4. close"])
            }
            props.setDayIntervalData({
                newDayIntervalDataLabels,
                newDayIntervalDataOpenDataSet,
                newDayIntervalDataHighDataSet,
                newDayIntervalDataLowDataSet,
                newDayIntervalDataCloseDataSet
            })
            
        })
    },[])
    function handleChange(event)
    {
        props.setName(event.target.value)
    }
    function handleClick(event)
    {
     if (props.name == "")
        return 
     axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.name}&interval=5min&apikey=853T6KQBMCSOA7NS`).then(data => {
        console.log("this is the data received from the api:" , data)
        const newDayIntervalDataLabels = []
        const newDayIntervalDataOpenDataSet = []
        const newDayIntervalDataHighDataSet = []
        const newDayIntervalDataLowDataSet = []
        const newDayIntervalDataCloseDataSet = []
        
        for (const [key , value] of Object.entries(data.data["Time Series (Daily)"]))
        {
            newDayIntervalDataLabels.push(key.slice(5 , key.length))
            newDayIntervalDataOpenDataSet.push(value["1. open"])
            newDayIntervalDataHighDataSet.push(value["2. high"])
            newDayIntervalDataLowDataSet.push(value["3. low"])
            newDayIntervalDataCloseDataSet.push(value["4. close"])
        }
        props.setDayIntervalData({
            newDayIntervalDataLabels,
            newDayIntervalDataOpenDataSet,
            newDayIntervalDataHighDataSet,
            newDayIntervalDataLowDataSet,
            newDayIntervalDataCloseDataSet
        })
     

    })

    }
    return (
        <React.Fragment>
        <div id="header-wrapper">
            <div id="heading">Stock Market Application</div>
            <div id = "search-wrapper">
                <input type = "text" id = "search-bar" placeholder="Enter Stock Name" value  = {props.name} onChange={handleChange}/>
                <button id = "search-button" onClick={handleClick}>Search</button>
            </div>
        </div>
        </React.Fragment>
    )
}

// this is the api key : 