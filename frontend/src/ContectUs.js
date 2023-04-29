import React from "react";
import { Fragment, useState } from "react";
import { BsGithub } from "react-icons/bs"

function ContectUs() {
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = () => {
        if (rateValue) {
            setIsSubmit(true);
        }
    };
    return (
        <Fragment>
            <div class="grid grid-col-2 grid-flow-col gap-5 m-auto ml-10 mr-10 mt-[70px]">
                <div class="group grid justify-center">
                    <span class="flex justify-start font-bold text-3xl mb-4 gap-5">
                        ทีมผู้พัฒนา :<br />
                    </span>
                    <div class="group grid justify-center">
                        <a href="#" class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#E0D7BF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://upload.wikimedia.org/wikipedia/th/thumb/e/e4/Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg/1200px-Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg.png"  ></img>
                            <div className='ohm'>
                                <div class="text-xl mb-5">
                                    พนธกร วัลลานนท์<br />
                                    64010552
                                </div>
                            </div>
                        </a>

                        <a href="#" class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#FFFFFF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://upload.wikimedia.org/wikipedia/th/thumb/e/e4/Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg/1200px-Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg.png"  ></img>
                            <div className='memee'>
                                <div class="text-xl mb-5">
                                    พิมลณัฐ ศรีเผด็จกุลชา<br />
                                    64010605
                                </div>
                            </div>
                        </a>

                        <a href="#" class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#E0D7BF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://upload.wikimedia.org/wikipedia/th/thumb/e/e4/Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg/1200px-Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg.png"  ></img>
                            <div className='pich'>
                                <div class="text-xl mb-5">
                                    ภาพพิชญ์ พงศ์พัฒนาวุฒิ<br />
                                    64010670
                                </div>
                            </div>
                        </a>

                        <a href="#" class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#FFFFFF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://upload.wikimedia.org/wikipedia/th/thumb/e/e4/Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg/1200px-Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg.png"  ></img>
                            <div className='petch'>
                                <div class="text-xl mb-5">
                                    วรธัช จิตติชัย<br />
                                    64010759
                                </div>
                            </div>
                        </a>

                        <a href="#" class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#E0D7BF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://upload.wikimedia.org/wikipedia/th/thumb/e/e4/Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg/1200px-Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg.png"  ></img>
                            <div className='two'>
                                <div class="text-xl mb-5">
                                    วิฑูรย์ วัชรกฤตเวคิน<br />
                                    64010806
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <div class="group grid justify-start">

                    <div class="flex flex-col text-left mt-12 space-y-4">
                        ช่องทางการติดต่อ
                        <div class="rounded-3xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010552@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-3xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0918198555
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89]" href="https://github.com/PlasticxPlastic" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>

                        <br />
                        <br />
                        <br />

                        <div class="rounded-3xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010605@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-3xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0945559645
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89]" href="https://github.com/pimolnut" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>

                        <br />
                        <br />



                        <div class="rounded-3xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010670@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-3xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0869201512
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89]" href="https://github.com/Pappich" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>

                        <br />
                        <br />
                        <br />


                        <div class="rounded-3xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010759@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-3xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0926415614
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89]" href="https://github.com/WoraPhet" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>


                        <br />
                        <br />



                        <div class="rounded-3xl pt-3 pb-1 bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 mr-5 text-left">
                                    Email:64010806@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-3xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0616193031
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89]" href="https://github.com/UnixVextor" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                            
                        </a>


                    </div>




                </div>






            </div>
           



        </Fragment>
    )
}

export default ContectUs;