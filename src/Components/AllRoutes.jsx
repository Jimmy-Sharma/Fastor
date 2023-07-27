import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginMobileNumber from '../Pages/LoginMobileNumber'
import LoginMobileOTP from '../Pages/LoginMobileOTP'
import ListOfRestaurants from '../Pages/ListOfRestaurants'
import SinglePage from '../Pages/SinglePage'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginMobileNumber />} />
                <Route path='/otp' element={<LoginMobileOTP />} />
                <Route path='/list' element={<ListOfRestaurants />} />
                <Route path='/single' element={<SinglePage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes