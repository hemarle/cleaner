import React from 'react'
import './Graph.css'

import {Line} from 'react-chartjs-2'
function Graph() {
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'BTC',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#FB49C0',
            borderColor: '#FB49C0',
            borderWidth: 3,
            data: [60, 1500, 10, 21, 36]
          },
          {
            label: 'ETH',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#31AFD6',
            borderColor: '#31AFD6',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          
          },
          {
            label: 'LTC',
            fill: false,
            lineTension: 0.5,
            backgroundColor: "#F5A623",
            borderColor: '#F5A623',
            borderWidth: 5,
            data: [165, 159, 180, 181, 156]
          }
        ]
      }
   
    return (
        <div className='graph'>
            <Line
             data={state}
             options={{
               title:{
                 display:true,
                 text:'Average Rainfall per month',
                 fontSize:20
               },
               legend:{
                 display:true,
                 position:'right'
               }
                }}
            />
           

            
        </div>
    )
}
export default Graph


