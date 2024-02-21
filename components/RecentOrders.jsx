import React from 'react'
import { data } from '@/data/data'
import {FaShoppingBag} from 'react-icons/fa'

const RecentOrders = () => {
  return (
    <div className='w-full lg:h-[70vh] h-[50vh] bg-white m-auto p-4 rounded-lg overflow-scroll'>
        <h1>Recent Orders</h1>
        <ul>
            {data.map((order ) => (
                <li 
                key={order.id} 
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer justify-between'
                >
                    <div className='flex'>
                        <div className='bg-purple-200 p-3 rounded-md'>
                            <FaShoppingBag className='text-purple-800' />
                        </div>
                        <div className='pl-4'>
                            <p className='text-gray-800 font-bold'>₹ {order.total}</p>
                            <p className='text-gray-400 text-sm'>{order.name.first}</p>
                        </div>
                    </div>
                    <p className='lg:inline md:hidden text-sm'>{order.date}</p>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default RecentOrders