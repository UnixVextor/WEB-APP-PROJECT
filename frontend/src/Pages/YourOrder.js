import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function YourOrder() {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        axios.get('https://example.com/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return(
        <div>
            <div className="text-[26px] mt-5 mb-5 font-bold">Your Orders</div>
            {orders.length === 0 ? (
                <div className="text-xl text-center">No orders yet</div>
            ) : (
                orders.map(order => (
                    <Link to={'//orderdetail-Path'} key={order.id}>
                        <div className="grid grid-col-2 grid-flow-col gap-10 bg-white rounded-[30px] pl-4 pr-4 w-4/5 h-342 m-auto mt-5" style={{ backgroundColor: '#CFC7B1' }}>
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
                        </div>
                    </Link>
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

export default YourOrder;
