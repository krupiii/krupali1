/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dash = () => {
    const navigation = useNavigate()
    useEffect(() => {
        const abc = JSON.parse(sessionStorage.getItem('auth'))
        if (!abc) {
            navigation("/login")
        }
    }, [])
    return (


        <div className='d-flex justify-content-center '>
            <Link to={ '/adddata' }>
                <button className='btn btn-primary m-5'>+AddData </button>
            </Link>
            <Link to={ '/listdata' }>
                <button className='btn btn-warning m-5'>=ListData</button>
            </Link>
        </div>


    )
}

export default Dash