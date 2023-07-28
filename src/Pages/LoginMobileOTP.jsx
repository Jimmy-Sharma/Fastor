import {
    Box,
    Button,
    HStack,
    PinInput,
    PinInputField,
    Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import axios from 'axios'

const LoginMobileOTP = () => {
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [otp5, setOtp5] = useState("");
    const [otp6, setOtp6] = useState("");

    const navigate = useNavigate();

    const handleVerify = async () => {

        if ((otp1 + otp2 + otp3 + otp4 + otp5 + otp6) == "123456") {
            toast.success("Logged in Successfully", {
                style: {
                    borderRadius: "50px",
                    background: "#000428",
                    color: "#ffffff",
                    padding: "1rem 1.5rem",
                    fontWeight: "600",
                },
            });

            const payload = {
                phone: "9818979450",
                otp: otp1 + otp2 + otp3 + otp4 + otp5 + otp6,
                dial_code: "+91",
            }
            try {
                const response = await axios.post('https://staging.fastor.in/v1/pwa/user/login', payload);
                if (response) {
                    localStorage.setItem("TokenToLogin", response.data.data.token);
                }
            } catch (err) {
                console.log(err);
            }
            toast.success("Please Wait...")
            setTimeout(() => {
                navigate("/list")
            }, 3000)
        } else {
            toast.error("Invalid OTP", {
                style: {
                    borderRadius: "50px",
                    background: "#000428",
                    color: "#ffffff",
                    padding: "1rem 1.5rem",
                    fontWeight: "600",
                },
            });
        }
    };

    return (
        <>
            <Box padding={"30px"} alignItems="center">
                <Box paddingTop={"10%"} textAlign="center">
                    <Text fontSize="2xl" as="b">
                        OTP Verification
                    </Text>
                    <Text color="grey">
                        Enter the verification code we just sent on your Mobile Number.{" "}
                    </Text>
                </Box>

                <Box display="grid" paddingTop={"30px"} justifyContent="center">
                    <HStack>
                        <PinInput >
                            <PinInputField onChange={(e) => setOtp1(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp2(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp3(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp4(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp5(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp6(e.target.value)} />
                        </PinInput>
                    </HStack>
                </Box>

                <Box textAlign="center" marginTop={"30px"}>
                    <Button
                        size="lg"
                        background={"#ff7878"}
                        color="white"
                        onClick={handleVerify}
                    >
                        Verify
                    </Button>
                </Box>
                <Box display="flex" marginTop={"40px"} justifyContent="center">
                    <Text>Didn't recieved code?</Text>
                    <Text color={"blue"}>
                        <Link to="/">Resend</Link>
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default LoginMobileOTP