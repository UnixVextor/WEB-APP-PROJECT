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
        alert('data saved') //debug
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
            <div class='grid grid-col-2 grid-flow-col gap-10 bg-white rounded-[30px] pl-4 pr-4 w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/5 m-auto mt-5'>
                <div>
                    <div class='text-[30px] mt-5 mb-5'>ลงชื่อเข้าใช้</div>
                    <div class='text-[24px] mb-5'>กรอกข้อมูลของคุณเพื่อลงชื่อเข้าใช้</div>
                    <div class="mb-5">
                        <div>
                            {/* <label for="Username" class="grid justify-items-start block mb-2 text-m">Username</label> */}
                            <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-[18px] rounded block w-full p-2.5" placeholder="รหัสนักศึกษา / อีเมล" required onChange={(e) => handleUsernameChange(e.target.value)} />
                        </div>
                    </div>

                    <div class="mb-5">
                        {/* <label for="password" class="grid justify-items-start block mb-2 text-m">Password</label> */}
                        <input type="password" id="password" class="bg-[#EBEBEB] border border-gray-200 text-[18px] rounded block w-full p-2.5" placeholder="รหัสผ่าน" required onChange={(e) => handlePasswordChange(e.target.value)} />
                    </div>
                    <div class="mb-5">
                        <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-[20px] rounded py-2 px-4 w-full mb-2' onClick={() => handleSignIn()}>ลงชื่อเข้าใช้</button>
                    </div>
                    <div class='grid grid-flow-col items-center mb-5'>
                        <div class='text-[20px]'>
                            ไม่มีบัญชีใช่หรือไม่ ?
                        </div>
                        <a class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-[20px] rounded w-full mb-2'>ลงทะเบียน</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;