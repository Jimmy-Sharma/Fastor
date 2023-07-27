import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const SinglePage = () => {
    const data = JSON.parse(localStorage.getItem("singleRestaurant"));
    console.log(data);

    return (
        <Box padding={"20px"} position="relative">
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="1"
            >
                <Image src="fastorLogo.png" alt="Fastor" width="100px" />
            </Box>
            <Image src={data} alt="Image" />
            <Text fontSize='2xl' as='b'>{data}</Text>
        </Box>
    );
};

export default SinglePage;