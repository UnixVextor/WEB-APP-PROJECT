import React, { Fragment } from 'react';

function ChoiceForOrder() {
    return (
        <Fragment>
            <div class="grid grid-col-3 grid-flow-col gap-5 m-auto ml-5 mr-5 mt-[50px]">
                <div class="group grid justify-center">
                    <div>
                        <span class="flex font-bold text-4xl mb-8">
                            FoodFastForU<br />
                        </span>
                        <span class="flex justify-self-start font-medium text-left text-xl">
                            เลือกบริการที่คุณ<br />
                            ต้องการใช้งาน
                        </span>
                    </div>
                </div>

                <a href="#" class="group grid justify-center rounded-3xl pt-5 pb-5 hover:bg-[#ECD8A5]">
                    <img class="w-96 mb-5" src="https://www.linkpicture.com/q/รับฝาก.png" />
                    <div className='Deposit'>
                        <div class="text-4xl mb-5">
                            “รับฝาก”<br />
                        </div>
                        <div class="text-xl mb-5">
                            เป็นคนรับฝากซื้อข้าวให้<br />
                            แก่เพื่อนๆของคุณ
                        </div>
                    </div>
                    <div class="w-16 h-16 mb-5 bg-[#FAE5AF] rounded-full justify-self-center">
                    </div>
                </a>

                <a href="#" class="group grid justify-center rounded-3xl pt-5 pb-5 hover:bg-[#E6EBA9]">
                    <img class="w-96 mb-5" src="https://www.linkpicture.com/q/ฝากซื้อ_1.png" />
                    <div className='Order'>
                        <div class="text-4xl mb-5">
                            “ฝากซื้อ”<br />
                        </div>
                        <div class="text-xl mb-5">
                            ฝากเพื่อนๆของคุณให้<br />
                            ซื้อข้าวมาให้
                        </div>
                    </div>
                    <div class="w-16 h-16 mb-5 bg-[#CCD197] rounded-full justify-self-center">
                    </div>
                </a>
            </div>
        </Fragment>
    )
}

export default ChoiceForOrder