import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Cards from '../Components/Cards';
import { toast } from 'react-hot-toast';

const ListOfRestaurants = () => {

    const [data, setData] = useState([]);

    const token = localStorage.getItem("TokenToLogin")
    console.log(token)

    useEffect(() => {
        const payload = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", payload)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <Box className='box-container' bg={"var(--bg7)"} >
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



