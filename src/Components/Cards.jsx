import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import {
  Center,
  useColorModeValue
} from '@chakra-ui/react'

const Cards = (props) => {
  const nav = useNavigate();

  // console.log(props)
  const handleClick = () => {
    localStorage.setItem("singleRestaurant", JSON.stringify(props))
    nav('/single')

  }

  const IMAGE = props.images[0].url
  return (
    <>
      <Center py={12}>
        <Box
        bg={"var(--bg8)"}
        cursor="pointer"
          onClick={handleClick}
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {props.restaurant_name}
            </Heading>
            <Box display='flex' alignItems='center' backgroundColor='green' color='white' padding='10px' borderRadius='5px'>
              <Heading fontSize={'1.2xl'} fontFamily={'body'} fontWeight={500} >
                {"Rating: "+props.rating.restaurant_avg_rating+".0    "}
              </Heading>
              <Image
              src='rating1.png'
              rounded={'lg'}
              height={4}
              width={4}
              objectFit={'cover'}
              />
            </Box>


            <Text color={'gray.500'} fontSize={'sm'} fontWeight={600}>
              {"₹" + props.avg_cost_for_two + " for two"}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} fontWeight={600}>
              {"Closes at " + props.closes_at}
            </Text>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Cards;