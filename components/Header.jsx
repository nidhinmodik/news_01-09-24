import React from 'react'
import moment from 'moment'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import bg_header from '../assets/bg-header.jpg'
import logo from '../assets/logo.png'
import Image from 'next/image'
import Header_Category from './Header_Category'

const Header = () => {
    return (
        <div>
            <div className='px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]'>
                <span className='text-[13px] font-medium'>{moment().format('LLLL')}</span>
                <div className='flex gap-x-[1px]'>
                    <a className='w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]' href=""><FaFacebookF /></a>
                    <a className='w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]' href=""><AiOutlineTwitter /></a>
                    <a className='w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]' href=""><AiFillYoutube /></a>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${bg_header.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="px-6 py-4">
                    <div className='flex justify-center items-center flex-wrap'>
                        <div className='md:w-4/12 w-full'>
                            <div className='flex flex-col justify-center items-center md:items-start'>
                                <Image className='w-[190px] h-[190px]' alt='logo' src={logo} />
                                <div style={{ marginTop: '0px' }} className='w-full flex justify-end'>
                                    <b style={{fontSize: '10px'}}><h6 className='text-[#cccccc]'><p className='text-center justify-center'>നിങ്ങളുടെ വ്യക്തിഗത വാർത്താ സ്രോതസ് - ഓരോ വാർത്തയും നിങ്ങൾക്കായി</p></h6></b>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-8/12 w-full hidden md:block'>
                            <div style={{ marginTop: '130px' }} className='w-full flex justify-end'>
                                <h4 className='text-[#cccccc]'><p className='text-center justify-center'></p></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Header_Category />
        </div>
    )
}

export default Header