import React from 'react';
import { Fragment } from 'react';
// import { Link } from 'react-router-dom';

const RoutingOrderPage = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="bg-white rounded-lg shadow-lg p-4 mb-2">
          <img
            src="https://resizer.otstatic.com/v2/photos/wide-huge/3/47470547.jpg"
            alt="placeholder"
            className="w-full h-full object-cover rounded-lg"
            style={{ maxWidth: '854px', maxHeight: '480px' }}
          />
        </div >
      </div>

      <div className="grid p-2 gap-2 sm:flex sm:justify-evenly">
        <button className="bg-[#CDC5AF] hover:bg-[#B9AE90] py-3 px-3 rounded-lg text-xl hover:scale-110 ease-in-out duration-200">
          Back
        </button>
        {/* <Link to="receive-order"> */}
        <button className="bg-[#ECD8A5] hover:bg-[#E3C67B] py-3 px-3 rounded-lg text-xl hover:scale-110 ease-in-out duration-200">
          Choose Order
        </button>
        {/* </Link> */}
        <button className="bg-[#BBD9B0] hover:bg-[#9DC88E] py-3 px-3 rounded-lg text-xl hover:scale-110 ease-in-out duration-200">
          Your Order
        </button>
      </div>
    </Fragment>
  );
};

export default RoutingOrderPage;
