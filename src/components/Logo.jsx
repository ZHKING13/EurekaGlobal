import React from 'react'

function Logo() {
  return (
    
      <div class=" md:order-1 flex gap-2">
                      <div className='hidden justify-center mb-3 items-center relative ml-2 md:flex md:flex-col md:items-start'>
                          <p className='text-secondary font-bold mt-[0] pb-0 md:text-[15px] title'>EUREKA <span className='text-primary'>GLOBAL</span></p>
                          <span style={{
                            
                          }} className='architects-daughter-regular absolute top-8 text-start left-0 right-0 w-auto  pt-0 text-[13px]'>Votre Cabinet Conseil</span>
                      </div>
          <img className=' h-[52px] object-contain' src="/log.png" alt="logo eureka" />
			
		</div>
  )
}

export default Logo