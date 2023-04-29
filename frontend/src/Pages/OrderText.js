import React, { Fragment, useState } from 'react';
import Addmoreinput from '../Components/Addmoreinput';
import axios from 'axios';
import { GrMap } from "react-icons/gr"

function OrderText() {

    const [note, setNote] = useState('');
    const [address, setAddress] = useState('');

    const handleNoteChange = (value) => {
        setNote(value);
    };

    const handleAddressChange = (value) => {
        setAddress(value);
    };

    const handleSumOrder = () => {
        // api_name : state_name
        const data = {
            note: note,
            address: address,
            IsActive: 1
        };
    }

    const url = ''; //api.url
    axios.post(url.data).then((result) => {
        if (result.data == 'Data inserted.') {
            alert('Data saved');
        }
        else
            alert(result.data)
    })

    return (
        <Fragment>
            <div class="bg-[#CFC7B1] rounded-lg m-auto px-5 py-5 mt-5 mb-5 w-full sm:w-4/5 lg:w-4/5">
                <div>
                    <div class="grid mb-3">
                        <label class="justify-self-start mb-1 font-semibold tracking-wide text-[calc(70%+0.8vmin)]">
                            พิมพ์สั่งอาหารที่นี่
                        </label>
                        <div class="bg-[#F6F1DD] rounded-md px-5 py-5">
                            <Addmoreinput />
                        </div>
                    </div>

                    <div class="grid mb-4">
                        <label class="justify-self-start mb-1 font-semibold tracking-wide text-[calc(70%+0.8vmin)]">
                            หมายเหตุ
                        </label>
                        <textarea class="bg-[#F6F1DD] text-[calc(70%+0.8vmin)] border-0 rounded-md" placeholder="หมายเหตุ"
                            onChange={(e) => handleNoteChange(e.target.value)}></textarea>
                    </div>

                    <div class="grid gap-1">
                        <div class="flex justify-self-start mb-1 gap-2">
                            <GrMap class="scale-150 ml-2" />
                            <label class="font-semibold text-[calc(70%+0.8vmin)]">
                                ที่อยู่
                            </label>
                        </div>
                        <textarea class="bg-[#F6F1DD] text-[calc(70%+0.8vmin)] border-0 rounded-md w-full" placeholder="ระบุที่อยู่"
                            onChange={(e) => handleAddressChange(e.target.value)}></textarea>
                    </div>
                </div>
            </div>

            <div class="flex justify-evenly m-auto ">
                <button class="bg-[#ECD8A5] hover:bg-[#E3C67B] text-xl rounded font-medium py-3 px-3 mt-6 mb-5">
                    กลับไปที่หน้าเมนู
                </button>
                <button class="bg-[#BBD9B0] hover:bg-[#9DC88E] text-xl rounded font-medium py-3 px-3 mt-6 mb-5"
                    onClick={() => handleSumOrder()}>
                    สรุปรายการอาหาร
                </button>
            </div>

        </Fragment>
    )
}

export default OrderText