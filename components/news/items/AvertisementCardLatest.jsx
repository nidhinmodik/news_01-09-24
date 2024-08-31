import React from 'react'
import Image from 'next/image'

const AvertisementCardLatest = ({ item }) => {
  return (
    <div className='group relative'>
            <div className='overflow-hidden'>
                <div className="w-full h-[200px] relative">
                    <Image className='' layout='fill' src={item.imageUrl} alt='images' />
                </div>
            </div>
        </div>
  )
}

export default AvertisementCardLatest