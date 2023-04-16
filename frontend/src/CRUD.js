import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';

const CRUD = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    const [editUsername, setEditUsername] = useState('')
    const [editPassword, setEditPassword] = useState('')
    const [editPhonenumber, setEditPhonenumber] = useState('')
    const [editName, setEditName] = useState('')
    const [editLastname, setEditLastname] = useState('')

    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(getData);
    },[])

    const getData = () => {
        axios.get('http://localhost:5077/api/Users')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleEdit = (id) =>{
        //alert(id);
        handleShow();
    }

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this employee ?") == true){
            axios.delete('http://localhost:5077/api/Users/${id}')
            .then((result)=>{
                if(result.status === 200){
                    getData();
                }
            })
        }
    }

    const handleSave = () =>{
        const url = 'http://localhost:5077/api/Users';
        const data = {
                "userName": userName,
                "password": password,
                "phonenumber": phonenumber,
                "name": name,
                "lastname": lastname
            }

        axios.post(url,data)
        .then((result) =>{
            getData();
            clear();
        })
    }

    const clear = () => {
        setUsername('');
        setPassword('');
        setPhonenumber('');
        setName('');
        setLastname('');
        setEditUsername('');
        setEditPassword('');
        setEditPhonenumber('');
        setEditName('');
        setEditLastname('');
    }

    const handleUpdate = () => {

    }

    return(
        <Fragment>
             <Container>
                <Row>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Username" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    </Col>
                    <Col>
                    <button className="btn btn-primary" onClick={() => handleSave()}>Submit</button>
                    </Col>
                </Row>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>password</th>
                        <th>phonenumber</th>
                        <th>name</th>
                        <th>lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                        data.map((item, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.password}</td>
                                    <td>{item.phonenumber}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td colSpan={2}>
                                        <button className="btn btn-primary" onClick={()=>handleEdit(item.id)}>Edit</button> &nbsp;
                                        <button className="btn btn-danger"onClick={()=>handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'Loading. . .'
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modify Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body><Row>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Username" value={editUsername} onChange={(e) => setEditUsername(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Password" value={editPassword} onChange={(e) => setEditPassword(e.target.value)}/> 
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Phonenumber" value={editPhonenumber} onChange={(e) => setEditPhonenumber(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type = "text" className="form-control" placeholder="Enter Lastname" value={editLastname} onChange={(e) => setEditLastname(e.target.value)}/>
                    </Col>
                    <Col>
                    <button className="btn btn-primary">Submit</button>
                    </Col>
                </Row></Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default CRUD;