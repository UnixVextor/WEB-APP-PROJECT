import React, { Fragment, useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (value) => {
        setUsername(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleSignIn = () => {
        // api_name : state_name
        const data = {
            username: username,
            password: password,
            IsActive: 1
        };
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
            <div class='grid grid-col-2 grid-flow-col gap-10 bg-white rounded-[30px] mt-[100px] mr-[500px] ml-[500px] pl-4 pr-4 '>
                <div>
                    {/* forms */}
                    <div class='text-[20px] mb-2'>User Login</div>
                    <div class='text-[20px] mb-2'>Hey, Enter your details to get sign in to your account</div>
                    <div class="mb-2">
                        <div>
                            <label for="Username" class="grid justify-items-start block mb-2 text-base">Username</label>
                            <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Enter E-mail" required onChange={(e) => handleUsernameChange(e.target.value)} />
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="password" class="grid justify-items-start block mb-2 text-m">Password</label>
                        <input type="password" id="password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Password" required onChange={(e) => handlePasswordChange(e.target.value)} />
                    </div>
                    <div>
                        <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-base rounded font-medium w-full mb-2' onClick={() => handleSignIn()}>SIGN IN</button>
                    </div>
                    <div>
                        <div class='text-[20px] mb-2'>
                            Don't have an account?
                        </div>
                        <div>
                            <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-base rounded font-medium w-full mb-2'>REGISTER</button>
                        </div>
                    </div>  
                </div>
            </div>
        </Fragment>
    )
}

export default Login;