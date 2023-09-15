import React from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Sample data
const rows = [
  {  id:"RIG1", name: "MUMRIG1", location: "Mumbai" },
  { id:"RIG2", name: "MUMRIG2", location: "Mumbai" },
  { id:"RIG3", name: "MUMRIG3", location: "Mumbai" },
  { id:"RIG4", name: "SURRIG1", location: "Surat" },
  { id:"RIG5", name: "KOLRIG1", location: "Kolkata" },
];

export default function OilRig() {
  function MyTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tableHeaderStyle}>RIG ID</TableCell>
              <TableCell style={tableHeaderStyle}>RIG Name</TableCell>
              <TableCell style={tableHeaderStyle}>RIG Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
        
      <Typography variant='h4'>
            <MyTable/>
        </Typography>
      </Box>
    </Box>
  )
}
const tableHeaderStyle = {
  backgroundColor: '#0074d9',
  color: 'white',
  padding: '10px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
};
