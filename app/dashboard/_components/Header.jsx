"use client"
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'


function Header() {

    const path = usePathname();

    useEffect(()=>{
        console.log(path)
    }, [])
    
    return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={''} width ={160} height ={80} alt="logo"/>

        <ul className='flex gap-8'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path== '/dashboard && text-primary font-bold'}`}
            >Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path== '/dashboard/resumecheck && text-primary font-bold'}`}>Resume check</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path== '/dashboard/howitworks && text-primary font-bold'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header;