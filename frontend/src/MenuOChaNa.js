import React, { Fragment, useState } from 'react';
import axios from 'axios';

function MenuOChaNa() {
    return (
        <Fragment>
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้านโอชานะ</div>
                <div class="bg-white p-3 bg-[#B9DBAD]">
                    <h1 class="relative h-40 w-100 absolute inset-y-0 left-0 text-black text-5xl text-center">MENU</h1>
                </div>
                <div class = "border-l-8 border-l-transparent gap-0 justify-self-end bg-left-bottom">
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
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูข้าว
                            <h2 class="list-inside text-left">
                                <li>ข้าวหมูแดง 40 บาท</li>
                                <li>ข้าวหมูแดงพิเศษ 45 บาท</li>
                                <li>ข้าวหมูแดงกรอบ 50 บาท</li>
                                <li>ข้าวหมูกรอบพิเศษ 55 บาท</li>
                                <li>ข้าวหมูกรอบ 45 บาท</li>
                                <li>ข้าวขาหมู  45 บาท</li>
                                <li>ข้าวขาหมูพิเศษ 50 บาท</li>
                                <li>ข้าวหมูย่างจิ้มแจ่ว 45 บาท</li>
                            </h2>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูเส้นๆ
                            <h2 class="list-inside text-left">
                                <li>ก๋วยเตี๋ยวไก่ตุ๋น(น่องไก่)  50 บาท</li>
                                <li>ก๋วยเตี๋ยวไก่ฉีก 35 บาท</li>
                                <li>ก๋วยเตี๋ยวเป็ดตุ๋น 40 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดเพิ่มเติม
                                <h2 class="list-inside text-left">
                                    <li>เพิ่มไข่ 5 บาท</li>
                                </h2>
                            </div>
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

export default MenuOChaNa;