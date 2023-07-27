import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const LoginMobileNumber = () => {
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(number.length == 10){
        toast.success("OTP Generated", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
        navigate('/otp')
    }else{
        toast.error("Please Enter a Valid Number", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
    }
  }
  return (
    <Box>
      <Box paddingTop={"10%"} >
        <Text fontSize='2xl' as='b' >Enter Your Mobile Number</Text>
        <Text color='grey'>We will send you the 6 digits verification code </Text>
      </Box>
      <Box textAlign="center" paddingTop={"30px"}>
        <Input size='md' width={"40%"} placeholder="Enter your Mobile Number" type={"number"} onChange={(e) => setNumber(e.target.value)} />
        <Box paddingTop={"30px"}>
          <Button background={'#ff7878'} color="white" onClick={handleSubmit}>Send Code</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginMobileNumber