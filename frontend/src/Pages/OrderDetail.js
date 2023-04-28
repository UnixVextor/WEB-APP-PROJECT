import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function OrderDetail() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  

  useEffect(() => {
    axios.get(`/orders/${id}`).then((response) => {
      setOrder(response.data);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-col-2 grid-flow-col gap-10 bg-white rounded-[30px] pl-4 pr-4 w-4/5 h-342 m-auto mt-5" style={{ backgroundColor: '#CFC7B1' }}>
        <div>
          {/* forms */}
          <div className="text-[26px] mt-5 mb-5 font-bold">Order Details</div>
          <div className="text-black text-2xl mt-5 mb-5 text-left">
            <div style={{ fontSize: '24px' }}>Name: {order.name}</div>
            <div style={{ fontSize: '24px' }}>Tel: {order.tel}</div>
            <div style={{ fontSize: '24px' }}>Order Detail: {order.orderDetail}</div>
            <div style={{ fontSize: '24px' }}>Note: {order.note}</div>
            <div style={{ fontSize: '24px' }}>Restaurant Name: {order.restaurantName}</div>
            <div style={{ fontSize: '24px' }}>Address: {order.address}</div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECD8A5] rounded-[30px] pl-4 pr-4 w-1/5 h-16 m-auto mt-5 text-black text-xl text-center flex items-center justify-center font-bold">
        Update Status
      </div>
      <div className="bg-[#B29A89] rounded-[30px] pl-4 pr-4 w-4/5 h-16 m-auto mt-5 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-20 ">
          <button
            className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${
                selectedButton === 0 ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick(0)}
            >
            Order Accepted
            </button>
            <button
            className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${
                selectedButton === 1 ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick(1)}
            >
            On the way
            </button>
            <button
            className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${
                selectedButton === 2 ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick(2)}
            >
            Pending
            </button>
            <button
            className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${
                selectedButton === 3 ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick(3)}
            >
            Accepted Food
            </button>
            <button
            className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${
                selectedButton === 4 ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick(4)}
            >
            Delivered
            </button>
        </div>
      </div>
      <button className="bg-[#CFC7B1] rounded-md pl-4 pr-4 w-48 h-12 absolute bottom-5 left-5 text-black text-xl font-bold">
        Back To Order
      </button>
    </div>
  );
}

export default OrderDetail;
