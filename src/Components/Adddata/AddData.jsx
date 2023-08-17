import React, { useState } from 'react'
import Style from './adddata.module.css';
import { Link } from 'react-router-dom';

const AddData = () => {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [gender, setGender] = useState([])

    const clickToSubmit = (e) => {
        const existingData = JSON.parse(localStorage.getItem('id')) || [];
        const newData = {
            name,
            email,
            password,
            gender
        };

        existingData.push(newData)

        localStorage.setItem('id', JSON.stringify(existingData))

        setName("")
        setEmail("")
        setPassword("")
        setGender("")

    }

    return (
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
                    value='female'
                    checked={ gender === 'female' }
                    onChange={ (e) => setGender(e.target.value) }
                    name='gender' />
            </label>

            <button className='btn btn-primary m-5' type='submit' onClick={ clickToSubmit }>Submit</button>

            <Link to={ "/" }>
                <button className='btn btn-primary'>Cancle</button>
            </Link>
        </div>
    )
}

export default AddData