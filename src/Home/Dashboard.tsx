import { Login } from '@mui/icons-material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [referalId, setReferallId] = useState("");
  const navigate=useNavigate()
  useEffect(() => {
let userData:any=(localStorage.getItem("resObj"))
userData=JSON.parse(userData)
if (userData && userData.token){
  setFullName(userData.full_name)
  setEmail(userData.email_id)
  setUsername(userData.username)
  setCountryCode(userData.country_row_id)
  setMobileno(userData.mobile_number)
  setReferallId(userData.referral_username)
}
else{
 navigate('/') 
}
}, [])
  
  return (
    <div> <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        
        <TableHead>
        <TableRow>
        <TableCell>FullName</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>Mobile No</TableCell>
        <TableCell>Referal</TableCell>
        </TableRow>
</TableHead>
<TableRow>
        <TableCell>{fullname}</TableCell>
        <TableCell>{username}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{countryCode}</TableCell>
        <TableCell>{mobileno}</TableCell>
        <TableCell>{referalId}</TableCell>
        </TableRow>
              </Table>
    </TableContainer></div>
  )
}

export default Dashboard