import React from 'react'

function Logo() {
  return (
    
      <div class=" md:order-1 flex gap-1">
                      <div className='hidden md:flex md:flex-col md:items-start'>
                          <p className='text-secondary font-bold md:text-xl title'>EUREKA <span className='text-primary'>GLOBAL</span></p>
                          <span className='architects-daughter-regular'>Votre Cabinet Conseil</span>
                      </div>
          <img className=' h-[50px] object-contain' src="./log.png" alt="logo eureka" />
			
		</div>
  )
}

export default Logo