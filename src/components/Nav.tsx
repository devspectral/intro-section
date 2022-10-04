import React from 'react'

function Nav() {
  return (
    <>
        <div className='w-[1440px] mx-auto font-Epi'>
            <div className='flex justify-between'>                                  
                <div className='my-2'>
                    <nav>
                        <ul className='flex p-4 items-center justify-center '>
                            <li className='mr-8 font-bold text-4xl mb-1'>snap</li>
                            <li className='mx-6 text-[#696969] hover:text-[#141414] transition'>Features</li>
                            <li className='mx-6 text-[#696969] hover:text-[#141414] transition'>Company</li>
                            <li className='mx-6 text-[#696969] hover:text-[#141414] transition'>Careers</li>
                            <li className='mx-6 text-[#696969] hover:text-[#141414] transition'>About</li>                          
                       </ul>
                    </nav>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='p-2 text-[#696969] hover:text-[#141414] w-[158px] h-[60px] transition'>Login</button>
                    <button className='p-2 text-[#696969] hover:text-[#141414] w-[158px] h-[60px] border-2 rounded-3xl border-[#696969] hover:border-[#141414] transition delay-75'>Register</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Nav;