import React from 'react'

const TopCards = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 p-4 cursor-pointer'>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col'>
                <p className='font-bold text-2xl'>₹ 5000</p>
                <p className='font-normal text-sm text-gray-600'>Daily Revenue</p>
            </div>
            <div className='bg-green-300 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'>₹ 15000</h2>
                <p className='font-normal text-sm text-gray-600'>Monthly Revenue</p>
            </div>
            <div className='bg-green-300 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+58%</span>
            </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'>₹ 7000</h2>
                <p className='font-normal text-sm text-gray-600'>Weekly Revenue</p>
            </div>
            <div className='bg-red-300 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-red-700 text-lg'>-5%</span>
            </div>
        </div>
    </div>
  )
};

export default TopCards
