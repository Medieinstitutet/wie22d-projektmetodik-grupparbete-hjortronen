import React from 'react'
import Link from 'next/link'

const listItems = [
  { name: 'Kontakta Oss/FAQ' },
  { name: 'Orderstatus' },
  { name: 'Leveranstider jul' },
  { name: 'Presentkort' },
  { name: 'Frakt & leverans' },
  { name: 'Betalningsalternativ' },
  { name: 'Köpvillkor' },
  { name: 'Kampanjvillkor' },
  { name: 'Företag' },
]

const Footer = () => {
  return (
    <>
    <div className='h-60 flex justify-between shadow-lg bg-custom-400 text-white text-center pt-2'>  
        <div className='w-1/4 h-20'>
          <h1 className='text-xl font-bold pb-3'>KONTAKT</h1>
          <ul className='text-xs'>
            {listItems.map((listItem, idx) => (
              <li key={idx}>
                {listItem.name}
              </li>
            ))}
          </ul>
          </div>  
        <div className='w-1/4 h-20'>
          <h1 className='text-xl font-bold pb-3'>ÖPPETTIDER</h1>
          <ul className='text-xs'>
            {listItems.map((listItem, idx) => (
              <li key={idx}>
                {listItem.name}
              </li>
            ))}
          </ul>
          </div>  
        <div className='w-1/4 h-20'>
          <h1 className='text-xl font-bold pb-3'>OM OSS</h1>
          <ul className='text-xs'>
            {listItems.map((listItem, idx) => (
              <li key={idx}>
                {listItem.name}
              </li>
            ))}
          </ul>
          </div>  
        <div className='w-1/4 h-20'>
          <Link href={'/admin'}><h1 className='text-xl font-bold hover:text-custom-500'>ADMIN</h1></Link>
          </div>  
        
    </div>
    </>
  )
}

export default Footer