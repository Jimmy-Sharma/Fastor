import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const SinglePage = () => {

    const data = JSON.parse(localStorage.getItem("singleRestaurant"));
    console.log(data);

    return (
        <Box height="calc(120vh)" bg={"var(--bg7)"}>
            <Box position="relative" display="grid" justifyContent="center" >
                <Box
                    position="absolute"
                    top="30%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex="1"
                >
                    <Image src="fastorLogo.png" alt="Fastor" width="100px" />
                </Box>
                <Image src={data.images[0].url} alt="Image" width="90%" margin="auto" height='80%' objectFit="cover" borderRadius="0 40px" />
                <Heading margin="auto" color="white" borderRadius="10px" bg={"var(--bg5)"} width="auto" padding="7px 20px" textAlign="center" >{data.restaurant_name}</Heading>
                <Box display="flex" margin="auto" justifyContent="center" alignItems="center" borderRadius="10px" padding="7px 15px" bg={"var(--bg5)"}>
                    <Image
                        src="location.png"
                        rounded={'lg'}
                        height={4}
                        width={4}
                        objectFit={'cover'}
                    />
                    <Text color="white">{(data.location.location_locality || "") + "," + data.location.city_name} </Text>
                </Box>
                <Flex justifyContent="space-evenly" alignItems="center" margin="auto" gap="20px">
                    <Box display='flex' margin="auto" alignItems='center' backgroundColor='' padding='7px 10px' borderRadius='0 15px' bg={"var(--bg5)"} color="white" width="max-content">
                        <Text fontSize={'1.2xl'} fontFamily={'body'} fontWeight={500} marginRight='2px'  >
                            {"Rating: " + data.rating.restaurant_avg_rating + ".0" + " "}
                        </Text>
                        <Image
                            src='rating1.png'
                            rounded={'lg'}
                            height={4}
                            width={4}
                            objectFit={'cover'}
                        />
                    </Box>
                    <Text bg={"var(--bg5)"} color="white" padding='7px 10px' borderRadius='0 15px' width="max-content" >{"₹" + data.avg_cost_for_two + " for two"}</Text>
                </Flex>
                <Flex justifyContent="space-evenly" alignItems="center" margin="auto" gap="20px">
                    <Text bg={"var(--bg5)"} color="white" padding='7px 10px' borderRadius='0 15px' width="max-content" >{"Opens at: " + data.opens_at}</Text>
                    <Text bg={"var(--bg5)"} color="white" padding='7px 10px' borderRadius='0 15px' width="max-content" >{"Closes at: " + data.closes_at}</Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default SinglePage;

