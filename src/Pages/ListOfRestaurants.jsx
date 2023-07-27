import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Cards from '../Components/Cards';

const ListOfRestaurants = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("")
            .then((res) =>
                setData(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <Box padding={"20px"}>
            {
                data?.map((item) => (
                    <div key={item.id}>
                        <Cards {...item} />
                    </div>
                ))
            }
        </Box>
    )
}

export default ListOfRestaurants



