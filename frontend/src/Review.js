import React, { Fragment, useState } from 'react';

function Review() {
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = () => {
        if (rateValue) {
            setIsSubmit(true);
        }
    };
    return (
        <Fragment>
            <span class="flex font-bold text-3xl mt-20 ml-20 mb-4 gap-5">
                REVIEW YOUR ORDER<br />
            </span>
            <p class="text-left ml-20 mb-22">ให้เรทคะแนนแก่ผู้รับฝากหิ้วข้าวของคุณ</p>

            <div class="grid grid-cols-2 grid-flow-col gap-5 m-auto ml-10 mr-10 mt-[55px]">
                <div class="group grid justify-center">

                    <div class="border-solid border-2 mb-8 h-10 w-80 border-rose-600">ชื่อ</div>
                    <div class="border-solid border-2 mb-8 h-10 w-80 border-rose-600">อีเมล</div>


                </div>
                <div class="group grid justify-center">
                    <div class="border-solid border-2 mb-8 h-10 w-80 border-rose-600">
                        รหัสนักศึกษา
                    </div>
                    <div class="border-solid border-2 mb-8 h-10 w-80 border-rose-600">
                        เบอร์โทร
                    </div>

                </div>

            </div>

            {/* <div class="grid grid-cols-2 gap-5 m-auto ml-20 mr-10 mt-[70px]">
                <div class="border-solid border-2 mb-8 h-10 w-80 border-rose-600"></div>
                <div class="border-solid border-2 mb-12 h-10 w-80 border-rose-600"></div>
            </div> */}
            <div class="grid grid-cols-2 gap-5 m-auto ml-10 mr-10 mt-[55px]">
                <div>
                    <p class="text-left text-2xl ml-20 mb-20">ความพึงพอใจ (มากสุด 5 คะแนน )</p>
                    <div className="grid grid-cols-5 ml-20 mb-10">
                        {[1, 2, 3,4,5].map((value) => {
                            return (
                                <div
                                    key={value}
                                    className={`grid place-content-center  h-12 w-12 rounded-full cursor-pointer  transition-all ${value === rateValue
                                        ? "bg-orange-500  text-white"
                                        : "text-gray-400 hover:bg-[white] hover:text-orange-500  bg-zinc-900"
                                        }`}
                                    onClick={() => setRateValue(value)}
                                >
                                    {value}
                                </div>

                            );
                        })}
                    </div>
                    
                </div>
                <label>
                    <textarea type="text" placeholder="คำแนะนำ" className='h-40 w-96 px-6  mb-40 text-2xl text-black bg-[#CFC7B1] border-white rounded-lg ' />
                    {/* < className='text-2xl text-black text-opacity-80 px-1 transition duration-200 input-text'>คำแนะนำ</span> */}
                </label>

            </div>

            <div class="">
                <button
                    className="bg-[#BBD9B0] rounded-3xl h-10 w-80 hover:bg-white hover:text-orange-500 transition-all"
                    onClick={handleSubmit}
                >
                    เสร็จสิ้น
                </button>
            </div>



        </Fragment>
    )
}

export default Review