/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Style from './adddata.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
    const { id } = useParams()
    const navi = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")

    useEffect(() => {
        const abc = JSON.parse(localStorage.getItem('id'))
        const item = abc[id]
        setName(item.name)
        setEmail(item.email)
        setPassword(item.password)
        setGender(item.gender)
    }, [])

    const clickToUpdate = () => {
        const abc = JSON.parse(localStorage.getItem('id'))

        const editt = {
            name, email, password, gender
        }
        abc[id] = editt
        localStorage.setItem('id', JSON.stringify(abc))
        navi("./listdata")
    }

    return (
        <>

            <div className={ Style.addlist } >
                <h2>Form</h2>
                <label for="name">Name:</label>
                <input type="text"
                    id='name'
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    name='name'
                    required />
                {
                    name === "" ? <p style={ { color: "red" } }>Enter your name</p> : null
                }


                <label for="email">Email:</label>
                <input type="text"
                    id='email'
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    name='email'
                    required />

                {
                    email === "" ? <p style={ { color: "red" } }>Enter your Email</p> : null
                }

                <label for="password">Password</label>
                <input type="text"
                    id='password'
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    name='password'
                    required />
                {
                    password === "" ? <p style={ { color: "red" } }>Enter your Password</p> : null
                }

                <label className='mt-5'
                    htmlFor="gender">
                    Gender:
                    Male
                    <input required
                        type='radio'
                        value='male'
                        checked={ gender === 'male' }
                        onChange={ (e) => setGender(e.target.value) }
                        name='gender' />

                    Female
                    <input
                        required
                        type="radio"
                        checked={ gender === 'female' }
                        value='female'
                        onChange={ (e) => setGender(e.target.value) }
                        name='gender' />
                </label>

                <Link to={ "/listdata" }>
                    <button className='btn btn-info m-5'
                        type='submit'
                        onClick={ clickToUpdate }>
                        Update</button>
                </Link>

                <Link to={ "/" }>
                    <button className='btn btn-primary'>Cancle</button>
                </Link>
            </div>

        </>
    )
}

export default Edit