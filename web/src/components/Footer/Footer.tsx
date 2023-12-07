import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='h-32 flex justify-between flex-row-reverse shadow-lg'>
        <div className='w-1/3 flex items-center justify-center'>
            <button className='bg-green-200 hover:text-green-900 px-3 rounded-full'>
        <Link href={'/admin'} className=''>Admin</Link>
            </button>
    </div>
    <div className='py-2 w-2/3 flex justify-around flex-wrap'>
        <div className='w-1/5 h-20 text-center'>Lorem</div>
        <div className='w-1/5 h-20 text-center'>Lorem</div>
        <div className='w-1/5 h-20 text-center'>Lorem</div>
        <div className='w-1/5 h-20 text-center'>Lorem</div>
        <div className='w-1/5 h-20 text-center'>Lorem</div>
        <div className='w-1/5 h-20 text-center'>Copyright©</div>
    </div>
    </div>
    </>
  )
}

export default Footer