import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BarChart from './barchart';
import { Container, Row, Col } from 'react-bootstrap';
import { Padding } from '@mui/icons-material';


const Dashboard = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '62px', // Adjust the gap as needed
  };
  const barChartData1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Temperature',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    
  };
  const barChartData2 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Pressure',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
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
            <div><BarChart data={barChartData1} /></div>
            <div><BarChart data={barChartData2} /></div> 
            <div><BarChart data={barChartData1} /></div>
             
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

