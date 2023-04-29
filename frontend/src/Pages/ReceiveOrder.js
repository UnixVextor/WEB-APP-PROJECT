import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReceiveOrder() {
    const [orders, setOrders] = useState([]);

    const handleAcceptOrder = (userID) => {
        axios.post('https://example.com/accept-order', { userID })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };


    useEffect(() => {
        axios.get('https://example.com/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="text-[26px] mt-5 mb-5 font-bold">Order can be accepted</div>
            {orders.length === 0 ? (
                <div className="text-xl text-center">No orders yet</div>
            ) : (
                orders.map(order => (
                    <div className="grid
                     bg-white rounded-[30px] p-5 w-4/5 h-342 m-auto mt-5" style={{ backgroundColor: '#CFC7B1' }}>
                        <div>
                            <div className="text-black text-2xl mt-5 mb-5 text-left">
                                <div style={{ fontSize: '24px' }}>Name: {order.name}</div>
                                <div style={{ fontSize: '24px' }}>Tel: {order.tel}</div>
                                <div style={{ fontSize: '24px' }}>Order Detail: {order.order_detail}</div>
                                <div style={{ fontSize: '24px' }}>Note: {order.note}</div>
                                <div style={{ fontSize: '24px' }}>Restaurant Name: {order.restaurant_name}</div>
                                <div style={{ fontSize: '24px' }}>Address: {order.address}</div>
                            </div>
                        </div>
                        <div className="flex justify-end items-end ">
                            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAcceptOrder(order.userID)}>
                                Accept
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div className="fixed bottom-0 left-0 mb-5 ml-5">
                <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">
                    HOME
                </button>
            </div>
        </div>
    );
}

export default ReceiveOrder;
