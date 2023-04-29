import React, { Fragment, useState } from 'react';
import axios from 'axios';

function MenuItList() {
    return (
        <Fragment>
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้านอิดริส</div>
                <div class="p-3 bg-[#B9DBAD]">
                    <h1 class="relative h-40 w-100 absolute inset-y-0 left-0 text-black text-5xl text-center">เมนู</h1>
                </div>
                <div class = "border-l-8 border-l-transparent gap-0 justify-self-end bg-left-bottom">
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div> 
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div> 
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดราคาข้าวราดแกง
                            <h2 class="list-inside text-left">
                                <li>ข้าวราดแกง 1 อย่าง  20-25 บาท</li>
                                <li>ข้าวราดแกง 2 อย่าง 30 บาท</li>
                                <li>อาหารตามสั่ง 35-40 บาท</li>
                                <li>กับข้าว(ถุง) 35-40 บาท</li>
                                <li>ไข่ดาว 5 บาท</li>
                                <li>ข้าวเปล่า 10 บาท</li>
                            </h2>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูขึ้นชื่อ
                            <h2 class="list-inside text-left">
                                <li>มาม่าผัดขี้เมาทะเล</li>
                                <li>ผัดผักรวมมิตร</li>
                                <li>ผัดคะน้าหมูกรอบ</li>
                                <li>ข้าวผัดกระเพราหมู/หมูกรอบ</li>
                                <li>ข้าวผัดหมู/ไก่/กุ้ง</li>
                                <li>ผัดซีอิ๊วหมู/ไก่/กุ้ง/ปลาหมึก</li>
                                <li>ต้มเลือดหมู</li>
                                <li>ต้มจืดเต้าหู้หมูสับ</li>
                                <li>หมูทอดกระเทียม</li>
                                <li>หมูคั่วพริกเกลือ</li>
                                <li>ต้มข่าไก่</li>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">กลับไปหน้าร้านอาหาร</button>
            <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">ต่อไป</button>
        </Fragment>
    )
}

export default MenuItList;