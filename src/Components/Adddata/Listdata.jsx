import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Style from './listdata.module.css'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Listdata = () => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('id')) || [])
    const [show, setShow] = useState(false);
    const [sell, setSell] = useState()

    const handleClose = () => setShow(false);
    // eslint-disable-next-line no-unused-vars
    const handleDelete = () => setShow(true);


    const clickToYesDel = (id) => {
        const xyz = data.filter((ele, i) => i !== id);
        setData(xyz)
        setSell()
        localStorage.setItem('id', JSON.stringify(xyz))
        setShow(false)
    }

    return (



        <div>



            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((ele, index) => {
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <th>{ ele.name }</th>
                                    <th>{ ele.email }</th>
                                    <th>{ ele.password }</th>
                                    <th>{ ele.gender }</th>
                                    <th>


                                        <button type='button'
                                            className='btn btn-danger m-2'
                                            onClick={ () => { setSell(index); setShow(true) } }>
                                            Delete
                                        </button>

                                        <Link to={ `/edit/${index}` }>
                                            <button type='button'
                                                className='btn btn-info'
                                            >
                                                Edit
                                            </button>
                                        </Link>

                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to={ '/' }>
                <button className='btn btn-outline-danger'>Cancle</button>
            </Link>

            <Modal show={ show } onHide={ handleClose }>

                <Modal.Body>Are You Sure Delete Data!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => clickToYesDel(sell) }>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={ () => handleClose(false) }>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default Listdata