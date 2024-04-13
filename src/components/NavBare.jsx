import React from 'react'
import { Button } from './ui/button'
import Logo from './Logo'

export default function NavBar() {
  return (
      <div className='container rounded-md'>
          <nav class=" rounded-[45px] bg-white  w-100 px-8 md:px-auto">
	<div class="md:h-16 h-12 mx-auto md:px-4 container flex items-center justify-between  md:flex-nowrap">
                  <Logo />
		<div class="text-gray-500 hidden order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
               
				<li class="md:px-4 md:py-2 text-indigo-500"><a href="#">Dashboard</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Search</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
			</ul>
		</div>
		<div class="order-2 md:order-3">
			<Button size="lg" >Prendre redez-vous</Button>
		</div>
	</div>
</nav>
    </div>
  )
}
