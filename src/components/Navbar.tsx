import React from 'react'

const Navbar = () => {
  return (



    <div>
        <nav className='bg-black'>
            <div className='max-w-7xl mx-auto px-4 sm:p-6 lg:px-8'>
                <div className='flex items-center justify-between h-8'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <a href="/" className='text-white'>LOGO</a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="/" className='text-white hover:bg-white hover:text-black rounded p-2'>Sign Up</a>
                            <a href="/" className='text-white hover:bg-white hover:text-black rounded p-2'>Log In</a>
                            <form className='relative '>
                                <div className='text-white'>
                                    <input type="search" placeholder='Type Here'
                                    className='w-full p-1 rounded-full bg-slate-800' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar