import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
 <>
 <nav className="bg-transparent">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
        <button onClick={()=>{
          document.getElementById("mobile-menu").classList.toggle("hidden")
        }} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
         <Link to="/" className='font-black text-2xl logo'>Salony</Link>
        </div>
        <div className="hidden ms-auto me-auto sm:block">
          <div className="flex font-extrabold">
            <Link to="/" className="text-white hover:bg-fuchsia-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/products" className="text-white hover:bg-fuchsia-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Products</Link>
            <Link to="/services" className="text-white hover:bg-fuchsia-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Services</Link>
            <Link to="/contact-us" className="text-white hover:bg-fuchsia-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Us</Link>

          </div>
        </div>
      </div>
     
    </div>
  </div>

  <div className="sm:hidden bg-transparent hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/" className="text-gray-300 hover:bg-fuchsia-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</Link>
            <Link to="/products" className="text-gray-300 hover:bg-fuchsia-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Products</Link>
            <Link to="/services" className="text-gray-300 hover:bg-fuchsia-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Services</Link>
            <Link to="/contact-us" className="text-gray-300 hover:bg-fuchsia-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</Link>
          
    </div>
  </div>
  
</nav>

 </>
  )
}

export default Navbar
