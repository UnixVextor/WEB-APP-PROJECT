import React, { Fragment } from 'react';

function ChoiceForOrder() {
    return (
        <Fragment>
            <div class="grid md:grid-col-2 md:grid-flow-col gap-5 m-auto ml-5 mr-5 mt-[20px]">
                <div class="group grid justify-center mb-4">
                    <div>
                        <span class="flex font-bold text-4xl mb-2">
                            FoodFastForU<br />
                        </span>
                        <span class="flex justify-self-start font-medium text-left text-xl">
                            เลือกบริการที่คุณ<br />
                            ต้องการใช้งาน
                        </span>
                    </div>
                </div>
                <div class='flex justify-evenly gap-5 md:gap-2'>
                    <a href="#" class="group grid justify-center rounded-3xl pb-5 hover:bg-[#FAE5AF] duration-200 scale-90 hover:scale-100 ease-in-out duration-200">
                        <img class="rounded-2xl w-96 mb-5" src="https://www.linkpicture.com/q/รับฝาก.png" />
                        <div className='Deposit'>
                            <div class="text-4xl mb-5">
                                “รับฝาก”<br />
                            </div>
                            <div class="text-xl mb-5">
                                เป็นคนรับฝากซื้อข้าว<br />
                                ให้แก่เพื่อนๆของคุณ
                            </div>
                        </div>
                        <div class="w-16 h-16 mb-5 bg-[#ECD8A5] rounded-full justify-self-center group-hover:scale-125 ease-in-out duration-200">
                        </div>
                    </a>

                    <a href="#" class="group grid justify-center rounded-3xl pb-5 hover:bg-[#E6EBA9] duration-200 scale-90 hover:scale-100 ease-in-out duration-200">
                        <img class="rounded-2xl w-96 mb-5" src="https://www.linkpicture.com/q/ฝากซื้อ_1.png" />
                        <div className='Order'>
                            <div class="text-4xl mb-5">
                                “ฝากซื้อ”<br />
                            </div>
                            <div class="text-xl mb-5">
                                ฝากเพื่อนๆของคุณ<br />
                                ให้ซื้อข้าวมาให้
                            </div>
                        </div>
                        <div class="w-16 h-16 mb-5 bg-[#CCD197] rounded-full justify-self-center group-hover:scale-125 ease-in-out duration-200">
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default ChoiceForOrder