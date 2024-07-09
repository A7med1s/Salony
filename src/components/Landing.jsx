import React from 'react'
import Navbar from '../Pages/Navbar'
const Landing = () => {
  return (
<>
<div className="landing-page">
    <div className='landing-layer'>
  <Navbar/>
        <div className='text-center'>
            <p className='text-fuchsia-300 font-extrabold text-3xl pt-16 pb-6'><span className='span-one'>Beauty</span> <span className='span-two'>Salon</span></p>
            <div className='layer-two md:px-32 py-16 px-8'>
            <p className='md:font-bold font-semibold text-white text-xl'>We do all the services that preserve your beauty.</p>
            <div className='grid grid-cols-3 gap-x-6 cards pt-32'>
              <div className="card bg-slate-500">Hair care</div>
              <div className="card bg-slate-500">Skin care</div>
              <div className="card bg-slate-500">Body care</div>
            </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Landing
