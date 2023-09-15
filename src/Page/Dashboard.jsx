import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BarChart from './barchart';
import { Container, Row, Col } from 'react-bootstrap';
import { Padding } from '@mui/icons-material';
import axios from 'axios'


const Dashboard = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '62px', // Adjust the gap as needed
  };

  const [tempData, setTempData] = useState([])
  const [preData, setPreData] = useState([])
  const [prodData, setProdData] = useState([])
  const [statusData, setStatusData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
        const response = await axios.get('https://localhost:7075/api/oilrigs')
        let tempArr = []
        let preArr = []
        let prodArr = []
        let statusArr = []
        
        for(let i=response.data.length-8; i < response.data.length; i++){
          tempArr.push(response.data[i].temperature)
          preArr.push(response.data[i].pressure)
          prodArr.push(parseFloat(response.data[i].productionRate.substring(0,5)))
          statusArr.push(response.data[i].status == "OK" ? 1: 0)
        }
        
        setTempData(tempArr)
        setPreData(preArr)
        setProdData(prodArr)
        setStatusData(statusArr)
    }

    const interval = setInterval(fetchData, 3000);
  },[])

  

  const tempratureChart = {
    labels: ['MUMRIG1', 'MUMRIG2', 'MUMRIG3', 'SURRIG1', 'SURRIG2', 'KOLRIG1', 'KOLRIG2'],
    datasets: [
      {
        label: 'Temperature',
        data: tempData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    
  };



  const barChartData1 = {
    labels: ['MUMRIG1', 'MUMRIG2', 'MUMRIG3', 'SURRIG1', 'SURRIG2', 'KOLRIG1', 'KOLRIG2'],
    datasets: [
      {
        label: 'Pressure',
        data: preData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    
  };
  const barChartData2 = {
    labels: ['MUMRIG1', 'MUMRIG2', 'MUMRIG3', 'SURRIG1', 'SURRIG2', 'KOLRIG1', 'KOLRIG2'],
    datasets: [
      {
        label: 'Production Rate',
        data: prodData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  
  };

  const barChart4 = {
    labels: ['MUMRIG1', 'MUMRIG2', 'MUMRIG3', 'SURRIG1', 'SURRIG2', 'KOLRIG1', 'KOLRIG2'],
    datasets: [
      {
        label: 'Status',
        data: statusData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    
  };
  return (
    <div className="App">
      <Box sx={{display:'flex'}}>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
      <Container style={{Padding:100}}>
        <Row>
          <Col lg={6}>
          <div style={gridStyle}>
            <div><BarChart data={tempratureChart} name='Temperature' /></div>
            <div><BarChart data={barChartData2} name='Pressure' /></div> 
            <div><BarChart data={barChartData1} name='Production Rate' /></div>
            <div><BarChart data={barChart4} name='Status' /></div>
            
             
          </div>
          </Col>
        </Row>
      </Container>
      </Box>
      </Box>
    </div>
  )
}

export default Dashboard

