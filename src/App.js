/* eslint-disable no-unused-vars */
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { aggregateData, dataColors, defaultLabelStyle } from './lib'





const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('data/jstest.json')
      const data = res.data
      const aggregatedData = []
      const dataKeys = Object.keys(data)
      for (const key in data) {
        const currentKey = +aggregateData(data[key]).toFixed(2)
        aggregatedData.push(currentKey)
      }
      const mappedData = aggregatedData.map((item, i) => ({ title: dataKeys[i], value: item, color: dataColors[i] }))
      setData(mappedData)
    }
    getData()
  }, [])


  if (data.length === 0) return <p>Loading data..... <span>⏳</span></p>


  const totalDataValue = data.map(item => item.value).reduce((acc, val) => acc + val, 0).toFixed(2)
  console.log('Total data value: ', totalDataValue)
  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>Ebiquity Data</h1>
      <PieChart data={data.map(item => ({ ...item }))}
        lineWidth={75}
        radius={30}
        label={({ dataEntry }) => `${dataEntry.title} - ${dataEntry.percentage.toFixed(2)}%`}
        labelStyle={{ ...defaultLabelStyle }}
        labelPosition={112}
      />
    </Fragment>
  )
}

export default App

