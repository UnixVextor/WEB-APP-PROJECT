import React, { Fragment, useState } from 'react';
import axios from 'axios';

function MenuCurry() {
    return (
        <Fragment>
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้าน Curry Shop</div>
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
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div> 
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div> 
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div> 
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div> 
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูไข่ๆ
                            <h2 class="list-inside text-left">
                                <li>ข้าวไข่ข้นกะเพราไก่ทอด  45 บาท</li>
                                <li>ข้าวไข่ข้นกะเพราหมูทอด  55 บาท</li>
                                <li>ข้าวไข่ข้นกะเพราปลาทอด 50 บาท</li>
                                <li>ข้าวไข่ข้นผัดผงกะหรี่ไก่ทอด 50 บาท</li>
                                <li>ข้าวไข่ข้นลาบหมู 55 บาท</li>
                                <li>ข้าวไข่ข้นไก่ทอด  40 บาท</li>
                                <li>ข้าวไข่ข้นปลาทอด  45 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดมาม่าคู่ใจ
                                <h2 class="list-inside text-left">
                                    <li>มาม่าต้มยำไก่ทอด 40 บาท</li>
                                    <li>มาม่าหมูสับไก่ทอด 40 บาท</li>
                                    <li>มาม่าผัดฉ่าไก่ทอด 40 บาท</li>
                                    <li>มาม่าผัดไข่ไก่ทอด 40 บาท</li>
                                    <li>มาม่าแห้งไก่ทอด 40 บาท</li>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูคิดอะไรไม่ออกสั่งกระเพรา
                            <h2 class="list-inside text-left">
                                <li>ข้าวกะเพราไก่ทอด  40 บาท</li>
                                <li>ข้าวกะเพราหมูทอด 45 บาท</li>
                                <li>ข้าวกะเพราะปลาทอด 45 บาท</li>
                                <li>ข้าวกะเพราหมูสับ 45 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูอื่นๆ
                                <h2 class="list-inside text-left">
                                    <li>ข้าวแกงกะหรี่หมูทอด 50 บาท</li>
                                    <li>ข้าวแกงกะหรี่ปลาทอด 45 บาท</li>
                                    <li>ข้าวผัดผงกะหรี่ไก่ทอด 50 บาท</li>
                                    <li>ข้าวลาบหมู 40  บาท</li>
                                    <li>บะหมี่แห้งต้มยำไก่ทอด  50 บาท</li>
                                    <li>ข้าวไก่เทอริยากิ  40 บาท</li>
                                    <li>ข้าวหมูคัตสึดัง  50 บาท</li>
                                    <li>ข้าวไก่คัตสึ 35 บาท</li>
                                    <li>ข้าวไก่โอโคโน่  40 บาท</li>
                                    <li>ข้าวไก่ทอด  35 บาท</li>
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

export default MenuCurry;