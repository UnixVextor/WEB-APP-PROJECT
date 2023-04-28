import React from 'react';
import axios from 'axios';
import { Fragment, useState } from 'react';
// import { useNavigate, Link } from "react-router-dom"
import Upload from '../Components/upload';

function Registration() {
    // const navigate = useNavigate()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // const [checkInvalid, setCheckInvalid] = useState(false)
    const [passwordReCheck, setPasswordRecheck] = useState(false)

    const enterEvent = async (e) => {
        if (e.key === 'Enter') {
            await onsubmit()
        }
    }

    const onsubmit = async () => {
        if (password !== confirmPassword || password === '') {
            setPasswordRecheck(true)
            // setCheckInvalid(false)
        } else if (username.length === 0 || firstname.length === 0 || lastname.length === 0) {
            // setCheckInvalid(true)
            setPasswordRecheck(false)
        } else {
            try {
                const data = await axios.post(`${process.env.REACT_APP_API}/Auth/Register`, {
                    FirstName: firstname,
                    LastName: lastname,
                    Username: username,
                    Email: email,
                    PhoneNumber: phoneNumber,
                    Password: password
                })
                console.log(data.status)

                //if Success go to login
                if (data.status === 200) {
                    // navigate('/login')
                    window.location.reload()
                }

            } catch (err) {
                console.log(err.response.status)
                if (err.response.status === 400) {
                    // setCheckInvalid(true)
                    setPasswordRecheck(false)
                }
            }
        }
    }

    return (
        <Fragment>
            <div class='grid grid-flow-col gap-5 bg-white rounded-[30px] pl-10 pr-10 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-0 m-auto mt-[16px] mb-[2px] w-4/5'>
                <img
                    src="https://i.ibb.co/bFZLMgd/Food-Fast-For-U.png"
                    class="hidden xl:block w-[482px]"
                    alt="..." />
                <div>
                    <div class='text-[calc(70%+0.8vmin)] mt-6 mb-2'>Yay, Welcome to our service!<br></br>Give us the basics about your information</div>
                    <div class="flex flex-col-reverse md:grid gap-2 md:grid-cols-2">
                        <div>
                            <div class="mb-3">
                                <label for="firstname" class="grid justify-items-start block text-base">Firstname</label>
                                <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="John" required value={firstname} onChange={e => setFirstname(e.target.value)} onKeyDown={enterEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="lastname" class="grid justify-items-start block text-base">Lastname</label>
                                <input type="text" id="txtlastname" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Doe" required value={lastname} onChange={e => setLastname(e.target.value)} onKeyDown={enterEvent} />
                            </div>
                        </div>
                        <div class=''>
                            <label for="Upload_photo" class="grid block text-base">Upload a photo</label>
                            <Upload />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="Username" class="grid justify-items-start block text-base">Username</label>
                        <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="JohnDoe1" required value={username} onChange={e => setUsername(e.target.value)} onKeyDown={enterEvent} />
                    </div>
                    <div class="mb-3">
                        <label for="E-mail" class="grid justify-items-start block text-m">E-mail</label>
                        <input type="email" id="txtEmail" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="john.doe@email.com" required value={email} onChange={e => setEmail(e.target.value)} onKeyDown={enterEvent} />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="grid justify-items-start block text-m">Phone Number</label>
                        <input type="tel" id="phone" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="0123456789" pattern="[0-9]{10}" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} onKeyDown={enterEvent} />
                    </div>
                    <div class="grid gap-2 md:grid-cols-2">
                        <div class="mb-3">
                            <label for="password" class="grid justify-items-start block text-m">Password</label>
                            <input type="password" id="password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Enter Password" required value={password} onChange={e => setPassword(e.target.value)} onKeyDown={enterEvent} />
                        </div>
                        <div class="">
                            <label for="confirm_password" class="grid justify-items-start block text-m">Confirm Password</label>
                            <input type="password" id="confirm_password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Enter Confirm Password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onKeyDown={enterEvent} />
                        </div>
                    </div>
                    {/* {checkInvalid ? <label className='p-2 text-[red] sm:text-xl text-lg'>*กรุณาใส่ Username, First Name และ Last Name</label> : ''} */}
                    {passwordReCheck ? <label className='text-red-500 text-m'>** Password และ Confirm Password ไม่ถูกต้อง **</label> : ''}
                    <div>
                        <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-base rounded font-bold py-2 px-3 mt-6 mb-6' onClick={onsubmit}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Registration;