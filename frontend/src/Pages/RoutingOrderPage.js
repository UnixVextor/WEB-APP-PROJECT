import React from 'react';
// import { Link } from 'react-router-dom';

const RoutingOrderPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <img
                    src="https://resizer.otstatic.com/v2/photos/wide-huge/3/47470547.jpg"
                    alt="placeholder"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ maxWidth: '1000px', maxHeight: '500px' }}
                />
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-[#CFC7B1] hover:bg-blue-500 text-black font-bold py-4 px-8 rounded-lg mr-4 text-xl">
                    Back
                </button>
                {/* <Link to="receive-order"> */}
                    <button className="bg-[#DBC690] hover:bg-blue-500 text-black font-bold py-4 px-8 rounded-lg mr-4 text-xl">
                        Choose Order
                    </button>
                {/* </Link> */}
                <button className="bg-[#AAC9A0] hover:bg-blue-500 text-black font-bold py-4 px-8 rounded-lg text-xl">
                    Your Order
                </button>
            </div>
        </div>
    );
};

export default RoutingOrderPage;