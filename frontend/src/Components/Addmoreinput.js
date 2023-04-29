import React, { Fragment, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";

function Addmoreinput() {
    const stores = ['ร้านเทคโนอินเตอร์',
        'ร้านป้าศรีส้มตำ',
        'ร้านไอหนวด',
        'ร้านมามาก๋วยเตี๋ยวเรือ',
        'ร้านณรงค์ข้าวมันไก่',
        'ร้านบิลเลียน',
        'ร้านอิดริส',
        'ร้านไอเย็น',
        'ร้านพี่ฝนกาแฟสด&น้ำปั่น',
        'ร้านโอชานะ',
        'ร้าน Curry Shop'
    ]
    const [selectedStore, setSelectedStore] = useState('')
    console.log(selectedStore)

    const values = [1, 2, 3, 4, 5]
    const [selectedValue, setSelectedValue] = useState('')
    console.log(selectedValue)

    const [foodName,setFoodName] = useState('')
    const [inputList, setinputList] = useState([{
        foodName: '',
        // storeName: '',
        // value: '',
    }]);

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setinputList(list);
    }

    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }

    const handleaddclick = () => {
        setinputList([...inputList, { foodName: '', storeName: '', value: '', }]);
    }

    return (
        <Fragment>
            <div class="grid grid-cols-9 items-center gap-1 md:gap-5 mb-3">
                <div class="col-span-3">
                    <label class="font-m text-[calc(70%+0.8vmin)]">
                        ชื่ออาหาร
                    </label>
                </div>
                <div class="col-span-3">
                    <label class="font-m text-[calc(70%+0.8vmin)]">
                        ร้านอาหาร
                    </label>
                </div>
                <div class="col-span-2">
                    <label class="font-m text-[calc(70%+0.8vmin)]">
                        จำนวน
                    </label>
                </div>
                <div class="col-span-1">
                    <button class="align-middle bg-[#BBD9B0] hover:bg-[#9DC88E] rounded py-1 px-1 sm:py-2 sm:px-2" onClick={handleaddclick}>
                        <IoMdAdd />
                    </button>
                </div>
            </div>
            {inputList.map((x, i) => {
                return (
                    <div class="grid grid-cols-9 items-center gap-1 md:gap-5 mb-2">
                        <div class="col-span-3">
                            <input type="text" name="foodName" class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1" placeholder="ระบุชื่ออาหาร" onChange={e => handleinputchange(e, i)} />
                        </div>
                        <div class="col-span-3">
                            <select class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1" onChange={(e) => { setSelectedStore(e.target.value) }}>
                                {
                                    stores.map(store => {
                                        return <option>{store}</option>
                                    })
                                }
                            </select>
                            {/* <input type="text" name="storeName" class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1" placeholder="ระบุชื่อร้าน" onChange={e => handleinputchange(e, i)} /> */}
                        </div>
                        <div class="col-span-2">
                            <select class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1" onChange={(e) => { setSelectedValue(e.target.value) }}>
                                {
                                    values.map(value => {
                                        return <option>{value}</option>
                                    })
                                }
                            </select>
                            {/* <input type="text" name="value" class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1" placeholder="ระบุจำนวน" pattern="[1-9]{1}" onChange={e => handleinputchange(e, i)} /> */}
                        </div>
                        <div class="col-span-1">
                            <button class="align-middle bg-[#ECD8A5] hover:bg-[#E3C67B] rounded py-1 px-1 sm:py-2 sm:px-2" onClick={() => handleremove(i)}>
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                );
            })}
        </Fragment>
    );
}
export default Addmoreinput;
