import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const ContactUs = () => {
  return (
 <>
    <div className='contact-us'>
        <div className='contact-us-layer'>
            <Navbar/>
        <div className='form'>
        <div className="p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl me-auto ms-auto">
        <p className='text-center text-fuchsia-300 text-xl font-bold'>Enter your information and we will contact you.</p>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div className="my-4">
					<textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4 text-center">
					<button className="uppercase text-sm font-bold tracking-wide bg-black text-fuchsia-300 hover:bg-black/75 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">

            <Link to={'/'}>Send</Link>
          </button>
				</div>
			</div>

        </div>
        </div>
    </div>
 </>
  )
}

export default ContactUs
