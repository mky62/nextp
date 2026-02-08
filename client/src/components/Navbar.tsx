import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import { Home, ShoppingCart, Bell } from "lucide-react"

const Navbar = () => {
  return (
   <nav className='font-saira flex items-center justify-between border-b p-4'>
    <Link href="/" className='flex items-center gap-1 flex-shrink-0'>
      <Image 
        src="/logo.png" 
        alt="Logo" 
        width={36} 
        height={36} 
        className='w-6 h-6 md:w-9 md:h-9' 
      />
      <p className='text-lg font-semibold hidden sm:block'>ShopIt</p>
    </Link>
    
    <div className='flex items-center gap-2 md:gap-4 tracking-wider'>
      <SearchBar />
      
      <div className='flex items-center'>
        <Link href="/" className='p-2 hover:bg-gray-100 rounded-lg transition-colors' aria-label="Home">
          <Home className='w-5 h-5 md:w-6 md:h-6' />
        </Link>
        
        <Link href="/notifications" className='p-2 hover:bg-gray-100 rounded-lg transition-colors' aria-label="Notifications">
          <Bell className='w-5 h-5 md:w-6 md:h-6' />
        </Link>
        
        <Link href="/cart" className='p-2 hover:bg-gray-100 rounded-lg transition-colors' aria-label="Shopping Cart">
          <ShoppingCart className='w-5 h-5 md:w-6 md:h-6' />
        </Link>
        
        <Link href="/signin" className='p-2 hover:bg-gray-100 rounded-lg transition-colors' aria-label="Sign In">
          <Image 
            width={24}
            height={24}
            src="/signin.svg" 
            alt="Sign In" 
            className='md:w-6 md:h-6' 
          />
        </Link>
      </div>
    </div>
   </nav>
  )
}

export default Navbar