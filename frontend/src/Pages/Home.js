import React, { Fragment, useState } from 'react';
import axios from 'axios';

function Home() {
    return (
        <Fragment>
            {/* main */}
            <section class = "bg-[#F5EED5] h-screen flex px-[10%] py-[6%]">
                {/* BG */}
                <img src = 'https://imgz.io/images/2023/04/29/webapp2_edit.png' class = "absolute bottom-0 left-0 h-screen"/>
                {/* circle */}
                <img src = "https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute left-[350px] top-[90px]"/>
                <img src = "https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute right-96 top-20"/>
                <img src = "https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute left-[150px] bottom-20"/>
                <img src = "https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute right-40 top-64"/>
                {/* waveShape */}
                <img src = "https://imgz.io/images/2023/04/29/minimal-2.png" class= "absolute z-10 bottom-10 right-10 object-scale-down w-60"/>
                {/* sun */}
                <img src = "https://imgz.io/images/2023/04/29/sun.png" class= "absolute top-30 right-20 w-50 object-scale-down h-50 w-20"/>  
                {/* mainImg */}
                <img src = 'https://imgz.io/images/2023/04/29/BG2_edit-2.png' class = "absolute bottom-20 left-10 w-[550px] animate-bounce"/>
                {/* text */}
                <div class = "flex-1 px-[20%] pt-7">
                    <div class = "absolute bottom-[160px] right-[200px]"> 
                        <h1 class = "text-4xl leading-normal py-10 px-20 text-left">
                            Food Delivery <br />
                            & Service  
                            <span class = "underline decoration-wavy decoration-orange-300"> For U </span>
                            <h1 class = "text-xl">ยินดีต้อนรับเข้าสู่บริการรับฝาก-ฝากซื้ออาหาร<br/>
                                                    ที่โรงพระเทพเพื่อความสะดวกสบายของคุณ</h1>
                        </h1>
                        <h2 class = "underline decoration-wavy decoration-white-400"></h2>
                    </div>   
                </div>
            </section>
        </Fragment>
    )
}

export default Home;