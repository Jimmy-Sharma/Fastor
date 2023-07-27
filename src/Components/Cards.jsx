import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("singleRestaurant", JSON.stringify(props))
    navigate('/single')
  }


  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      padding={"20px"}
      margin="10px"
      onClick={handleClick}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{props}</Heading>
          <Text py="2">
            {
              `Name : ${props}`
            }
          </Text>
          <Text py="2">
            {
              `Category : $ ${props}`
            }
          </Text>
          <Text py="2">
            {
              `Location : ${props}`
            }
          </Text>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Cards;