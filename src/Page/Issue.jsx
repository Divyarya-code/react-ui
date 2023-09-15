import React, { useState } from 'react';
import './Issues.css'; 
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import axios from 'axios'


const Issues = () => {
  const [alerts, setAlerts] = useState([]);
  const [customAlert, setCustomAlert] = useState('');
  const [rigId, setRigId]=useState('');
  const [customAlertType, setCustomAlertType] = useState('success'); 


  async function addAlert(message, type, rigId){
    const newAlert = {
      message,
      type,
      id: Date.now(),
      rigId
    };

    const response = await axios.post('https://localhost:7075/api/issues', {
      'issueId' : `I:${parseInt(Math.random()*10000)}`,
      'rigId' : rigId,
      'userId' : '101',
      'description' : message,
      'alertId' : 'A101',
      'status' : type,
      'alert' : {},
      'rig' : {},
      'user': {}
    })

    
    alert('DB Updated')
    setAlerts([...alerts, newAlert]);
  };

  const removeAlert = (id) => {
    const updatedAlerts = alerts.filter((alert) => alert.id !== id);
    setAlerts(updatedAlerts);
  };

  const raiseCustomAlert = () => {
    if (customAlert.trim() !== '') {
      addAlert(customAlert, customAlertType, rigId);
      setCustomAlert(''); 
      setRigId('')
    }
  };

  return (
    <div sx={{display:'flex'}}>
      <Box sx={{display:'flex'}}>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
      <div style={{ 
      backgroundImage: `url("https://pluspng.com/img-png/oil-rig-png-hd--2880.jpg")`}} className="alert-container ">
        <h1 style={{color:'white', marginLeft:'20px'}}>
            ISSUES
        </h1>
      <div className="custom-alert " style={{padding: '5px', margin: '10px'}}>
      <input
          type="text"
          placeholder="Rig ID"
          value={rigId}
          onChange={(e) => setRigId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Issue Description"
          value={customAlert}
          onChange={(e) => setCustomAlert(e.target.value)}
        />
       
        
        <select
          value={customAlertType}
          onChange={(e) => setCustomAlertType(e.target.value)}
        >
          <option value="success">OPEN</option>
          <option value="warning">RESOLVED</option>

        </select>

        <button onClick={raiseCustomAlert}>Raise An Issue</button>
      </div>
      <h4 style={{color:'white', backgroundColor:'black' , marginTop:'30px'}}>Recent Issues </h4>
     <div style={{margin: '30px'}}>
     
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          {`ISSUE ID: ${alert.id}     RIG ID: ${alert.rigId}     ISSUE DESCRIPTION: ${alert.message}` }  
          <button onClick={() => removeAlert(alert.id)} className="close-button">
            X
          </button>
        
        </div>
      ))}
      </div>
    </div>
      </Box>
      </Box>
    </div>
    
  );
};

export default Issues;
