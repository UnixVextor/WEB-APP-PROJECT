import React, { Fragment, useState } from 'react';
import Upload from './Components/upload';
import axios from 'axios';

function Registration() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirm_password, setConfirm_password] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const handleFirstnameChange = (value) => {
        setFirstname(value);
    };
    const handleLastnameChange = (value) => {
        setLastname(value);
    };
    const handleUsernameChange = (value) => {
        setUsername(value);
    };
    const handleEmailChange = (value) => {
        setEmail(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    };
    const handleConfirm_passwordChange = (value) => {
        setConfirm_password(value);
    };
    const handlephoneNoChange = (value) => {
        setPhoneNo(value);
    };

    const handleSignUp = () => {
        // api_name : state_name
        const data = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            Confirm_password: Confirm_password,
            phoneNo: phoneNo,
            IsActive: 1
        };
        alert('data saved') // debug
    }

    const url = ''; //api.url
    axios.post(url.data).then((result) => {
        if (result.data == 'Data inserted.')
            alert('data saved');
        else
            alert(result.data)
    })

    return (
        <Fragment>
            <div class='grid grid-col-2 grid-flow-col gap-5 bg-white rounded-[30px] pl-10 pr-10 sm:pl-10 md:pl-10 lg:pl-0 xl:pl-0 m-auto mt-[20px] mb-[2px] w-4/5'>
                <img
                    src="https://i.ibb.co/bFZLMgd/Food-Fast-For-U.png"
                    // class="invisible sm:invisible md:invisible lg:visible xl:visible w-[420px]"
                    class="hidden md:hidden lg:block xl:block w-[482px]"
                    alt="..." />
                <div>
                    <div class='text-[calc(80%+0.8vmin)] mt-6 mb-2'>Yay, Welcome to our service!<br></br>Give us the basics about your information</div>
                    <div class="grid gap-2 mb-2 md:grid-cols-2">
                        <div>
                            <label for="Username" class="grid justify-items-start block mb-2 text-base">Firstname</label>
                            <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="John" required onChange={(e) => handleFirstnameChange(e.target.value)} />
                        </div>
                        <div>
                            <label for="lastname" class="grid justify-items-start block mb-2 text-base">Lastname</label>
                            <input type="text" id="txtlastname" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Doe" required onChange={(e) => handleLastnameChange(e.target.value)} />
                        </div>
                        <div>
                            <label for="Username" class="grid justify-items-start block mb-2 text-base">Username</label>
                            <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="JohnDoe1" required onChange={(e) => handleUsernameChange(e.target.value)} />
                        </div>
                        <div>
                            <label for="Upload_photo" class="grid justify-items-start block mb-2 text-base">Upload a photo</label>
                            <Upload />
                        </div>
                    </div>


                    <div class="mb-2">
                        <label for="E-mail" class="grid justify-items-start block mb-2 text-m">E-mail</label>
                        <input type="email" id="txtEmail" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="john.doe@email.com" required onChange={(e) => handleEmailChange(e.target.value)} />
                    </div>
                    <div class="mb-2">
                        <label for="password" class="grid justify-items-start block mb-2 text-m">Password</label>
                        <input type="password" id="password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="•••••••••" required onChange={(e) => handlePasswordChange(e.target.value)} />
                    </div>
                    <div class="mb-2">
                        <label for="confirm_password" class="grid justify-items-start block mb-2 text-m">Confirm password</label>
                        <input type="password" id="confirm_password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="•••••••••" required onChange={(e) => handleConfirm_passwordChange(e.target.value)} />
                    </div>
                    <div>
                        <label for="phone" class="grid justify-items-start block mb-2 text-m">Phone Number</label>
                        <input type="tel" id="phone" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="0123456789" pattern="[0-9]{10}" required onChange={(e) => handlephoneNoChange(e.target.value)} />
                    </div>
                    <div>
                        <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-base rounded font-medium py-2 px-4 mt-6 mb-6' onClick={() => handleSignUp()}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Registration;