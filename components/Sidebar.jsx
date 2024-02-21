import Link from 'next/link'
import React from 'react'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 p-3 rounded-lg text-white'>
              <RxSketchLogo size={20}/>
            </div>
          </Link>
          <span className='border-b-[1px] p-2 w-full border-gray-200'/>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg my-4'>
              <RxDashboard size={20}/>
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg my-4'>
              <RxPerson size={20}/>
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg my-4'>
              <HiOutlineShoppingBag size={20}/>
            </div>
          </Link>
          <Link href='/settings'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg my-4'>
              <FiSettings size={20}/>
            </div>
          </Link>
        </div>
      </div>
      <main className='w-full ml-20'>{children}</main>
    </div>
  )
};

export default Sidebar;
